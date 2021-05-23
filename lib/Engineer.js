module.exports = function(val1, val2) {
    if (val1 === val2) {
      return true;
    } else {
      return false;
    }
  };




// const inquirer = require('inquirer');
// const End = require('./Start');

// class Engineer {
//     constructor(engineer, employeeData) {
//         this.engineer = engineer;
//         this.employeeData = employeeData;
//     }

//     initializeEngineer() {
//         console.log('you called me!!!!');
//         // if (!engineerData.teamMem) {
//         //     engineerData.teamMem = [];
//         // };
//         return inquirer
//             .prompt([
//                 {
//                     type: 'input',
//                     name: 'github',
//                     message: "Enter the engineer's Github Username.",
//                     validate: githubInput => {
//                         if (githubInput) {
//                             return true;
//                         } else {
//                             console.log("Please enter the engineer's Github Username!");
//                             return false;
//                         }
//                     }
//                 },
//             ])
//             .then(engineerData => {
//                 console.log(engineerData);
//                 return new End(this.engineer, engineerData, this.employeeData).checkIfAddingAnotherEmployee()
//             }).catch(err => {
//                 console.log(err);
//             });

//     }
// }


// module.exports = Engineer;