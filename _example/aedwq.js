
console.log('시작');

setTimeout( () => {
  console.log('3초뒤 실행');
}, 3000);

console.log('끝');

// 

function delay(ms){
  return new Promise(resolve => setTimeout(resolve, ms));
}

console.log('a');

delay(2000).then(() => {
  console.log('2초 뒤 실행 ');
});

console.log('c');