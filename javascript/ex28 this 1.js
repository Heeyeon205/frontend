function test() {
  console.log(this);
}

// console.log(globalThis);
// console.log("-------");
// test();

const cat = {
  name: "나비",
  age: 3,
  callOwner: function () {
    return `집사야 ${this.name} 배고파 밥줘`;
  }

}

console.log(cat);
console.log(cat.callOwner());