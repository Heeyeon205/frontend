let time = 0;
let timerInterval = null;


function update(){
let elapsedTime = Date.now() - time;
let mins = Math.floor((elapsedTime / 60000) % 60);
let secs = Math.floor((elapsedTime / 1000) % 60);
let millis = Math.floor((elapsedTime % 1000) / 10);

let min = String(mins).padStart(2, '0');
let sec = String(secs).padStart(2, '0');
let milli = String(millis).padStart(2, '0');

console.log(min + ":" + sec + ":" + milli);
}

function timer() {
  time = Date.now();
  timerInterval = setInterval(() => update(), 10);
}

timer();