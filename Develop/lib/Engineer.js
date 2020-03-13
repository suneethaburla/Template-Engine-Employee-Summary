
//This script creates and supports Engineer class. Engineer extends Employee and has additional attribute - github. 
const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(name, id, title, email, github) {
        super(name, id, title, email);
        this.github = github;
    }
    getGithub() {
        return this.github;
    }    

    getRole() {
        return 'Engineer';
    }
  }
  
//   const Engineer = new Engineer(12, 9);
//    Engineer.printInfo();
  module.exports = Engineer;

