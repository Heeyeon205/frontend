// [일급 객체]

// 1. 함수는 변수에 저장할 수 있다.
const sayHello = function() {
  console.log("Hello World!");
}
sayHello();

// 2. 함수의 인자로 전달할 수 있다.
function greet(func){
  func();
}
greet(sayHello);

// 3. 함수의 return 값으로 사용할 수 있다.
function createGreeting() {
  return function() {
    console.log("안녕하세요");
  };
}
const greeting = createGreeting();
greeting();

// 4. 콜백 함수 활용
function processUserInput(callback){
  const name = "Lyle";
  callback(name);
}

processUserInput(function(name){
  console.log(`Hello, ${name}!`);
});

// 함수를 인자로 받는 고차 함수
function repeatAction(action, times){
  for(let i = 0; i < times; i++){
    action(i);
  }
}
repeatAction(console.log, 3);

// 함수를 반환하는 고차 함수
function multiplyBy(factor){
  return function(number){
    return number * factor;
  }
}

const double = multiplyBy(2);
console.log(double(5));