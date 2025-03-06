const myPromise = new Promise((resolve, reject) => {
  let success = false;
  setTimeout(() => {
    if(success){
      resolve("작업 성공!");
    }else{
      reject("작업 실패!");
    }
  }, 1000)
});

myPromise
.then(result => {
  console.log(result);
})
.catch(error => {
  console.log(error);
})
.finally(() => {
  console.log("작업 종료");
})
