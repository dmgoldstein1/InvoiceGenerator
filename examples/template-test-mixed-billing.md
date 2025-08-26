---
# Template Test Case: Mixed Billing with Auto-calculation
# Testing hours × hourlyRate auto-calculation
---

company:
  name: "TechPro Solutions"
  address: "1234 Innovation Blvd, Suite 500"
  city: "San Francisco, CA 94107"
  phone: "(415) 555-0123"
  email: "billing@techpro.com"
  title: "Technology Consulting"

client:
  name: "Ms. Sarah Johnson"
  company: "StartupCorp Technologies"
  address: "567 Market Street"
  city: "San Francisco, CA 94105"
  phone: "(415) 555-0789"
  email: "accounting@startupcorp.com"
  title: "Ms."

invoice:
  number: "2024-001"
  date: "2024-03-15"
  dueDate: "2024-04-15"

cc:
  - name: "Michael Chen"
    email: "mchen@startupcorp.com"

# Mixed billing: hourly consulting + fixed-price deliverables
items:
  - date: "2024-03-01"
    description: "Senior Full-Stack Development Consulting"
    hours: "8"
    hourlyRate: "$175.00"
    # amount will be auto-calculated as $1,400.00
  - date: "2024-03-02"
    description: "Senior Full-Stack Development Consulting"
    hours: "6"
    hourlyRate: "$175.00"
    # amount will be auto-calculated as $1,050.00
  - date: "2024-03-03"
    description: "Database Architecture Review"
    hours: "4"
    hourlyRate: "$200.00"
    # amount will be auto-calculated as $800.00
  - date: "2024-03-04"
    description: "Code Review and Quality Assurance"
    hours: "5"
    hourlyRate: "$150.00"
    # amount will be auto-calculated as $750.00
  - date: "2024-03-05"
    description: "Technical Documentation"
    hours: "3"
    hourlyRate: "$125.00"
    # amount will be auto-calculated as $375.00
  - description: "Custom API Integration Deliverable"
    amount: "$2,500.00"
  - description: "Security Audit Report"
    amount: "$1,200.00"

summary:
  subtotal: "$8,075.00"
  tax: "$646.00"
  total: "$8,721.00"

footer:
  notes: "Template test case demonstrating auto-calculation of hours × hourlyRate"
  terms: "Payment due within 30 days. ACH transfer preferred."