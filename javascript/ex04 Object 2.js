const dog = {
  name: "바둑이",
  age: 3,
  like: ["뼈", "인형"],
  owner: { name: "홍길동" },
  sayHi: function () { console.log("멍멍멍!") }, // 객체 안에 있는 함수의 이름은 필요가 없다.
}

console.log(dog);
console.log(dog.name);
console.log(dog.owner.name);
dog.sayHi();

// 얕은 복사: 같은 주소 값 공유
const dog2 = dog;
dog.name = "멍멍이";

// 깊은 복사: 새로운 주소 값 할당 후 내부 값만 복사.
const dog3 = { ...dog };
dog3.name = "백구";


// 값 추가
let obj = {};
let obj2 = new Object(); // ECMA6 (ES6) 이후 class 도입

console.log(typeof obj);
console.log(typeof obj2);

obj.name = "test1";
obj2["name"] = "test2";

console.log(obj);
console.log(obj2);

let num = 10;
num.number = '100';
console.log(typeof num);

