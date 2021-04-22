// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is your project's name?",
    },
    {
        type: "input",
        name: "description",
        message: "Write a brief description about your project.",
    },
    {
        type: "input",
        name: "installation",
        message: "What command should be run to install dependencies?",
        default: "npm i",
    },
    {
        type: "input",
        name: "usage",
        message: "What does the user need to know about using the repo?",
    },
    {
        type: "list",
        name: "license",
        message: "What is the license on your project?",
        choices: ['MIT', 'Apache 2.0', 'GPL 3', 'BSD 3', 'None'],
    },
    {
        type: "input",
        name: "contribute",
        message: "What does the user need to know about contributing to the repo?",
    },
    {
        type: "input",
        name: "test",
        message: "What command should be run to run tests?",
        default: "npm test",
    },
    {
        type: "input",
        name: "username",
        message: "What is your GitHub username?",
    },
    {
        type: "input",
        name: "email",
        message: "What is your email address?",
    },
];

// TODO: Create a function to write README file
inquirer.prompt(questions).then((data) => {
    const readmeContent = generateMarkdown(data);
    fs.writeFile("README.md", readmeContent, (err) =>
      err ? console.log(err) : console.log("Successfully created README!")
    );
  });


// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
