#!/usr/bin/env node

/**
 * Template-based Invoice Generator CLI
 * Generates professional invoices matching the original template design
 */

const path = require('path');
const InvoiceParser = require('./InvoiceParser');
const TemplateInvoiceGenerator = require('./TemplateInvoiceGenerator');

function showUsage() {
    console.log(`
Template Invoice Generator CLI

Usage:
  node template-cli.js <input.md> <output.pdf>

Description:
  Generates professional PDF invoices matching the design language of 
  "Invoice 23 for SAV-for-template.pdf" including cover letter and invoice table.

Examples:
  node template-cli.js examples/consulting.md output/invoice.pdf
  node template-cli.js test-data.md professional-invoice.pdf

Features:
  - Two-page layout: Cover letter + Invoice table
  - Professional business correspondence format
  - Auto-calculation of amounts from quantity × rate
  - Template-matching typography and styling
  - Support for CC recipients and detailed service descriptions
`);
}

async function generateTemplateInvoice(inputPath, outputPath) {
    try {
        console.log('📄 Template Invoice Generator');
        console.log('🎯 Replicating design language of original template...\n');

        const startTime = Date.now();

        // Parse the input file
        console.log(`📖 Parsing input file: ${inputPath}`);
        const parser = new InvoiceParser();
        const invoiceData = parser.parseFile(inputPath);
        
        // Add CC information if not present in input
        if (!invoiceData.cc) {
            invoiceData.cc = [];
        }

        console.log(`✅ Parsed ${(invoiceData.items || []).length} items`);

        // Generate PDF using template generator
        console.log(`🎨 Generating professional PDF with template design...`);
        const generator = new TemplateInvoiceGenerator();
        await generator.generateTemplateInvoice(invoiceData, outputPath);

        const endTime = Date.now();
        const fileSize = require('fs').statSync(outputPath).size;

        console.log(`\n🎉 Professional invoice generated successfully!`);
        console.log(`📁 Output: ${outputPath}`);
        console.log(`📊 File size: ${(fileSize / 1024).toFixed(1)} KB`);
        console.log(`⏱️  Generation time: ${endTime - startTime}ms`);
        console.log(`\n📋 Features included:`);
        console.log(`   ✓ Two-page professional layout`);
        console.log(`   ✓ Business correspondence cover letter`);
        console.log(`   ✓ Template-matching styling and typography`);
        console.log(`   ✓ Auto-calculated amounts where applicable`);
        console.log(`   ✓ Professional business formatting`);

    } catch (error) {
        console.error(`\n❌ Error generating invoice: ${error.message}`);
        process.exit(1);
    }
}

// Main CLI logic
function main() {
    const args = process.argv.slice(2);

    if (args.length === 0 || args.includes('--help') || args.includes('-h')) {
        showUsage();
        return;
    }

    if (args.length !== 2) {
        console.error('❌ Error: Please provide both input and output file paths.');
        showUsage();
        process.exit(1);
    }

    const [inputPath, outputPath] = args;

    // Validate input file exists
    if (!require('fs').existsSync(inputPath)) {
        console.error(`❌ Error: Input file not found: ${inputPath}`);
        process.exit(1);
    }

    // Ensure output directory exists
    const outputDir = path.dirname(outputPath);
    if (!require('fs').existsSync(outputDir)) {
        require('fs').mkdirSync(outputDir, { recursive: true });
    }

    generateTemplateInvoice(inputPath, outputPath);
}

if (require.main === module) {
    main();
}

module.exports = { generateTemplateInvoice };