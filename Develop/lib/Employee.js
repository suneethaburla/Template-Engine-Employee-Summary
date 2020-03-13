//This script creates and supports Employee class. Employee requires name, is, title and email to construct. 
class Employee {
    constructor(name, id, title, email) {
      this.name = name;
      this.id = id;
      this.title = title;
      this.email = email;
    }
    getName(){
        return name;
    }

    getId(){
        return id;
    }
    
    getTitle(){
        return this.title;
    }

    getEmail(){
        return this.email;
    }

    getRole() {
        return 'Employee';
    }
  }
  
  module.exports = Employee;

