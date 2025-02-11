let cat = {
  kind: '고양이',
  age: 5
};
let dog = {
  kind: '개',
  age: 4
};
let rabbit = {
  kind: '토끼',
  age: 0.5
};
let hamster = {
  kind: '햄스터',
  age: 1,
  eat: function () {
    console.log('해바라기씨를 먹는다 ')
  }
};


let pets = [cat, dog, rabbit, hamster, cat];

// 1. 동물의 kind 가 개 인것을 찾아라
let result1 = pets.filter(a => a.kind == '개');
console.log(result1)
// 2. 동물의 kind 가 고양이가 아닌것만 빼서 배열로 만들어라
let result2 = [];
result2 = pets.filter(a => a.kind != '고양이');
console.log(result2)
// 3. 총 동물의 평균 나이를 구해라 => 총합 => 갯수로 나눠기
let result3 = pets.reduce((sum, pet) => sum + pet.age, 0);
result3 /= pets.length;
console.log(result3 + "살")
// 4.동물 나이순으로 내림차순 정렬 : 기존 배열 건드리지 않는다 
let result4 = [...pets].sort((a, b) => a.age > b.age ? -1 : 0);
console.log(result4);