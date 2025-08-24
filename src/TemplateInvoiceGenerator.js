/**
 * Template-based Invoice Generator
 * Replicates the design language of "Invoice 23 for SAV-for-template.pdf"
 * 
 * This generator creates professional two-page invoices:
 * Page 1: Business letter with cover letter content
 * Page 2: Detailed invoice table with professional styling
 */

const PDFDocument = require('pdfkit');
const fs = require('fs');
const path = require('path');

class TemplateInvoiceGenerator {
    constructor(options = {}) {
        this.options = {
            // Typography matching the template
            fonts: {
                regular: 'Times-Roman',
                bold: 'Times-Bold',
                italic: 'Times-Italic'
            },
            fontSize: {
                letterHead: 12,
                businessLetter: 11,
                invoiceTitle: 14,
                tableHeader: 10,
                tableBody: 9,
                footer: 9
            },
            // Colors and styling matching template
            colors: {
                text: '#000000',
                tableHeader: '#f0f0f0',
                tableBorder: '#000000'
            },
            margins: {
                top: 72,    // 1 inch
                left: 72,   // 1 inch  
                right: 72,  // 1 inch
                bottom: 72  // 1 inch
            },
            // Page dimensions
            pageWidth: 612,  // 8.5 inches
            pageHeight: 792, // 11 inches
            ...options
        };
    }

    /**
     * Generate a complete invoice matching the template design
     */
    async generateTemplateInvoice(invoiceData, outputPath) {
        return new Promise((resolve, reject) => {
            try {
                const doc = new PDFDocument({
                    size: 'LETTER',
                    margins: this.options.margins
                });

                const stream = fs.createWriteStream(outputPath);
                doc.pipe(stream);

                // Page 1: Cover letter (business correspondence)
                this.generateCoverLetter(doc, invoiceData);
                
                // Page 2: Invoice table
                doc.addPage();
                this.generateInvoiceTable(doc, invoiceData);

                doc.end();

                stream.on('finish', () => resolve(outputPath));
                stream.on('error', (error) => reject(error));

            } catch (error) {
                reject(error);
            }
        });
    }

    /**
     * Generate Page 1: Professional cover letter matching template style
     */
    generateCoverLetter(doc, data) {
        const { margins } = this.options;
        let currentY = margins.top;

        // Sender information (top left, matching template layout)
        doc.font(this.options.fonts.regular)
           .fontSize(this.options.fontSize.letterHead)
           .fillColor(this.options.colors.text);

        const senderInfo = [
            data.company?.name || 'Your Company Name',
            data.company?.address || 'Your Address',
            data.company?.city || 'Your City, State ZIP',
            data.company?.phone || 'Your Phone',
            data.company?.email || 'your@email.com'
        ].filter(line => line && line.trim());

        senderInfo.forEach(line => {
            doc.text(line, margins.left, currentY);
            currentY += 14;
        });

        currentY += 10;

        // Invoice title and date (matching template position)
        doc.font(this.options.fonts.bold)
           .fontSize(this.options.fontSize.invoiceTitle)
           .text(`Invoice #${data.invoice?.number || '0001'} for Services Rendered`, margins.left, currentY);
        
        currentY += 20;
        
        doc.font(this.options.fonts.regular)
           .fontSize(this.options.fontSize.letterHead)
           .text(this.formatDate(data.invoice?.date || new Date()), margins.left, currentY);

        currentY += 30;

        // Recipient information (matching template layout)
        const recipientInfo = [
            data.client?.name || 'Client Name',
            data.client?.company || '',
            data.client?.address || 'Client Address',
            data.client?.city || 'Client City, State ZIP',
            data.client?.phone || '',
            data.client?.email || 'client@email.com'
        ].filter(line => line && line.trim());

        recipientInfo.forEach(line => {
            doc.text(line, margins.left, currentY);
            currentY += 14;
        });

        // CC line if present
        if (data.cc && Array.isArray(data.cc) && data.cc.length > 0) {
            currentY += 10;
            doc.text('cc:', margins.left, currentY);
            currentY += 14;
            
            data.cc.forEach(person => {
                doc.text(person.name || '', margins.left, currentY);
                currentY += 12;
                if (person.email) {
                    doc.text(person.email, margins.left, currentY);
                    currentY += 12;
                }
            });
        }

        currentY += 20;

        // Professional business letter content
        const greeting = `Hello ${this.getRecipientTitle(data.client)},`;
        doc.text(greeting, margins.left, currentY);
        currentY += 20;

        // Generate letter content based on services
        const letterContent = this.generateLetterContent(data);
        const paragraphs = letterContent.split('\n\n');
        
        paragraphs.forEach(paragraph => {
            if (paragraph.trim()) {
                // Use PDFKit's built-in text wrapping
                const textHeight = doc.heightOfString(paragraph, {
                    width: this.options.pageWidth - margins.left - margins.right
                });
                
                doc.text(paragraph, margins.left, currentY, {
                    width: this.options.pageWidth - margins.left - margins.right,
                    align: 'left'
                });
                
                currentY += textHeight + 10; // Add paragraph spacing
            }
        });

        currentY += 10;

        // Professional closing
        doc.text('Sincerely,', margins.left, currentY);
        currentY += 30;
        
        doc.text(data.company?.name || 'Your Name', margins.left, currentY);
        currentY += 14;
        doc.text(data.company?.title || 'Professional Title', margins.left, currentY);
        currentY += 20;
        
        doc.text('Attached:', margins.left, currentY);
        currentY += 14;
        doc.text(`Invoice #${data.invoice?.number || '0001'}`, margins.left + 20, currentY);
    }

