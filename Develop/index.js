const inquirer = require('inquirer');
const fs = require('fs');

const generateReadMe = ({ title, description, installation, usage, license, contributing, tests, github, email }) => 
    `
# ${title}

## Description

${description}

## Table of contents

[Installation](#installation)
[Usage](#usage)
[License](#license)
[Contributing](#contributing)
[Tests](#tests)
[Questions](#questions)

## Installation

${installation}

## Usage

${usage}

## License

${license}

## Contributing

${contributing}

## Tests

${tests}

## Questions

https://github.com/${github}?tab=repositories
${email}`;


inquirer
    .prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your application?',
        },
        {
            type: 'input',
            name: 'description',
            message: 'Add a description of your application here:',
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Enter instructions on how to install your application:',
        },
        {
            type: 'input',
            name: 'usage',
            message: 'How is your application intented to be used?',
        },
        {
            type: 'list',
            message: 'what license is your application covered under?',
            name: 'license',
            choices: ['MIT', 'apache 2.0', 'GNU general public', 'BSD 2','BSD 3', 'Boost software', 'Mozilla public', 'The Unilicense' ],
        },
        {
            type: 'input',
            name: 'contributing',
            message: 'Add contributing guidelines here:',
        },
        {
            type: 'input',
            name: 'tests',
            message: 'Add instructions for testing here:',
        },
        {
            type: 'input',
            name: 'github',
            message: 'Enter your github username:',
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter your email address',
        },

     ])
     .then((answers) => {
        const readMeContent = generateReadMe(answers);
        fs.writeFile('README.md', readMeContent, (err) =>
        err ? console.log(err) : console.log('Successfully created README.md')
        )
     });