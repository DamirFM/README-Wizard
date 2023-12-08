// TODO: Include packages needed for this application
const markdown = require('./utils/generateMarkdown');
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
            type: 'list',
            message: 'Choose the License, please',
            name: 'license',
            choices: ['MIT', 'Apache 2.0', 'Boost Software', 'Not selected']

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
        },
        {
            type: 'input',
            name: 'GitHub',
            message: 'Please enter your GitHub username',
        },
        {
            type: 'input',
            name: 'Email',
            message: 'Please enter your Email address',
        }
    ])
    .then((response) => {
        let answers = markdown(response);
        fs.writeFile('demo/filename.md',answers , (err) =>
            err ? console.log(err) : console.log('Success!')
        );
    });
