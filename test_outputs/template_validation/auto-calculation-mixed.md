---
# Mixed billing with auto-calculation
---

company:
  name: "TechPro Consulting"
  address: "789 Innovation Drive"
  city: "Austin, TX 78701"
  phone: "(512) 555-0199"
  email: "billing@techpro.com"
  title: "Technology Consulting"

client:
  name: "Ms. Sarah Johnson"
  company: "StartupCorp Technologies"
  address: "567 Market Street"
  city: "San Francisco, CA 94105"
  email: "accounting@startupcorp.com"
  title: "Ms."

invoice:
  number: "2024-001"
  date: "2024-03-15"

items:
  - date: "2024-03-01"
    description: "Senior Development Consulting"
    hours: "8"
    hourlyRate: "$175.00"
  - date: "2024-03-02"
    description: "Database Architecture Review"
    hours: "4"
    hourlyRate: "$200.00"
  - description: "Custom API Integration"
    quantity: "2"
    rate: "$1,250.00"
  - description: "Security Audit Report"
    amount: "$1,200.00"

summary:
  total: "$5,500.00"

footer:
  notes: "Auto-calculation test case"
  terms: "Net 30 payment terms."