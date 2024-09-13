# Social Media Client

## Brief

### Goal

Enhance the quality of an existing application by implementing development workflows and a testing strategy, focusing on unit testing, end-to-end (E2E) testing, and setting up necessary dependencies.

In this assignment, you will improve an existing application by:

- Setting up ESLint, Prettier, and commit hooks.
- Configuring GitHub Actions for build and deploy.
- Implementing Jest for unit tests and Cypress for E2E tests.

[![Deploy static content to Pages](https://github.com/Voidwaker/social-media-client/actions/workflows/pages.yml/badge.svg?branch=workflow)](https://github.com/Voidwaker/social-media-client/actions/workflows/pages.yml)
[![Automated E2E Testing](https://github.com/Voidwaker/social-media-client/actions/workflows/e2e-tests.yml/badge.svg)](https://github.com/Voidwaker/social-media-client/actions/workflows/e2e-tests.yml)
[![Automated Unit Testing](https://github.com/Voidwaker/social-media-client/actions/workflows/unit-tests.yml/badge.svg)](https://github.com/Voidwaker/social-media-client/actions/workflows/unit-tests.yml)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/prettier/prettier)
[![Tested with Jest](https://img.shields.io/badge/tested_with-jest-99424f.svg)](https://jestjs.io/)
[![ESLint](https://img.shields.io/badge/linted_with-eslint-4b32c3.svg)](https://eslint.org/)
[![Cypress](https://img.shields.io/badge/tested_with-Cypress-04C38E.svg)](https://www.cypress.io/)

## Getting Started

### Installing

**Clone the repo:**

```
git clone https://github.com/Voidwaker/social-media-client.git
```
## Development Dependencies

* **@babel/core:**
A JavaScript compiler that allows you to use the latest language features.

**Installation:**
```bash
npm install @babel/core --save-dev
```
* **@babel/preset-env:**
Automatically determines the necessary Babel plugins based on your target environments.

**Installation:**
```
npm install @babel/preset-env --save-dev
```
* **@babel/preset-react:**
Automatically determines the necessary Babel plugins based on your target environments.

**Installation:**
```
npm install @babel/preset-react --save-dev
```
* **@eslint/js:**
The official ESLint package for linting JavaScript code.

**Installation:**
```
npm install @eslint/js --save-dev
```
* **@testing-library/jest-dom:**
Custom matchers for testing DOM nodes with Jest.

**Installation:**
```
npm install @testing-library/jest-dom --save-dev
```
* **@testing-library/react:**
Tools for testing React components.

**Installation:**

```
npm install @testing-library/react --save-dev
```
* **babel-jest:**
A tool that allows you to use Babel with Jest.

**Installation:**
```
npm install babel-jest --save-dev
```
* **cypress:**
End-to-end testing framework to ensure the application behaves as expected.

**Installation:**
```
npm install cypress --save-dev
```
* **eslint:**
A linter for JavaScript code to identify and fix issues.

**Installation:**
```
npm install eslint --save-dev
```
* **eslint-config-prettier:**
Disables rules in ESLint that might conflict with Prettier.

**Installation:**
```
npm install eslint-config-prettier --save-dev
```
* **eslint-plugin-prettier:**
Runs Prettier as an ESLint rule, reporting formatting errors as ESLint errors.

**Installation:**
```
npm install eslint-plugin-prettier --save-dev
```
* **globals:**
A package that provides a list of global variables for ESLint.

**Installation:**
```
npm install globals --save-dev
```
* **husky:**
Used to run Git hooks like running linters before committing code to enforce code quality.

**Installation:**
```
npm install husky --save-dev
```
* **jest:**
A testing framework for writing and running unit tests.

**Installation:**
```
npm install jest --save-dev
```
* **jest-environment-jsdom:**
Allows you to run Jest tests in a JSDOM environment, useful for testing DOM-dependent features.

**Installation:**
```
npm install jest-environment-jsdom --save-dev
```
* **lint-staged:**
Runs linters on staged files before commit to maintain code quality.

**Installation:**
```
npm install lint-staged --save-dev
```
* **live-server:**
A development server that automatically reloads the page in real-time as you edit your code.

**Installation:**
```
npm install live-server --save-dev
```
* **prettier:**
A code formatter that enforces consistent styling across the codebase.

**Installation:**
```
npm install prettier --save-dev
```
* **sass:**
A preprocessor for writing more maintainable and scalable CSS files.

**Installation:**
```
npm install sass --save-dev
```
**Notes:**
To install all dependencies at once, simply run:
```
npm install
```
## Configuration Information

### Available Scripts

In the project directory, you can run the following commands:

- **`npm start`**: Starts the development server with live reloading. This runs SASS in watch mode and serves the files using `live-server`.

- **`npm run build`**: Compiles the SCSS files to CSS and outputs them to the `dist/css` directory.

- **`npm run format`**: Formats all files in the project using Prettier to ensure consistent code style.

- **`npm run lint`**: Lints your JavaScript files using ESLint, helping to catch code errors and enforce coding standards.

- **`npm run test`**: Runs the Jest unit tests to ensure the functionality of your JavaScript code.

- **`npm run cypress:open`**: Opens the Cypress end-to-end test runner for interactive testing (if configured separately in your scripts).

- **`npm run cypress:run`**: Runs the Cypress end-to-end tests in headless mode, typically used in CI pipelines (if configured separately in your scripts).

- **`npm run prepare`**: Installs Husky Git hooks. This is automatically run by Git hooks to enforce code quality on commits.
- 
  #contributing
  I'm open to feedback, but I don't want any contributions on this project (due to it being an assignment). Thank you for understanding!

  # Contact:
  email: Sigurdvaaler@hotmail.com
  
  discord: Voidwaker1
