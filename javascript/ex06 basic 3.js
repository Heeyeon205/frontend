// 비교 연산자
let num = 10;
console.log(num == 10);
console.log(num != 10);
console.log(num >= 10);
console.log(num <= 10);
console.log(num > 10);
console.log(num < 10);

console.log('----------')

console.log(true == 'ture');  // boolean 은 자동 형 변환 하지 않는다.
console.log('10' == 10);  // true: 자동 형 변환
console.log('10' === 10); // false: === 은 값과 타입을 모두 비교

let number = num += 10;
console.log(number)

let result = 1;
console.log(result);
result = number++;
console.log(`result = ${result} , number = ${number}`);
result = number--;
console.log(`result = ${result} , number = ${number}`);
result = ++number;
console.log(`result = ${result} , number = ${number}`);
result = --number;
console.log(`result = ${result} , number = ${number}`);

result %= 2;
console.log(result);

number = '10';
console.log(number + 10); // 1010

// 20 (+문자열, 문자열*1, 은 자동 형변환)
console.log(+number + 10);
console.log(+number * 1 + 10);

// 문자열 형 변환
console.log(10 + "" + 10);

console.log(typeof 10); // number
console.log(typeof (10 + "")); // String

let num1 = 10;
// 명시적 형 변환
console.log(num1.toString);

// 묵시적 형 변환
let num2 = 10 + "";


// 명시적 형 변환 
let str1 = '10';
str1 = parseInt(str1);

// 묵시적 형 변환
let str2 = '10';
str2 * 1;

// 단축 평가 ||, &&
console.log(true || "홍길동");
console.log(false || "홍길동");

console.log(true && "홍길동");
console.log(false && "홍길동");

console.log("" && "cat"); // 빈문자열은 falesy value
console.log("cat" && 0);
console.log(0 && "cat");