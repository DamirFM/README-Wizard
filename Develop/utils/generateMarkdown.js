// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'MIT') {
    return '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg) ';
  } 
  else if  (license === 'Apache 2.0') {
    return '![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)';
  }
  else if (license === 'Boost Software') {
    return '![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)';
  } 
  else if (license === 'Not selected') {
    return '';
    }
  };
// renderLicenseBadge(license);

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'MIT') {
    return '(https://opensource.org/licenses/MIT)';
  } 
  if (license === 'Apache 2.0') {
    return '(https://opensource.org/licenses/Apache-2.0)';
  }
  if (license === 'Boost Software') {
    return '(https://www.boost.org/LICENSE_1_0.txt)';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === 'MIT') {
    return 'This application is covered under MIT License';
  } 
  if (license === 'Apache 2.0') {
    return 'This application is covered under Apache 2.0 License';
  }
  if (license === 'Boost Software') {
    return 'This application is covered under Boost Software License';
  }
}


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
let renderLicenseBadgeData = renderLicenseBadge(data.license);
let renderLicenseLinkData = renderLicenseLink(data.license);
let renderLicenseSectionData = renderLicenseSection(data.license);

  return `
# Welcome to ${data.title}
## Description  
    ${data.description}

## Content ${renderLicenseBadgeData}
- [Installation](#Installation)
- [Usage](#Usage)
- [Installation](#Installation)
- [License](#License)
- [Contributing](#Contributing)
- [Tests](#Tests)
- [Questions](#Questions)
${data.content}
## Installation
    ${data.installation}
## Usage
    ${data.usage}
## License   
${renderLicenseSectionData}
${renderLicenseLinkData}
## Contributing
    ${data.contributing}
## Tests
    ${data.tests}
## Questions
    ${data.questions}
- GitHub:[https://github.com/${data.GitHub}]
- Email:[Do not hesitate to reach me with additional questions on my Email ${data.Email}]
    `;
}

module.exports = generateMarkdown;

