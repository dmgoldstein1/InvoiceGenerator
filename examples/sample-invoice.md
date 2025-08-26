---
# Invoice Data in YAML format for easy parsing
---

# Company Information
company:
  name: "Your Company Name"
  address: "123 Business Street"
  city: "City, State 12345"
  email: "billing@yourcompany.com"
  phone: "(555) 123-4567"

# Client Information  
client:
  name: "Client Company Inc."
  address: "456 Client Avenue"
  city: "Client City, State 67890"
  email: "accounts@clientcompany.com"

# Invoice Details
invoice:
  number: "INV-001"
  date: "2024-01-15"
  dueDate: "2024-02-15"

# Items/Services Table
items:
  - description: "Web Design Services"
    quantity: "1"
    rate: "$2,500.00"
    amount: "$2,500.00"
  - description: "Frontend Development"
    quantity: "40 hrs"
    rate: "$75.00"
    amount: "$3,000.00"
  - description: "Backend Development"
    quantity: "30 hrs"
    rate: "$85.00"
    amount: "$2,550.00"
  - description: "Testing & QA"
    quantity: "10 hrs"
    rate: "$65.00"
    amount: "$650.00"
  - description: "Project Management"
    quantity: "1"
    rate: "$500.00"
    amount: "$500.00"

# Summary/Totals
summary:
  subtotal: "$9,200.00"
  tax: "$736.00"
  total: "$9,936.00"

# Footer
footer:
  notes: "Thank you for your business! Please remit payment within 30 days."
  terms: "Payment is due within 30 days of invoice date. Late payments may incur a 1.5% monthly service charge."