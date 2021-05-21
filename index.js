const inquirer = require('inquirer');
// const fs = require('fs');
// const generatePage = require('./src/page-template');

// const pageHTML = generatePage(name, github);

// fs.writeFile('./src/index.html', generatePage(pageHTML), err => {
//     if (err) throw err;

//     console.log('site is complete')
// });

const promptManager = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "What is the team Manager's name? (Required)",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Please enter the team Manager's name!");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'empID',
            message: "Enter the Team Manager's employee ID.",
            validate: githubInput => {
                if (githubInput) {
                    return true;
                } else {
                    console.log("Please enter the Team Manager's Employee ID!");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "Enter the Team Manager's email address.",
            validate: githubInput => {
                if (githubInput) {
                    return true;
                } else {
                    console.log("Please enter the Team Manager's email address!");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'officeNum',
            message: "Enter the Team Manager's office number.",
            validate: githubInput => {
                if (githubInput) {
                    return true;
                } else {
                    console.log("Please enter the Team Manager's office number!");
                    return false;
                }
            }
        },
  
    ]);
};

const promptEngineer = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "What is the engineer's name? (Required)",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Please enter the engineer's name!");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'empID',
            message: "Enter the engineer's employee ID.",
            validate: githubInput => {
                if (githubInput) {
                    return true;
                } else {
                    console.log("Please enter the engineer's Employee ID!");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "Enter the engineer's email address.",
            validate: githubInput => {
                if (githubInput) {
                    return true;
                } else {
                    console.log("Please enter the engineer's email address!");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'Github',
            message: "Enter the engineer's Github Username.",
            validate: githubInput => {
                if (githubInput) {
                    return true;
                } else {
                    console.log("Please enter the engineer's Github Username!");
                    return false;
                }
            }
        },
  
    ]);
};

const promptIntern = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "What is the intern's name? (Required)",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Please enter the intern's name!");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'empID',
            message: "Enter the intern's employee ID.",
            validate: githubInput => {
                if (githubInput) {
                    return true;
                } else {
                    console.log("Please enter the intern's Employee ID!");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "Enter the intern's email address.",
            validate: githubInput => {
                if (githubInput) {
                    return true;
                } else {
                    console.log("Please enter the intern's email address!");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'school',
            message: "Enter the intern's school",
            validate: githubInput => {
                if (githubInput) {
                    return true;
                } else {
                    console.log("Please enter the intern's school!");
                    return false;
                }
            }
        },
  
    ]);
};

promptManager()
    .then(answers => console.log(answers))
    .then(promptEngineer)
    .then(engineerAnswers => console.log(engineerAnswers))
    .then(promptIntern)
    .then(internAnswers => console.log(internAnswers));
