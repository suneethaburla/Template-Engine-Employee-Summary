//This script creates and supports Manager class. Manager extends Employee and has additional attribute - officeNumber. 

const Employee = require("./Employee");

class Manager extends Employee {
    constructor(name, id, title, email, officeNumber) {
        super(name, id, title, email);
      this.officeNumber = officeNumber;
    }

    getOfficeNumber(){
        return this.officeNumber;
    }

    getRole() {
        return 'Manager';
    }
  }
  
//   const Engineer = new Engineer(12, 9);
//    Engineer.printInfo();
  module.exports = Manager;

