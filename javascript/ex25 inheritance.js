class Person {
  #job;
  constructor(name, age, job) {
    this.name = name;
    this.age = age;
    this.#job = job;
  }
  eat() {
    console.log("먹자");
  }
  sleep() {
    console.log("자자");
  }
  printPerson() {
    console.log(this);
    console.log(this.#job);
  }
}

class Teacher extends Person {
  constructor(name, age, teacherNo) {
    super(name, age, "선생님");
    this.teacherNo = teacherNo;
  }
  teach() {
    console.log("교육");
  }
}

class Student extends Person {
  constructor(name, age, grade, stuNo) {
    super(name, age, "학생");
    this.grade = grade;
    this.stuNo = stuNo;
  }
  Student() {
    console.log("배움");
  }
  eat() {
    console.log("급식 먹자");
  }
}

const kim = new Person("Kim", 20, "무직");
console.log(kim);
kim.printPerson();

const park = new Teacher("park", 20, 1234);
console.log(park);
park.printPerson();

const jin = new Student("jin", 20, "222", 1234);
console.log(jin);
jin.printPerson();
jin.eat();