# Invoice Generator

A Node.js application that generates professionally formatted PDF invoices from markdown-like input files. This tool creates clean, well-structured invoices with alternating row colors, proper column spacing, and professional styling.

## Features

- **Markdown-like Input**: Easy-to-write input format supporting both YAML and markdown table syntax
- **Professional PDF Output**: Generates clean, formatted PDF invoices
- **Table Formatting**: Alternating row colors and proper column alignment
- **Flexible Input Formats**: Supports both YAML front matter and markdown table formats
- **Command Line Interface**: Simple CLI for batch processing
- **Programmatic API**: Use as a library in your Node.js applications

## Installation

```bash
npm install
```

## Usage

### Command Line Interface

```bash
# Generate PDF from markdown file
node src/cli.js examples/sample-invoice.md

# Specify output file
node src/cli.js examples/sample-invoice.md output/my-invoice.pdf

# Show help
node src/cli.js --help
```

### Programmatic Usage

```javascript
const { generateFromFile, InvoiceGenerator, InvoiceParser } = require('./src');

// Generate from file
await generateFromFile('input.md', 'output.pdf');

// Generate from data
const invoiceData = {
    company: { name: 'My Company' },
    client: { name: 'Client Name' },
    invoice: { number: 'INV-001', date: '2024-01-01' },
    items: [
        { description: 'Service', quantity: '1', rate: '$100', amount: '$100' }
    ],
    summary: { total: '$100' }
};

await generateFromData(invoiceData, 'output.pdf');
```

## Input Format

The invoice generator supports two input formats with enhanced auto-calculation capabilities:

### 1. YAML Format (Recommended)

```yaml
---
# Invoice data in YAML format
---

company:
  name: "Your Company Name"
  address: "123 Business Street"
  city: "City, State 12345"
  email: "billing@company.com"
  phone: "(555) 123-4567"

client:
  name: "Client Company Inc."
  address: "456 Client Avenue"
  city: "Client City, State 67890"
  email: "client@email.com"

invoice:
  number: "INV-001"
  date: "2024-01-15"
  dueDate: "2024-02-15"

items:
  # Basic format with auto-calculation
  - description: "Web Design Services"
    quantity: "1"
    rate: "$2,500.00"
    # amount will be auto-calculated as $2,500.00
  
  # Date-based hourly tracking
  - description: "Development Work"
    date: "2024-01-16"
    hours: "8"
    hourlyRate: "$150.00"
    # amount will be auto-calculated as $1,200.00
  
  # Mixed format
  - description: "Project Management"
    quantity: "20"
    rate: "$100.00"
    # amount will be auto-calculated as $2,000.00

summary:
  subtotal: "$5,700.00"
  tax: "$456.00"
  total: "$6,156.00"

footer:
  notes: "Thank you for your business!"
  terms: "Payment due within 30 days."
```

### 2. Markdown Table Format

```markdown
# Invoice

## Company Information
Your Company Name
123 Business Street
City, State 12345
Email: billing@company.com

## Client Information
Client Company Inc.
456 Client Avenue
Client City, State 67890

## Invoice Details
Invoice Number: INV-001
Date: 2024-01-15
Due Date: 2024-02-15

## Items and Services

| Date | Description | Hours | Hourly Rate |
|------|-------------|-------|-------------|
| 2024-01-15 | Web Design | 8 | $150.00 |
| 2024-01-16 | Development | 10 | $125.00 |
| 2024-01-17 | Testing | 4 | $100.00 |

## Summary
Subtotal: $2,850.00
Tax: $228.00
Total: $3,078.00

## Footer
Notes: Thank you for your business!
Terms: Payment due within 30 days.
```

### Enhanced Features

#### ✨ **Auto-Calculation**
- **No manual math required**: Simply provide `quantity` and `rate`, or `hours` and `hourlyRate`
- **Automatic amount calculation**: The system calculates `amount = quantity × rate` or `amount = hours × hourlyRate`
- **Currency formatting**: Results are properly formatted with commas and dollar signs

#### 📅 **Flexible Column Support**
The system automatically detects and displays relevant columns based on your data:
- **Date**: When work was performed (optional)
- **Description**: Service or item description (required)
- **Quantity/Hours**: Amount of work or items (optional)
- **Rate/Hourly Rate**: Price per unit or hour (optional)
- **Amount**: Total cost (auto-calculated or manual)

#### 🎯 **Dynamic Table Layout**
- Tables adapt automatically to show only relevant columns
- Professional formatting with proper alignment
- Supports mixed data types in the same invoice

### Supported Column Combinations

1. **Basic**: Description, Quantity, Rate, Amount
2. **Time-based**: Date, Description, Hours, Hourly Rate, Amount  
3. **Mixed**: Date, Description, Quantity, Rate, Amount
4. **Custom**: Any combination of the above fields

## File Structure

```
src/
├── index.js           # Main module exports
├── cli.js             # Command line interface
├── InvoiceGenerator.js # PDF generation logic
└── InvoiceParser.js   # Input file parsing

examples/
├── sample-invoice.md      # YAML format example
└── table-format-invoice.md # Markdown table example

output/                # Generated PDF files
tests/                 # Test files
```

## Styling Features

- **Professional Layout**: Clean, business-appropriate design
- **Alternating Row Colors**: Enhanced readability with grey/white alternating rows
- **Proper Typography**: Consistent font sizing and spacing
- **Table Formatting**: Well-aligned columns with appropriate widths
- **Header Styling**: Distinct header row with background color
- **Border Management**: Clean table borders and spacing

## Dependencies

- **pdfkit**: PDF generation
- **js-yaml**: YAML parsing
- **markdown-it**: Markdown parsing

## Examples

See the `examples/` directory for sample input files demonstrating both YAML and markdown table formats.

## Error Handling

The application includes comprehensive error handling for:
- Invalid input files
- Missing required fields
- File system errors
- PDF generation errors

## Contributing

This project was generated by GitHub Copilot. When making changes:
1. Follow the existing code style
2. Add appropriate error handling
3. Update documentation as needed
4. Test with sample files

## License

MIT License