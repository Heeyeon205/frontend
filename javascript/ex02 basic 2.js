// 산술 연산자
console.log(10 + 3);
console.log(10 - 3);
console.log(10 * 3);

// 자바 스크립트는 기본 number 타입.
console.log(10 / 3);
console.log(10 % 3);

// 거듭 제곱 **
console.log(10 ** 3);
console.log(Math.pow(10, 3));

console.log(2 - "test");  // NaN (Not a Number)
console.log(10 / 0);  // Infinity

// 문자 "", '' 둘 다 사용 가능
let intro = 'qwer \n 입니다.';
console.log(intro);
intro = "'홍길동' 입니다."
console.log(intro);
intro = '"철수" 입니다.'
console.log(intro);

// `` 스트링 템플릿 (백틱) 외부 값을 ${변수} 로 넣어줄 수 있다.
const myName = "홍길동";
const job = "강사";
intro = `저는 ${myName} 입니다 \n 직업은 ${job}입니다.`
console.log(intro);

// boolean (!!)불리언 출력
let isDead = true;
console.log(isDead);
console.log(!isDead);
console.log(!!isDead);
console.log(!!!isDead);

// trulsy value
console.log(!!'0');
console.log(!!true);
console.log(!!"test");
console.log(!![]);
console.log(!!{});
console.log(!!10.1234);

// falesy value
// 숫자 0, false, 빈 문자열, null, undefined, NaN
console.log(!!0);
console.log(!!false);
console.log(!!"");
console.log(!!null);
console.log(!!undefined);
console.log(!!NaN);

// 비어 있다는 표시 (null은 비어있는 주소 값)
let cat = null;

// symbol: 유일무이한 값
const num1 = '1';
const num2 = '2';
console.log(num1 == num2);

const symbol1 = Symbol('1');
const symbol2 = Symbol('1');
console.log(symbol1 == symbol2);

