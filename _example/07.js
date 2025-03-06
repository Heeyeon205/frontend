const person = {
  name : "Lyle",
  age: 29,
  greet: function(){
    console.log("Hello");
  }
};

console.log(person.name);
console.log(person.age);
person.greet();

console.log(person);

person.job = "Developer";
console.log(person.job);

delete person.age;
console.log(person.age);

