const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name, id, email, office) {
        super(name, id, email)

        this.office = office;
    }

    officeNumber() {
        return this.office;
    }

    getRole() {
        return Manager;
    }
}

module.exports = Manager;

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
