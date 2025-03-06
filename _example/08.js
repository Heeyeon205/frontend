function add(a,b){
  return a+b;
}

const sum = (a,b) => a+b;


console.log(add(2,3));
console.log(sum(2,3));

function Timer() {
  this.seconds = 0;

  setInterval(() => {
    this.seconds++;
    console.log(this.seconds);
  }, 1000);
}

const myTimer = new Timer();

location.href="07.js";
