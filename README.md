# Cypress Automation Framework - Amphora

This repository contains the **Cypress automation framework** for testing the Amphora website.  
It follows **Page Object Model (POM)** design and includes tests for **UI and API automation**.

---

## 🏗️ Project Structure

cypress-automation/
│
├─ cypress/
│ ├─ e2e/ # Test specs
│ ├─ fixtures/ # Test data
│ ├─ support/ # Custom commands and support files
│ └─ pageObjects/ # Page Object Model classes
│
├─ cypress.config.js # Cypress configuration
├─ package.json # Node project dependencies
├─ .gitignore # Files/folders excluded from GitHub
└─ README.md # Project documentation

yaml
Copy
Edit

---

## ⚙️ Prerequisites

- Node.js >= 18.x  
- npm >= 9.x  
- Cypress >= 12.x  

---

## 💻 Setup Instructions

1. **Clone the repository:**
```bash
git clone https://github.com/YogeshX123/Amphora_CypressAutomation.git
cd Amphora_CypressAutomation
Install dependencies:

bash
Copy
Edit
npm install
Environment Configuration:

Create a cypress.env.json file in the root folder.

Example:

json
Copy
Edit
{
  "username": "your-email@example.com",
  "password": "your-password"
}
⚠️ Do not commit your actual credentials. This file is excluded by .gitignore.

🚀 Running Tests
Interactive Mode (Cypress UI)
bash
Copy
Edit
npx cypress open
Headless Mode (CI/CD)
bash
Copy
Edit
npx cypress run
Run a specific test file:

bash
Copy
Edit
npx cypress run --spec "cypress/e2e/LoginTest.cy.js"
📦 Reports & Artifacts
Screenshots: cypress/screenshots/

Videos: cypress/videos/

Test reports (if configured): cypress/reports/

All output folders are excluded from GitHub.

🌟 Framework Features
Page Object Model (POM) for maintainable tests

Dynamic locators and reusable functions

API testing with Cypress cy.request()

Environment-based configuration

Hooks for login and setup

Ready for CI/CD integration (GitHub Actions, Jenkins, etc.)

🤝 Contribution
Fork the repository and create a branch for new features or bug fixes

Commit your changes with meaningful messages

Submit a pull request for review

📄 License
MIT License © 2025

pgsql
Copy
Edit

---