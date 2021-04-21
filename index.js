// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the title of your project?",
    },
    {
        type: "input",
        name: "description",
        message: "Write a brief description about your project.",
    },
    {
        type: "input",
        name: "installation",
        message: "What does the installation process entail?",
    },
    {
        type: "input",
        name: "usage",
        message: "What is the usage?",
    },
    {
        type: "list",
        name: "license",
        message: "What is the license on your project?",
        choices: ['MIT', 'Apache 2.0', 'GPL 3', 'BSD 3', 'None'],
    },
    {
        type: "input",
        name: "collaborators",
        message: "Who were your collaborators on this project?",
    },
    {
        type: "input",
        name: "test",
        message: "Provide test instructions if any.",
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
