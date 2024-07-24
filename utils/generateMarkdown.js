let badge = "";
let link = "";
let fullLicense = "";
// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case "none":

      break;
    case "Apache License 2.0":
      badge =
        "![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)";

      return badge;
    case "GNU General Public License v3.0":
      badge =
        "![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)";

      return badge;
    case "MIT License":
      badge =
        "![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)";

      return badge;
    case "BSD 2-Clause 'Simplified' License":
      badge =
        "![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)";

      return badge;
    case "BSD 3-Clause 'New' or 'Revised' License":
      badge =
        "![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)";

      return badge;
    case "Boost Software License 1.0":
      badge =
        "![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)";

      return badge;
    case "Creative Commons Zero v1.0 Universal":
      badge =
        "![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)";

      return badge;
    case "Eclipse Public License 2.0":
      badge =
        "![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)";

      return badge;
    case "GNU Affero General Public License v3.0":
      badge =
        "![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)";

      return badge;
    case "GNU General Public License v2.0":
      badge =
        "![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)";

      return badge;
    case "Mozilla Public License 2.0":
      badge =
        "![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)";

      return badge;
    case "GNU Lesser General Public License v2.1":
      badge =
        "![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)";

      return badge;
    case "The Unlicense":
      badge =
        "![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)";

      return badge;
    default:
      console.log("Error");
      break;
  }
  console.log(badge + link);
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    case "none":

      break;
    case "Apache License 2.0":
      link = "https://opensource.org/licenses/Apache-2.0";

      return link;
    case "GNU General Public License v3.0":
      link = "https://www.gnu.org/licenses/gpl-3.0";

      return link;
    case "MIT License":
      link = "https://opensource.org/licenses/MIT";

      return link;
    case "BSD 2-Clause 'Simplified' License":
      link = "https://opensource.org/licenses/BSD-2-Clause";

      return link;
    case "BSD 3-Clause 'New' or 'Revised' License":
      link = "https://opensource.org/licenses/BSD-3-Clause";

      return link;
    case "Boost Software License 1.0":
      link = "https://www.boost.org/LICENSE_1_0.txt";

      return link;
    case "Creative Commons Zero v1.0 Universal":
      link = "http://creativecommons.org/publicdomain/zero/1.0/";

      return link;
    case "Eclipse Public License 2.0":
      link = "https://opensource.org/licenses/EPL-1.0";

      return link;
    case "GNU Affero General Public License v3.0":
      link = "https://www.gnu.org/licenses/agpl-3.0";

      return link;
    case "GNU General Public License v2.0":
      link =
        "https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html";

      return link;
    case "GNU Lesser General Public License v2.1":
      link = "https://www.gnu.org/licenses/lgpl-3.0";


      return link;
    case "Mozilla Public License 2.0":
      link = "https://opensource.org/licenses/MPL-2.0";

      return link;

    case "The Unlicense":
      link = "http://unlicense.org/";

      return link;

    default:
      //if theres an error it logs that
      console.log("Error");
      break;
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  //puts the badge and link together
  fullLicense = `[${renderLicenseBadge(license)}](${renderLicenseLink(license)})`;
  return fullLicense;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  console.log(data)
  fullLicense = renderLicenseSection(data.license)
  let markdown = `  
  ## ${data.title}
  ## Table of Contents
<ol>
<li>
<a href="#description"> Description </a>
</li>
<li> <a href="#built-with"> Built With </a>
</li>
<li><a href="#installation"> Installation </a>
</li>
<li>
<a href="#usage"> Usage </a>
</li>
<li><a href="#contributions"> Contributions </a>
</li>
<li>
<a href="#testing"> Testing </a>
</li>
<li>
<a href="#license"> License </a>
</li>
<li>
<a href="#contact"> Contact </a>
</li> 
</ol>

## Description \n 
  ${data.description}\n 

### Built With: \n
  [![VS Code](https://img.shields.io/badge/IDE-VSCode-0000ff?style=plastic&logo=VisualStudioCode&logoWidth=10)](https://code.visualstudio.com/docs)
  [![Javascript](https://img.shields.io/badge/Language-JavaScript-ff0000?style=plastic&logo=JavaScript&logoWidth=10)](https://javascript.info/)

## Installation \n 
   ${data.installation}\n
## Usage \n

1. Clone the repo from github (link in the contact section) 
2. Run "node index.js" in the terminal\n

**Additional Usage Info:** 
   ${data.usage}\n
## Testing \n
  ${data.test}\n
## Contributions \n
   Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**. \n
\n
If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".\n
Don't forget to give the project a star! Thanks again!\n

1. Fork the Project
2. Create your Feature Branch (git checkout -b feature/AmazingFeature)
3. Commit your Changes (git commit -m 'Add some AmazingFeature')
4. Push to the Branch (git push origin feature/AmazingFeature)
5. Open a Pull Request

\n \n **Additional Contribution Details:** 
   ${data.contribute}\n
## License \n 
  This project is licensed under ${data.license}. For more information please click on the badge below: 
  \n \n ${fullLicense}\n
## Contact \n 
**For Questions, please reach out to me on Github or by Email** \n
  - Github: 
   [${data.github}](https://github.com/${data.github})\n
  - Email Address: 
  [${data.email}](mailto:${data.email})\n
  ### Project Links: \n
 - [Github Repository](https://github.com/${data.github}/${data.repo})\n
 - [Deployed Site](${data.deploy})`;

  return markdown;
}

module.exports = generateMarkdown;
