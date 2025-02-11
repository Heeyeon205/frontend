let arr1 = [];
let arr2 = new Array();

// array 타입도 Object 를 상속 받는다.
console.log(typeof arr1);
console.log(typeof arr2);

arr1[0] = 100;
arr1[1] = 200;
arr1[3] = 300;

// [ 100, 200, <1 empty item>, 300 ]
console.log(arr1);  // empty : undefined
console.log(arr1[2] == undefined); // true

arr2 = new Array(5);
// [ <5 empty items> ]
console.log(arr2);

array = [1, "2", '3', true, NaN, {}, [100, 200, 300], [], undefined, null, 10.3, function test() { console.log("hello") }];
console.log(array);

for (let i = 0; i < array.length; i++) {
  console.log(`index ${i} = ${array[i]}`);
  // console.log("index" + i + " = " + array[i]);
}

console.log("-----");
console.log(array[-1]);
array[- 1] = "test";
console.log("-----");
for (let i = 0; i < array.length; i++) {
  console.log(`index ${i} = ${array[i]}`);
}

