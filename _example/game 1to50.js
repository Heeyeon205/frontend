let timer;
let startTime;
let elapsedTime = 0;
let isRunning = false;

function updateTimer() {
  let time = elapsedTime;
  if (isRunning) {
    time += new Date() - startTime;
  }

  let mins = Math.floor((time / 60000) % 60);
  let secs = Math.floor((time / 1000) % 60);

  document.querySelector('.timer').textContent =
    String(mins).padStart(2, "0") + ":" + String(secs).padStart(2, "0");
}

document.querySelector('#btn-start').addEventListener('click', () => {
  if (!isRunning) {
    isRunning = true;
    startTime = new Date() - elapsedTime;
    timer = setInterval(updateTimer, 1000);
  }
});

updateTimer();

// 게임 셋팅
let front = new Array(25).fill(0);
let back = new Array(25).fill(0);

for(let i = 0; i < front.length; i++){
  front[i] = i+1;
  back[i] = 26+i;
}

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let randomIndex = Math.floor(Math.random() * (i + 1)); 
    [array[i], array[randomIndex]] = [array[randomIndex], array[i]];
  }
  return array;
}

shuffleArray(front);
shuffleArray(back);

let boardList = document.querySelectorAll('.game');
for(let i = 0; i < boardList.length; i++){
  boardList[i].innerHTML = front[i]; 
  boardList[i].classList.add('front');
}

// 게임 시작
function updateHint() {
  boardList.forEach((board) => board.classList.remove('hint')); // 기존 힌트 제거
  let hintCell = [...boardList].find((board) => parseInt(board.textContent) === cnt);
  if (hintCell) {
    hintCell.classList.add('hint');
  }
}

let cnt = 1;
document.querySelector('.level').innerHTML = 'Level ' + 1;
boardList.forEach((board, i) => {
  board.addEventListener('click', (e) => {
    if(cnt < 26 && parseInt(e.target.textContent) === cnt){
      e.target.textContent = back[i];
      boardList[i].classList.add('back');
      cnt++;
    }else if(cnt >= 26 && parseInt(e.target.textContent) === cnt){
      boardList[i].classList.add('hide');
      cnt++; 
    }
    if(cnt == 51){
      clearInterval(timer);
      alert('성공');
    }else{
      updateHint();
      document.querySelector('.level').innerHTML = `Level ${cnt}`;
    }
  });
})


