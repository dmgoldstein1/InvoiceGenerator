/**
 * Template Auto-calculation Test
 * Tests the auto-calculation functionality of the template generator
 */

const path = require('path');
const InvoiceParser = require('../src/InvoiceParser');
const TemplateInvoiceGenerator = require('../src/TemplateInvoiceGenerator');

async function testAutoCalculation() {
    console.log('🧪 Testing Template Auto-calculation Functionality\n');

    // Test Case 1: Hours × Hourly Rate calculation
    const testData1 = {
        company: {
            name: "AutoCalc Test Corp",
            address: "123 Test Street",
            city: "Test City, TC 12345",
            phone: "(555) 123-4567",
            email: "test@autocorp.com"
        },
        client: {
            name: "Ms. Test Client",
            email: "client@test.com",
            title: "Ms."
        },
        invoice: {
            number: "AUTO-TEST-001",
            date: "2024-03-25"
        },
        items: [
            {
                description: "Development Work",
                hours: "8",
                hourlyRate: "$125.00"
                // Should auto-calculate to $1,000.00
            },
            {
                description: "Consulting",
                hours: "4.5",
                hourlyRate: "$150.00"
                // Should auto-calculate to $675.00
            },
            {
                description: "Testing",
                quantity: "10",
                rate: "$50.00"
                // Should auto-calculate to $500.00
            }
        ]
    };

    console.log('Test 1: Auto-calculation test (hours × hourly rate)');
    
    const generator = new TemplateInvoiceGenerator();
    
    // Process items to test auto-calculation
    const processedItems = testData1.items.map(item => generator.processItemsForTable([item])[0]);
    
    console.log('Original items:', testData1.items);
    console.log('Processed items:', processedItems);
    
    // Check calculations
    const expected = [
        { amount: '$1,000.00', calculation: '8 × $125.00' },
        { amount: '$675.00', calculation: '4.5 × $150.00' },
        { amount: '$500.00', calculation: '10 × $50.00' }
    ];
    
    let allPassed = true;
    processedItems.forEach((item, index) => {
        const expectedAmount = expected[index].amount;
        const actualAmount = item.amount;
        const passed = actualAmount === expectedAmount;
        
        console.log(`  Item ${index + 1}: ${expected[index].calculation} = ${actualAmount} (expected: ${expectedAmount}) ${passed ? '✅' : '❌'}`);
        
        if (!passed) allPassed = false;
    });

    // Generate PDF to test full integration
    await generator.generateTemplateInvoice(testData1, 'test_outputs/auto-calc-test.pdf');
    
    console.log(`\n📋 Auto-calculation Test: ${allPassed ? '✅ PASSED' : '❌ FAILED'}`);
    console.log('📁 Generated: test_outputs/auto-calc-test.pdf\n');

    return allPassed;
}

async function runAllTests() {
    console.log('🚀 Running Template Generator Tests\n');
    
    const results = [];
    
    try {
        results.push(await testAutoCalculation());
        
        const allPassed = results.every(result => result);
        
        console.log('📊 Test Summary:');
        console.log(`   Total tests: ${results.length}`);
        console.log(`   Passed: ${results.filter(r => r).length}`);
        console.log(`   Failed: ${results.filter(r => !r).length}`);
        console.log(`   Overall: ${allPassed ? '✅ ALL TESTS PASSED' : '❌ SOME TESTS FAILED'}`);
        
    } catch (error) {
        console.error('❌ Test Error:', error.message);
    }
}

if (require.main === module) {
    runAllTests();
}

module.exports = { testAutoCalculation };