    /**
     * Generate Page 2: Invoice table matching template design
     */
    generateInvoiceTable(doc, data) {
        const { margins } = this.options;
        let currentY = margins.top;

        // Header information (repeated from page 1)
        doc.font(this.options.fonts.regular)
           .fontSize(this.options.fontSize.letterHead);

        // Sender info (top section)
        const senderInfo = [
            data.company?.name || 'Your Company Name',
            data.company?.address || 'Your Address',
            data.company?.city || 'Your City, State ZIP',
            data.company?.phone || 'Your Phone',
            data.company?.email || 'your@email.com'
        ].filter(line => line && line.trim());

        senderInfo.forEach(line => {
            doc.text(line, margins.left, currentY);
            currentY += 14;
        });

        currentY += 20;

        // Table setup matching template layout
        const tableTop = currentY;
        const tableLeft = margins.left;
        const tableWidth = this.options.pageWidth - margins.left - margins.right;
        
        // Column configuration matching template
        const columns = [
            { title: 'Date', width: 120, align: 'left' },
            { title: 'Job Description', width: 280, align: 'left' },
            { title: 'Day Rate/Expense', width: 120, align: 'right' }
        ];

        // Calculate column positions
        let columnX = tableLeft;
        columns.forEach(col => {
            col.x = columnX;
            columnX += col.width;
        });

        const rowHeight = 25;
        
        // Table header
        doc.rect(tableLeft, tableTop, tableWidth, rowHeight)
           .fillAndStroke(this.options.colors.tableHeader, this.options.colors.tableBorder);

        doc.fillColor(this.options.colors.text)
           .font(this.options.fonts.bold)
           .fontSize(this.options.fontSize.tableHeader);

        columns.forEach(col => {
            doc.text(col.title, col.x + 5, tableTop + 8, {
                width: col.width - 10,
                align: col.align
            });
        });

        // Process and auto-calculate items
        const processedItems = this.processItemsForTable(data.items || []);
        
        // Table rows
        currentY = tableTop + rowHeight;
        doc.font(this.options.fonts.regular)
           .fontSize(this.options.fontSize.tableBody);

        processedItems.forEach((item, index) => {
            // Calculate row height based on description length
            const descriptionHeight = this.calculateTextHeight(doc, item.description || '', columns[1].width - 10);
            const actualRowHeight = Math.max(rowHeight, descriptionHeight + 10);

            // Row background (alternating for readability)
            if (index % 2 === 1) {
                doc.rect(tableLeft, currentY, tableWidth, actualRowHeight)
                   .fillColor('#f9f9f9')
                   .fill();
            }

            // Row border
            doc.rect(tableLeft, currentY, tableWidth, actualRowHeight)
               .strokeColor(this.options.colors.tableBorder)
               .stroke();

            // Cell contents
            const rowData = [
                this.formatDate(item.date),
                item.description || '',
                item.amount || ''
            ];

            columns.forEach((col, colIndex) => {
                const cellValue = rowData[colIndex];
                doc.fillColor(this.options.colors.text)
                   .font(this.options.fonts.regular)
                   .fontSize(this.options.fontSize.tableBody)
                   .text(cellValue, col.x + 5, currentY + 8, {
                       width: col.width - 10,
                       align: col.align,
                       height: actualRowHeight - 10
                   });
            });

            currentY += actualRowHeight;
        });

        // Total row
        currentY += 10;
        const totalY = currentY;
        
        doc.rect(tableLeft, totalY, tableWidth, rowHeight)
           .fillAndStroke('#f0f0f0', this.options.colors.tableBorder);

        doc.font(this.options.fonts.bold)
           .fontSize(this.options.fontSize.tableHeader)
           .text('Total:', tableLeft + 5, totalY + 8)
           .text(data.summary?.total || this.calculateTotal(processedItems), 
                 tableLeft + tableWidth - 125, totalY + 8, {
                     width: 120,
                     align: 'right'
                 });
    }

