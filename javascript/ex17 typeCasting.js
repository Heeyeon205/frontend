// true = > 1  false => 0 
// 묵시적 타입 변환 == 자동 타입 변환 
console.log('1' + 2); // 12
console.log(+'1' + 2); //3
console.log(1 + true); // 2
console.log(1 + false); // 1
console.log(1 + null); // 1
console.log(1 + undefined);  //NaN 
console.log(1 + '');  //'1' 
console.log('1' * 1);  //1 
console.log(!!'x'); // true
console.log(!!''); // false

// 명시적 타입 변환 == 강제적 타입변환 
console.log(Boolean('x'));
console.log(Boolean(0)); // false
console.log(Boolean(1)); // true
console.log(Boolean('false')); // true
console.log(Boolean(NaN)); // false
console.log(Boolean(Infinity)); // true
console.log(Boolean(null)); // false
console.log(Boolean(undefined)); // false
console.log(Boolean({})); // true
console.log(Boolean([])); // true

console.log('1' == 1);
console.log('1' === 1);
console.log(NaN === NaN); // false  : === 비교 예외적인 부분 
console.log(isNaN(NaN)); // true
console.log(isNaN(Infinity)); // false 

// 문자열 => 읽기 전용 배열 
let str = '박연미';
console.log(str[0], str.length);
str[0] = '김'; // 문자열 부분적으로 수정 불가능 
console.log(str); // 박연미

str = '김연미'; // 전체를 재할당 

str = ['박', '연', '미'];
console.log(str[0], str.length);
str[0] = '김'; // 문자열 배열은 부분 수정 가능 
console.log(str); // 박연미