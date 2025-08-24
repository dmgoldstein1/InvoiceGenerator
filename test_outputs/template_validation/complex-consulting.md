---
# Complex enterprise consulting scenario
---

company:
  name: "Enterprise Solutions LLC"
  address: "1000 Corporate Blvd, Suite 2000"
  city: "New York, NY 10001"
  phone: "(212) 555-0100"
  email: "billing@enterprisesolutions.com"
  title: "Enterprise Technology Consulting"

client:
  name: "Ms. Jennifer Davis"
  company: "Global Corp International"
  address: "500 Wall Street"
  city: "New York, NY 10005"
  phone: "(212) 555-0200"
  email: "jdavis@globalcorp.com"
  title: "Ms."

invoice:
  number: "ENT-2024-Q1-007"
  date: "2024-03-22"

cc:
  - name: "David Chen"
    email: "dchen@globalcorp.com"

items:
  - date: "2024-03-01"
    description: "Executive Strategy Consulting"
    hours: "6"
    hourlyRate: "$300.00"
  - date: "2024-03-02"
    description: "Technical Architecture Review"
    hours: "8"
    hourlyRate: "$250.00"
  - date: "2024-03-03"
    description: "Team Training and Workshops"
    hours: "8"
    hourlyRate: "$200.00"
  - date: "2024-03-04"
    description: "Implementation Planning"
    hours: "4"
    hourlyRate: "$275.00"
  - description: "Comprehensive Technical Report"
    amount: "$3,500.00"
  - description: "Travel and accommodation expenses"
    amount: "$1,200.00"

summary:
  subtotal: "$13,100.00"
  tax: "$1,048.00"
  total: "$14,148.00"

footer:
  notes: "Complex enterprise consulting engagement with mixed billing rates"
  terms: "Net 15 payment terms for enterprise clients."