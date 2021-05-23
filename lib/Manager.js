module.exports = function(val1, val2) {
    if (val1 === val2) {
      return true;
    } else {
      return false;
    }
  };


// const inquirer = require('inquirer');
// const Employee = require('./Employee');


// class Manager {
//     constructor() {}

//     initializeManager() {
//         inquirer
//             .prompt([
//                 {
//                     type: 'input',
//                     name: 'officeNum',
//                     message: "Enter the Team Manager's office number.",
//                     validate: githubInput => {
//                         if (githubInput) {
//                             return true;
//                         } else {
//                             console.log("Please enter the Team Manager's office number!");
//                             return false;
//                         }
//                     }
//                 },
//             ]).then(managerData => {
//                 new Employee(managerData).newEmployee();
//             }).catch(err => {
//                 console.log(err);
//             })
//     }
// }

// module.exports = Manager;
