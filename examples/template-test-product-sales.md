---
# Template Test Case: Simple Product Sales with Auto-calculation
# Testing quantity × rate auto-calculation
---

company:
  name: "Creative Design Studio"
  address: "789 Art District Ave"
  city: "Austin, TX 78704"
  phone: "(512) 555-0456"
  email: "hello@creativestudio.com"
  title: "Design & Development Services"

client:
  name: "Mr. Robert Wilson"
  company: "Wilson Marketing Group"
  address: "321 Business Plaza"
  city: "Austin, TX 78701"
  phone: "(512) 555-0987"
  email: "rob@wilsonmarketing.com"
  title: "Mr."

invoice:
  number: "WMG-2024-Q1-05"
  date: "2024-03-20"
  dueDate: "2024-04-20"

# Product-based billing with quantity calculations
items:
  - description: "Custom Logo Design Concepts"
    quantity: "5"
    rate: "$150.00"
    # amount will be auto-calculated as $750.00
  - description: "Business Card Design (Double-sided)"
    quantity: "1"
    rate: "$125.00"
    # amount will be auto-calculated as $125.00
  - description: "Website Mockup Pages"
    quantity: "8"
    rate: "$200.00"
    # amount will be auto-calculated as $1,600.00
  - description: "Social Media Graphics Package"
    quantity: "12"
    rate: "$45.00"
    # amount will be auto-calculated as $540.00
  - description: "Brand Guidelines Document"
    quantity: "1"
    rate: "$350.00"
    # amount will be auto-calculated as $350.00
  - description: "Print-ready Brochure Design"
    quantity: "2"
    rate: "$275.00"
    # amount will be auto-calculated as $550.00

summary:
  subtotal: "$3,920.00"
  tax: "$313.60"
  total: "$4,233.60"

footer:
  notes: "Template test case demonstrating auto-calculation of quantity × rate for design services"
  terms: "Payment due within 30 days. Credit card or check accepted."