// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const colors = require('colors');
const fs = require('fs')
const generateMarkdown = require('./utils/generateMarkdown')

// TODO: Create an array of questions for user input
const questions = {
    title: 'title',
    description: 'description',
    installation: 'installation',
    usuage: 'usuage',
    license: 'license',
    contributing: 'contributing',
    tests: 'test',
    github: 'github',
    email: 'email',
    repo: 'repo',
    deploy: 'deploy',
};

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    const readme = generateMarkdown(data)
    fs.writeFile(fileName, readme, (err =>
        err ? console.error(err) : console.log("successs")
    ))
}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt([
            {
                type: 'input',
                name: questions.title,
                message: colors.brightMagenta('What is the title?'),
            },
            {
                type: 'input',
                name: questions.description,
                message: colors.brightMagenta('What is the description?'),
            },
            {
                type: 'input',
                name: questions.installation,
                message: colors.brightMagenta('What is the installation instruction?'),
            },
            {
                type: 'input',
                name: questions.usuage,
                message: colors.brightMagenta('What is the usuage?'),
            },
            {
                type: 'list',
                name: questions.license,
                message: 'What are the licenses?',
                choices: [
                    "none",
                    "Apache License 2.0",
                    "GNU General Public License v3.0",
                    "MIT License",
                    "BSD 2-Clause 'Simplified' License",
                    "BSD 3-Clause 'New' or 'Revised' License",
                    "Boost Software License 1.0",
                    "Creative Commons Zero v1.0 Universal",
                    "Eclipse Public License 2.0",
                    "GNU Affero General Public License v3.0",
                    "GNU General Public License v2.0",
                    "GNU Lesser General Public License v2.1",
                    "Mozilla Public License 2.0",
                    "The Unlicense",
                ]
            },
            {
                type: 'input',
                name: questions.contributing,
                message: colors.brightMagenta('What are the contribution guidelines'),
            },
            {
                type: 'input',
                name: questions.tests,
                message: colors.brightMagenta('What are the test instructions'),
            },
            {
                type: 'input',
                name: questions.github,
                message: colors.brightMagenta('What is your Github uersname'),
            },
            {
                type: 'input',
                name: questions.email,
                message: colors.brightMagenta('What is your email'),
            },
            {
                type: 'input',
                name: questions.repo,
                message: colors.brightMagenta('What is the Github repo'),
            },
            {
                type: 'input',
                name: questions.deploy,
                message: colors.brightMagenta('What is the deployed page'),
            },
        ])
        .then((input) => {
            console.log(input)
            writeToFile('README.md', input)
        })
}

// Function call to initialize app
init();
