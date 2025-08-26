---
# Test Case 1: Auto-calculation without manual amounts
---

company:
  name: "TechPro Consulting"
  address: "789 Innovation Drive"
  city: "Austin, TX 78701"
  email: "billing@techpro.com"
  phone: "(512) 555-0199"

client:
  name: "StartupCo Inc."
  address: "123 Entrepreneur Lane"
  city: "Dallas, TX 75201"
  email: "finance@startupco.com"

invoice:
  number: "AUTO-001"
  date: "2024-03-20"
  dueDate: "2024-04-20"

# Test auto-calculation: Only quantity and rate provided, amount should be calculated
items:
  - description: "Frontend Development"
    quantity: "20"
    rate: "$125.00"
    # amount should be auto-calculated as $2,500.00
  - description: "Backend API Development"
    quantity: "15"
    rate: "$150.00"
    # amount should be auto-calculated as $2,250.00
  - description: "Database Design"
    quantity: "8"
    rate: "$175.00"
    # amount should be auto-calculated as $1,400.00
  - description: "Testing & QA"
    quantity: "12"
    rate: "$100.00"
    # amount should be auto-calculated as $1,200.00

summary:
  subtotal: "$7,350.00"
  tax: "$588.00"
  total: "$7,938.00"

footer:
  notes: "Test Case 1: Auto-calculation functionality - amounts calculated from quantity × rate"
  terms: "Payment due within 30 days."