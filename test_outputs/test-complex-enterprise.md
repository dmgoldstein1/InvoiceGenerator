---
# Test Case 4: Complex real-world scenario with all possible columns
---

company:
  name: "Enterprise Consulting Group"
  address: "1000 Corporate Tower, Floor 25"
  city: "Chicago, IL 60601"
  email: "invoices@enterprisecg.com"
  phone: "(312) 555-0456"

client:
  name: "Fortune 500 Manufacturing"
  address: "2000 Industrial Boulevard"
  city: "Detroit, MI 48201"
  email: "vendor.payments@fortune500mfg.com"

invoice:
  number: "COMPLEX-004"
  date: "2024-03-20"
  dueDate: "2024-04-20"

# Complex scenario: varying rates, different consultants, mixed time tracking
items:
  - description: "Project Kickoff & Stakeholder Alignment"
    date: "2024-03-01"
    hours: "4"
    hourlyRate: "$300.00"
    # Senior Partner rate - auto-calculated: $1,200.00
  - description: "Requirements Gathering & Analysis"
    date: "2024-03-04"
    hours: "16"
    hourlyRate: "$225.00"
    # Senior Consultant - auto-calculated: $3,600.00
  - description: "Requirements Gathering & Analysis"
    date: "2024-03-05"
    hours: "12"
    hourlyRate: "$225.00"
    # Senior Consultant - auto-calculated: $2,700.00
  - description: "System Architecture Design"
    date: "2024-03-06"
    hours: "20"
    hourlyRate: "$275.00"
    # Lead Architect - auto-calculated: $5,500.00
  - description: "Technical Documentation"
    date: "2024-03-07"
    hours: "8"
    hourlyRate: "$175.00"
    # Technical Writer - auto-calculated: $1,400.00
  - description: "Development - Core Platform"
    date: "2024-03-08"
    hours: "32"
    hourlyRate: "$185.00"
    # Senior Developer - auto-calculated: $5,920.00
  - description: "Development - Core Platform"
    date: "2024-03-11"
    hours: "40"
    hourlyRate: "$185.00"
    # Senior Developer - auto-calculated: $7,400.00
  - description: "Development - Integration Layer"
    date: "2024-03-12"
    hours: "24"
    hourlyRate: "$195.00"
    # Integration Specialist - auto-calculated: $4,680.00
  - description: "Quality Assurance Testing"
    date: "2024-03-13"
    hours: "16"
    hourlyRate: "$155.00"
    # QA Engineer - auto-calculated: $2,480.00
  - description: "Performance Optimization"
    date: "2024-03-14"
    hours: "12"
    hourlyRate: "$205.00"
    # Performance Specialist - auto-calculated: $2,460.00
  - description: "Security Audit & Penetration Testing"
    date: "2024-03-15"
    hours: "8"
    hourlyRate: "$325.00"
    # Security Expert - auto-calculated: $2,600.00
  - description: "User Acceptance Testing Support"
    date: "2024-03-18"
    hours: "16"
    hourlyRate: "$165.00"
    # Business Analyst - auto-calculated: $2,640.00
  - description: "Production Deployment"
    date: "2024-03-19"
    hours: "6"
    hourlyRate: "$245.00"
    # DevOps Specialist - auto-calculated: $1,470.00
  - description: "Post-Deployment Support & Monitoring"
    date: "2024-03-20"
    hours: "4"
    hourlyRate: "$185.00"
    # Support Engineer - auto-calculated: $740.00
  - description: "Project Management & Coordination"
    quantity: "20"
    rate: "$200.00"
    # PM Hours across project - auto-calculated: $4,000.00

summary:
  subtotal: "$54,790.00"
  tax: "$4,383.20"
  total: "$59,173.20"

footer:
  notes: "Test Case 4: Complex enterprise scenario with varying consultant rates and mixed tracking methods. All work completed according to SOW #ENT-2024-001."
  terms: "Payment due within 30 days. Net 30 terms. Work performed by certified consultants meeting enterprise standards."