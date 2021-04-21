// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
    "What is the title of your project?", 
    "Write a brief description about your project.", 
    "What does the installation process entail?", 
    "What is the usage?",
    "What is the license on this project?",
    "Who were your collaborators on this project?",
    "Provide test instructions if any.",
    "What is your GitHub username?",
    "What is your email address?"
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}
/*fs.writeFile('README.md', 'content', function (err) {
    if (err) throw err;
    console.log('Saved!');
});*/

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
