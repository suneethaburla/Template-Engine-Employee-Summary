//This script creates and supports Intern class. Engineer extends Employee and has additional attribute - school. 

const Employee = require("./Employee");

class Intern extends Employee {
    constructor(name, id, title, email, school) {
        super(name, id, title, email);
        this.school = school;
    }

    getSchool(){
        return this.School;
    }

    getRole() {
        return 'Intern';
    }
  }
  
//   const Engineer = new Engineer(12, 9);
//    Engineer.printInfo();
  module.exports = Intern;

