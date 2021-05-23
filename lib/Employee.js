module.exports = function(val1, val2) {
    if (val1 === val2) {
      return true;
    } else {
      return false;
    }
  };











// const inquirer = require('inquirer');
// const fs = require('fs');
// const generatePage = require('../src/page-template');
// const Engineer = require('./Engineer');


// class Employee {
//     constructor(managerData) {
//         this.managerData = managerData;
//         this.name =[];
//         this.initializeEmployeeData;
//         this.newEmployeeData;
//     }

//     initializeEmployee(action) {
//         inquirer
//             .prompt([
//             {
//                 type: 'input',
//                 name: 'nameM',
//                 message: "What is the employee's name? (Required)",
//                 validate: nameInput => {
//                     if (nameInput) {
//                         return true;
//                     } else {
//                         console.log("Please enter the team employee's name!");
//                         return false;
//                     }
//                 }
//             },
//             {
//                 type: 'input',
//                 name: 'empIDM',
//                 message: "Enter the employees's ID.",
//                 validate: githubInput => {
//                     if (githubInput) {
//                         return true;
//                     } else {
//                         console.log("Please enter the employees's Employee ID!");
//                         return false;
//                     }
//                 }
//             },
//             {
//                 type: 'input',
//                 name: 'emailM',
//                 message: "Enter the employee's email address.",
//                 validate: githubInput => {
//                     if (githubInput) {
//                         return true;
//                     } else {
//                         console.log("Please enter the employee's email address!");
//                         return false;
//                     }
//                 }
//             },
           
      
//         ]).then(employeeData => {
//             console.log(employeeData)
//             let allData = {...employeeData, ...this.managerData};
//             if (action === 'Engineer') {
//                 return new Engineer(action, allData).initializeEngineer()
//             } else if (action === 'Intern') {
//                 return this.initializeIntern();
//             } else {
//                 return;
//             }
//             this.newEmployee(allData);
//         }).catch(err => {
//             console.log(err)
//         })
//         ;
//     };

//     newEmployee() {
//         inquirer
//             .prompt({
//                 type: 'list',
//                 message: 'Would you like to add an intern or engineer?',
//                 name: 'action',
//                 choices: ['Intern', 'Engineer', 'End']
//             }).then(({ action }) => {
//                 console.log(action)
//                 this.initializeEmployee(action);
//             }).catch(err => {
//                 console.log(err)
//             })
//     }

//     initializeIntern(internData) {
//         return inquirer
//             .prompt([
//                 {
//                     type: 'input',
//                     name: 'nameI',
//                     message: "What is the intern's name? (Required)",
//                     validate: nameInput => {
//                         if (nameInput) {
//                             return true;
//                         } else {
//                             console.log("Please enter the intern's name!");
//                             return false;
//                         }
//                     }
//                 },
//                 {
//                     type: 'input',
//                     name: 'empIDI',
//                     message: "Enter the intern's employee ID.",
//                     validate: githubInput => {
//                         if (githubInput) {
//                             return true;
//                         } else {
//                             console.log("Please enter the intern's Employee ID!");
//                             return false;
//                         }
//                     }
//                 },
//                 {
//                     type: 'input',
//                     name: 'emailI',
//                     message: "Enter the intern's email address.",
//                     validate: githubInput => {
//                         if (githubInput) {
//                             return true;
//                         } else {
//                             console.log("Please enter the intern's email address!");
//                             return false;
//                         }
//                     }
//                 },
//                 {
//                     type: 'input',
//                     name: 'school',
//                     message: "Enter the intern's school",
//                     validate: githubInput => {
//                         if (githubInput) {
//                             return true;
//                         } else {
//                             console.log("Please enter the intern's school!");
//                             return false;
//                         }
//                     }
//                 },
//                 {
//                     type: 'confirm',
//                     name: 'confirmAddIntern',
//                     message: 'Would you like to enter another Intern?',
//                     default: false
//                 }
        
//         ])
//         .then(smData => {
//             internData.internMem.push(smData);
//             if (smData.confirmAddIntern) {
//                 return promptIntern(internData);
//             } else {
//                 return internData;
//             }
//         });
//     };

   
    
    
// }

// module.exports = Employee;