function Person(name, age) {
    this.name = name;
    this.age = age;
  }
  
 
  Person.prototype.sayHello = function() {
    console.log('Hello, my name is ' + this.name + ' and I am ' + this.age + ' years old.');
  };
  

  var person1 = new Person('Alice', 25);
  var person2 = new Person('Bob', 30);
  

  person1.sayHello(); 
  person2.sayHello(); 
  