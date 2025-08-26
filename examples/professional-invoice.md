---
# Professional Invoice with Merged Cell Example
---

company:
  name: "Professional Services Inc."
  address: "789 Corporate Plaza, Suite 200"
  city: "Business City, BC 12345"
  email: "invoicing@professionalservices.com"
  phone: "+1 (555) 987-6543"

client:
  name: "Enterprise Solutions LLC"
  address: "1000 Innovation Drive"
  city: "Tech Valley, TV 67890"
  email: "accounts.payable@enterprisesolutions.com"

invoice:
  number: "PSI-2024-001"
  date: "2024-01-25"
  dueDate: "2024-02-25"

# Items with grouped services (demonstrates merged cell capability)
items:
  - description: "Website Development Project"
    quantity: "1"
    rate: "$5,000.00"
    amount: "$5,000.00"
  - description: "Website Development Project"
    quantity: "40 hrs"
    rate: "$125.00"
    amount: "$5,000.00"
  - description: "Website Development Project"
    quantity: "20 hrs"
    rate: "$150.00"
    amount: "$3,000.00"
  - description: "Content Management System"
    quantity: "1 system"
    rate: "$2,500.00"
    amount: "$2,500.00"
  - description: "Content Management System"
    quantity: "10 hrs"
    rate: "$125.00"
    amount: "$1,250.00"
  - description: "SEO Optimization"
    quantity: "15 hrs"
    rate: "$100.00"
    amount: "$1,500.00"
  - description: "Training & Documentation"
    quantity: "8 hrs"
    rate: "$85.00"
    amount: "$680.00"
  - description: "Training & Documentation"
    quantity: "1 manual"
    rate: "$300.00"
    amount: "$300.00"

summary:
  subtotal: "$19,230.00"
  tax: "$1,538.40"
  total: "$20,768.40"

footer:
  notes: "This invoice covers the complete website development project as outlined in our service agreement dated January 1, 2024. All deliverables have been completed and tested according to specifications."
  terms: "Payment terms are Net 30 days from invoice date. A service charge of 1.5% per month will be applied to past due balances. Please remit payment to the address above or via electronic transfer to account details provided separately."