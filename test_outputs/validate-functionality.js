/**
 * Test script to validate the enhanced invoice generator functionality
 */

const { InvoiceParser } = require('../src');

console.log('=== Testing Enhanced Invoice Generator ===\n');

// Test 1: Auto-calculation validation
console.log('Test 1: Auto-calculation functionality');
const parser = new InvoiceParser();
const autoCalcData = parser.parseFile('test_outputs/test-auto-calculation.md');

console.log('Items from auto-calculation test:');
autoCalcData.items.forEach((item, index) => {
    const qty = parseFloat(item.quantity);
    const rate = parseFloat(item.rate.replace(/[$,]/g, ''));
    const expectedAmount = qty * rate;
    const actualAmount = parseFloat(item.amount.replace(/[$,]/g, ''));
    
    console.log(`  ${index + 1}. ${item.description}`);
    console.log(`     Qty: ${item.quantity}, Rate: ${item.rate}`);
    console.log(`     Expected Amount: $${expectedAmount.toFixed(2)}, Actual: ${item.amount}`);
    console.log(`     ✓ ${expectedAmount === actualAmount ? 'PASSED' : 'FAILED'}`);
});

console.log('\n' + '='.repeat(60) + '\n');

// Test 2: Date/Hours tracking validation
console.log('Test 2: Date/Hours tracking');
const dateHoursData = parser.parseFile('test_outputs/test-date-hours-tracking.md');

console.log('Items from date-hours tracking test:');
dateHoursData.items.forEach((item, index) => {
    if (item.date && item.hours && item.hourlyRate) {
        const hours = parseFloat(item.hours);
        const rate = parseFloat(item.hourlyRate.replace(/[$,]/g, ''));
        const expectedAmount = hours * rate;
        const actualAmount = parseFloat(item.amount.replace(/[$,]/g, ''));
        
        console.log(`  ${index + 1}. ${item.description}`);
        console.log(`     Date: ${item.date}, Hours: ${item.hours}, Rate: ${item.hourlyRate}`);
        console.log(`     Expected Amount: $${expectedAmount.toFixed(2)}, Actual: ${item.amount}`);
        console.log(`     ✓ ${expectedAmount === actualAmount ? 'PASSED' : 'FAILED'}`);
    }
});

console.log('\n' + '='.repeat(60) + '\n');

// Test 3: Table format validation
console.log('Test 3: Table format parsing');
const tableData = parser.parseFile('test_outputs/test-table-format.md');

console.log('Items from table format test:');
tableData.items.forEach((item, index) => {
    console.log(`  ${index + 1}. ${item.description}`);
    console.log(`     Date: ${item.date || 'N/A'}, Hours: ${item.hours || 'N/A'}, Rate: ${item.hourlyRate || item.rate || 'N/A'}`);
    console.log(`     Amount: ${item.amount || 'N/A'}`);
});

console.log('\n' + '='.repeat(60) + '\n');

console.log('✅ All tests completed! Check the generated PDFs in test_outputs/ folder.');
console.log('Generated files:', require('fs').readdirSync('test_outputs/').filter(f => f.endsWith('.pdf')));