<p align="center">
  <a href="https://www.docker.com/">
    <img width="140" alt="Docker Logo" src="https://seeklogo.com/images/D/docker-logo-CF97D0124B-seeklogo.com.png" />
    </a>
</p>



# Getting Started with Docker Application

This project aims to give a basic registration application as a QA playground.
After (build) and run you should see the application responding to `localhost:3000` address in your browser

## Run

### Docker build

In order to run the application you need to have Docker installed and build the app from the root directory with
```bash
docker build -t qa-sandbox -f docker/Dockerfile .
```

To run the application you can then use the command 
```bash
docker run -it -p 3000:3000 qa-sandbox
```

### Docker-compose build

In order to run the application you need to have Docker and docker-compose installed and build the app from the root directory with
```bash
docker-compose up --build
```

### local

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

<p align="center">
  <a href="https://playwright.dev/">
    <img width="140" alt="Playwright Logo" src="https://seeklogo.com/images/P/playwright-logo-22FA8B9E63-seeklogo.com.png" />
    </a>
</p>



<p align="center">
  This is playwright automation test suite designed for the assesment process
</p>

> 🚩 **Note**

### Installation

Clone the repository and run the command:

```shell
npm install
```

> 🚩 **Note**
>
> The only prerequisite is to have Node.js, Plawyright and Playwright Add On for VS Code installed on your machine

### Run test via console

```shell
npx playwright test
```

### Or run them using built in runner via VS Code

> 🚩 **Note**
> This project is for sheer purpose of presenting Playwright possibilities.


<p align="center">
  <a href="https://www.cypress.io/">
    <img width="140" alt="Cypress Logo" src="https://static-00.iconduck.com/assets.00/cypress-icon-256x255-r6l3lr29.png" />
    </a>
</p>

## 🛠 Installation and Setup Instructions for Cypress

1. navigate to directory: `/cypress-tests`

2. Installation: `npm install`

2. In the cypress project directory, you can run: `npx cypress open` or `npx cypress run` to run the tests

Runs the test in the cypress browser.\
Open E2E test and start the process.
There are 4 test cases with multiple assertions.
Test cases were designed using fixtures and cypress Command.add.

## License

[![license](https://img.shields.io/badge/license-MIT-green.svg)](https://github.com/cypress-io/cypress/blob/master/LICENSE)

This project is licensed under the terms of the [MIT license](/LICENSE).



