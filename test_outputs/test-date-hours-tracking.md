---
# Test Case 2: Date-based hourly tracking with hourly rates
---

company:
  name: "DevCraft Solutions"
  address: "456 Code Street, Suite 200"
  city: "San Francisco, CA 94105"
  email: "accounts@devcraft.com"
  phone: "(415) 555-0234"

client:
  name: "Global Finance Corp"
  address: "890 Wall Street"
  city: "New York, NY 10005"
  email: "ap@globalfinance.com"

invoice:
  number: "HOURLY-002"
  date: "2024-03-20"
  dueDate: "2024-04-20"

# Test date + hours + hourlyRate columns with auto-calculation
items:
  - description: "Project Planning & Analysis"
    date: "2024-03-01"
    hours: "4"
    hourlyRate: "$185.00"
    # amount should be auto-calculated as $740.00
  - description: "Frontend React Development"
    date: "2024-03-02"
    hours: "8"
    hourlyRate: "$165.00"
    # amount should be auto-calculated as $1,320.00
  - description: "Frontend React Development"
    date: "2024-03-03"
    hours: "6"
    hourlyRate: "$165.00"
    # amount should be auto-calculated as $990.00
  - description: "Backend Node.js API"
    date: "2024-03-04"
    hours: "8"
    hourlyRate: "$175.00"
    # amount should be auto-calculated as $1,400.00
  - description: "Backend Node.js API"
    date: "2024-03-05"
    hours: "7"
    hourlyRate: "$175.00"
    # amount should be auto-calculated as $1,225.00
  - description: "Database Integration"
    date: "2024-03-06"
    hours: "5"
    hourlyRate: "$195.00"
    # amount should be auto-calculated as $975.00
  - description: "Testing & Debugging"
    date: "2024-03-07"
    hours: "6"
    hourlyRate: "$155.00"
    # amount should be auto-calculated as $930.00
  - description: "Deployment & Documentation"
    date: "2024-03-08"
    hours: "4"
    hourlyRate: "$145.00"
    # amount should be auto-calculated as $580.00

summary:
  subtotal: "$8,160.00"
  tax: "$652.80"
  total: "$8,812.80"

footer:
  notes: "Test Case 2: Date-based tracking with hours and hourly rates - showcasing daily work breakdown"
  terms: "Payment due within 30 days. Work performed as specified in SOW dated February 1, 2024."