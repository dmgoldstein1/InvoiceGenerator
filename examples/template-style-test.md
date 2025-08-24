---
# Template-Style Test Invoice - Mimicking PDF Example
---

# Company Information
company:
  name: "Creative Solutions Agency"
  address: "456 Design Boulevard, Suite 300"
  city: "Los Angeles, CA 90210"
  email: "invoices@creativesolutions.com"
  phone: "(323) 555-0199"

# Client Information
client:
  name: "Sterling Analytics Corporation"
  address: "2500 Executive Plaza"
  city: "Chicago, IL 60601"
  email: "billing@sterlinganalytics.com"

# Invoice Details
invoice:
  number: "CSA-2024-0043"
  date: "2024-03-20"
  dueDate: "2024-04-19"

# Items/Services Table
items:
  - description: "Brand Strategy & Research"
    quantity: "1 project"
    rate: "$4,500.00"
    amount: "$4,500.00"
  - description: "Logo Design & Brand Identity"
    quantity: "1 package"
    rate: "$3,200.00"
    amount: "$3,200.00"
  - description: "Website Design (5 pages)"
    quantity: "5 pages"
    rate: "$750.00"
    amount: "$3,750.00"
  - description: "Website Development & CMS"
    quantity: "1 site"
    rate: "$5,500.00"
    amount: "$5,500.00"
  - description: "Content Creation & Copywriting"
    quantity: "8 hrs"
    rate: "$125.00"
    amount: "$1,000.00"
  - description: "SEO Setup & Optimization"
    quantity: "1 package"
    rate: "$1,800.00"
    amount: "$1,800.00"
  - description: "Project Management"
    quantity: "12 hrs"
    rate: "$95.00"
    amount: "$1,140.00"
  - description: "Training & Documentation"
    quantity: "4 hrs"
    rate: "$110.00"
    amount: "$440.00"

# Summary/Totals
summary:
  subtotal: "$21,330.00"
  tax: "$1,706.40"
  total: "$23,036.40"

# Footer
footer:
  notes: "Thank you for choosing Creative Solutions Agency for your brand development project. This invoice covers all deliverables as outlined in our project agreement dated March 1, 2024."
  terms: "Payment terms are Net 30 days. A 1.5% monthly service charge will be applied to overdue accounts. Please remit payment to the address listed above or contact us for electronic payment options."