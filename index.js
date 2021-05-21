const fs = require('fs');
const generatePage = require('./src/page-template');

const teamDataArgs = process.argv.slice(2, process.argv.length);

console.log(teamDataArgs);

const[name, github] = teamDataArgs;

const pageHTML = generatePage(name, github);


fs.writeFile('./index.html', generatePage(pageHTML), err => {
    if (err) throw err;

    console.log('site is complete')
});


// const promptManager = () => {
//     return inquirer.prompt([
//         {
//             type: 'input',
//             name: 'name',
//             message: "What is the team Manager's name? (Required)",
//             validate: nameInput => {
//                 if (nameInput) {
//                     return true;
//                 } else {
//                     console.log("Please enter the team Manager's name!");
//                     return false;
//                 }
//             }
//         },
//         {
//             type: 'input',
//             name: 'empID',
//             message: "Enter the Team Manager's employee ID.",
//             validate: githubInput => {
//                 if (githubInput) {
//                     return true;
//                 } else {
//                     console.log("Please enter the Team Manager's Employee ID!");
//                     return false;
//                 }
//             }
//         },
//         {
//             type: 'input',
//             name: 'email',
//             message: "Enter the Team Manager's email address.",
//             validate: githubInput => {
//                 if (githubInput) {
//                     return true;
//                 } else {
//                     console.log("Please enter the Team Manager's email address!");
//                     return false;
//                 }
//             }
//         },
//         {
//             type: 'input',
//             name: 'officeNum',
//             message: "Enter the Team Manager's office number.",
//             validate: githubInput => {
//                 if (githubInput) {
//                     return true;
//                 } else {
//                     console.log("Please enter the Team Manager's office number!");
//                     return false;
//                 }
//             }
//         },
  
//     ]);
// };


// promptManager();
// const printTeamData = teamDataArr => {
//     teamDataArr.forEach((teamItem) => {
//         console.log(teamItem)
//     });
  
// };

// printTeamData(teamDataArgs);