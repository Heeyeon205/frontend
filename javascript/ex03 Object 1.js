// 리터럴 객체 => 오브젝트 타입
// 키 : value
let dog = {
  name: "바둑이",
  age: 3,
  ownerName: "키티"
}

const hamster = {
  name: "치즈",
  age: 5
}

// 객체 속성 값 추가
dog = { name: "백구" }
dog["like"] = ["개껌", "뼈다귀"];
hamster.like = ["해바라기 씨", "과일"];

// 객체 속성 값 삭제
dog.owner = "제임스";
console.log(dog);
delete dog.owner;
console.log(dog);

// 객체타입 ['속성이름'] 값 접근하는 이유
function getKeyValue1(obj, key) {
  return obj.key; // 순수하게 obj 값에 "key" 라는 속성 값을 찾는 것(동적으로 값 변경 불가능);
}

function getKeyValue2(obj, key) {
  return obj[key]; // key 라는 변수에 값으로 접근한다.
}

console.log(getKeyValue2(dog, "name"));