    /**
     * Helper methods
     */
    
    getRecipientTitle(client) {
        if (client?.title) return client.title + ' ' + (client.name || '');
        return client?.name || 'Client';
    }

    formatDate(dateInput) {
        if (!dateInput) return '';
        
        const date = new Date(dateInput);
        if (isNaN(date.getTime())) return dateInput;
        
        // Format: "Friday, August 16, 2024" matching template
        return date.toLocaleDateString('en-US', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    }

    generateLetterContent(data) {
        const services = this.summarizeServices(data.items || []);
        const total = data.summary?.total || this.calculateTotal(data.items || []);
        
        return `Attached you will find an invoice for my consulting work${services.description}. The invoice enclosed reflects ${services.rateDescription}.

${services.detailsDescription}

Please let me know if there is anything else I can do. Payment can be made via your preferred method.

Thank you very much. It was a pleasure to work on this project and I look forward to the next opportunity to do so.`;
    }

    summarizeServices(items) {
        if (!items || items.length === 0) {
            return {
                description: '',
                rateDescription: 'the agreed upon rates',
                detailsDescription: 'Please review the attached invoice for complete details.'
            };
        }

        // Analyze the services to create appropriate description
        const hasDateRanges = items.some(item => item.date);
        const serviceTypes = [...new Set(items.map(item => {
            const desc = item.description || '';
            return desc.split(' ')[0]; // First word as service type
        }))].filter(type => type);

        const description = hasDateRanges 
            ? ` from ${this.formatDate(items[0]?.date)} through ${this.formatDate(items[items.length - 1]?.date)}`
            : '';

        return {
            description,
            rateDescription: serviceTypes.length > 0 
                ? `rates for ${serviceTypes.join(', ').toLowerCase()} services`
                : 'the rates shown',
            detailsDescription: 'Please review the attached detailed breakdown of services provided.'
        };
    }

    processItemsForTable(items) {
        return items.map(item => {
            const processed = { ...item };
            
            // Auto-calculate amount if missing
            if (!processed.amount) {
                const quantity = this.parseNumericValue(processed.quantity || processed.hours);
                const rate = this.parseNumericValue(processed.rate || processed.hourlyRate);
                
                if (quantity !== null && rate !== null) {
                    const calculatedAmount = quantity * rate;
                    processed.amount = this.formatCurrency(calculatedAmount);
                }
            }
            
            return processed;
        });
    }

    parseNumericValue(value) {
        if (!value) return null;
        const cleanValue = value.toString().replace(/[$,\s]/g, '');
        const numericValue = parseFloat(cleanValue);
        return isNaN(numericValue) ? null : numericValue;
    }

    formatCurrency(amount) {
        return `$${amount.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`;
    }

    calculateTotal(items) {
        const total = items.reduce((sum, item) => {
            const amount = this.parseNumericValue(item.amount) || 0;
            return sum + amount;
        }, 0);
        return this.formatCurrency(total);
    }

    calculateTextHeight(doc, text, width) {
        if (!text) return 14;
        const lines = doc.heightOfString(text, { width });
        return Math.max(14, lines);
    }

    wrapText(doc, text, maxWidth) {
        const words = text.split(' ');
        const lines = [];
        let currentLine = '';

        words.forEach(word => {
            const testLine = currentLine ? `${currentLine} ${word}` : word;
            if (doc.widthOfString(testLine) <= maxWidth) {
                currentLine = testLine;
            } else {
                if (currentLine) lines.push(currentLine);
                currentLine = word;
            }
        });
        
        if (currentLine) lines.push(currentLine);
        return lines;
    }
}

module.exports = TemplateInvoiceGenerator;