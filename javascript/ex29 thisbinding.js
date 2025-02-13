function printName() {
  return this?.name || "이름이 없음";
}
console.log(printName());

const cat = {
  name: "나비"
}
console.log(printName.call(cat));

console.log(printName.apply({ name: "홍길동" }));

function addAll(x, y, z) {
  return `${this?.name || "이름이 없습니다"} 결과값: ${x + y + z}`;
}
console.log(addAll(1, 2, 3));

console.log(addAll.call(cat, 1, 2, 3));
console.log(addAll.apply(cat, [1, 2, 3]));

const dog = {
  name: "멍멍이"
}

const printDogName = printName.bind(dog);

console.log(printDogName());