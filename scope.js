const student = { 
    firstName: "John", 
    lastName: "Smith", 
    class: 12,
    sentence() {
       console.log(`${this.firstName} ${this.lastName} is a student in class ${this.class}`)

    }
  };
  student.sentence();

//   Create a person object. Include the person's first and last name, age, job, city etc. Create a method to print data from the object e.g. "John Smith is a 41 year old engineer living in France".

const person = {

    firstName: "Rahul",
    lastName: "Roy",
    age: 22,
    job: "Web Designer",
    city: "Mumbai",
    detail() {
        return `${this.firstName} ${this.lastName} is a ${this.age} year old ${this.job} living in ${this.city} `
    },

    size() {
        return Object.keys(person).length;
    }
};

console.log(person.size());
console.log(person.detail());
  

