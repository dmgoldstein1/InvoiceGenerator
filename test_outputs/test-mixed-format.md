---
# Test Case 3: Mixed format - some items with dates/hours, some with quantity/rate
---

company:
  name: "Hybrid Solutions LLC"
  address: "321 Mixed Mode Avenue"
  city: "Seattle, WA 98101"
  email: "billing@hybridsolutions.com"
  phone: "(206) 555-0345"

client:
  name: "Diverse Industries Inc."
  address: "555 Multi-Business Plaza"
  city: "Portland, OR 97201"
  email: "accounting@diverseindustries.com"

invoice:
  number: "MIXED-003"
  date: "2024-03-20"
  dueDate: "2024-04-20"

# Test mixed format: some with date/hours/hourlyRate, some with quantity/rate
items:
  - description: "Initial Consultation"
    date: "2024-03-01"
    hours: "2"
    hourlyRate: "$250.00"
    # amount auto-calculated: $500.00
  - description: "Software License (Annual)"
    quantity: "1"
    rate: "$1,200.00"
    # amount auto-calculated: $1,200.00
  - description: "Development Work - Week 1"
    date: "2024-03-04"
    hours: "40"
    hourlyRate: "$150.00"
    # amount auto-calculated: $6,000.00
  - description: "Hardware Setup"
    quantity: "3"
    rate: "$450.00"
    # amount auto-calculated: $1,350.00
  - description: "Development Work - Week 2"
    date: "2024-03-11"
    hours: "35"
    hourlyRate: "$150.00"
    # amount auto-calculated: $5,250.00
  - description: "Training Materials"
    quantity: "5"
    rate: "$75.00"
    # amount auto-calculated: $375.00
  - description: "Final Testing & Deployment"
    date: "2024-03-18"
    hours: "8"
    hourlyRate: "$175.00"
    # amount auto-calculated: $1,400.00

summary:
  subtotal: "$16,075.00"
  tax: "$1,286.00"
  total: "$17,361.00"

footer:
  notes: "Test Case 3: Mixed format demonstrating flexibility - combines hourly tracking with fixed-price items"
  terms: "Payment due within 30 days. Project completed according to specifications."