
# Contribution Guide

Thank you for considering contributing to this project! Your help is greatly appreciated. Please take a moment to review this guide to help you get started.

## Table of Contents

- [Contribution Guide](#contribution-guide)
  - [Table of Contents](#table-of-contents)
  - [Code of Conduct](#code-of-conduct)
  - [How to Contribute](#how-to-contribute)
    - [Reporting Bugs](#reporting-bugs)
    - [Suggesting Features](#suggesting-features)
    - [Contributing Code](#contributing-code)
  - [Setting Up the Development Environment](#setting-up-the-development-environment)
  - [Pull Request Guidelines](#pull-request-guidelines)
  - [Style Guide](#style-guide)

## Code of Conduct

This project adheres to a [Code of Conduct](https://www.contributor-covenant.org/version/2/1/code_of_conduct/). By participating, you are expected to uphold this code. Please report unacceptable behavior to [fadamakis@gmail.com](mailto:fadamakis@gmail.com).

## How to Contribute

### Reporting Bugs

If you find a bug, please create an issue with the following details:

- A clear and descriptive title.
- Steps to reproduce the problem.
- Expected vs. actual results.
- Screenshots or logs, if applicable.

### Suggesting Features

We welcome feature suggestions! To propose a new feature:

- Check if the feature has already been suggested in the [issues](https://github.com/fadamakis/vue-twitter-clone-frontend/issues).
- If not, create a new issue with a clear description of the feature and any relevant context or examples.

### Contributing Code

1. Fork the repository and clone your fork locally.
2. Create a new branch for your feature or bug fix:
   ```bash
   git checkout -b your-branch-name
   ```
3. Make your changes with clear and descriptive commit messages.
4. Push your branch to your forked repository:
   ```bash
   git push origin your-branch-name
   ```
5. Open a pull request with a detailed description of your changes.

## Setting Up the Development Environment

To set up the project locally:

1. Fork and clone the repository.
2. Install dependencies using PNPM:
   ```bash
   pnpm install
   ```
3. Set up the environment variables:
   - Copy `.env.example` to `.env` and adjust the values as needed.
4. Start the development server:
   ```bash
   pnpm dev
   ```

## Pull Request Guidelines

- Ensure your code follows the project's [Style Guide](#style-guide).
- Keep pull requests small and focused on one issue or feature.
- Include relevant tests for your changes.
- Reference any related issues in your pull request description.
- Ensure all checks pass before requesting a review.

## Style Guide

- Follow the [JavaScript Standard Style](https://standardjs.com/) for code formatting.
- Use meaningful variable and function names.
- Keep functions small and focused; avoid large, monolithic functions.
- Write clear and concise comments where necessary, especially for complex logic.

---

We look forward to your contributions! If you have any questions, feel free to reach out via [fadamakis@gmail.com](mailto:fadamakis@gmail.com).