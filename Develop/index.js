// TODO: Include packages needed for this application
const markdowm = require('./utils/generateMarkdown')
const inquirer = require('inquirer');
const fs = require('fs');
// TODO: Create an array of questions for user input
inquirer
    .prompt([
        {
            type: 'input',
            name: 'title',
            message: 'Add the Title, please',
        },
        {
            type: 'input',
            name: 'description',
            message: 'Add the Description, please',
        },
        {
            type: 'input',
            name: 'content',
            message: 'Add the Content, please',
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Add the Installation, please',
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Add the Usage, please',
        },
        {
            type: 'checkbox',
            message: 'Choose the License, please',
            name: 'stack',
            choices: ['MIT', 'Apache 2.0', 'Boost Software', 'no License']
        },
        {
            type: 'input',
            name: 'contributing',
            message: 'Add the Contributing, please',
        },
        {
            type: 'input',
            name: 'tests',
            message: 'Add the Tests, please',
        },
        {
            type: 'input',
            name: 'questions',
            message: 'Add the Questions, please',
        }
    ])
    .then((response) => {
        const filename = `${response.name.toLowerCase().split(' ').join('')}.md`;

        fs.writeFile(filename, 
    `# Welcome to ${response.title}🪄

    ## Description
    ${response.description}
    ## Content.
    ${response.content}
    ## Installation
    ${response.installation}
    ## Usage
    ${response.usage}
    ## License
    ${response.license}
    ## Contributing
    ${response.contributing}
    ## Tests
    ${response.tests}
    ## Questions
    ${response.questions}
    ## Badges`, (err) =>
            err ? console.log(err) : console.log('Success!')
        );
    });
// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
