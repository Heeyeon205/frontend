class Game1To50{
  constructor() {
    this.frontList = [];
    this.backList = [];
    this.cnt = 1;

    this.time = 0;
    this.timerInterval = null;
    this.isTimerRun = false;

    this.startBtn = document.querySelector('button#start');
    this.timer = document.querySelector('h4#timer');
    this.container = document.querySelector('.container');
    this.boxList = document.querySelectorAll('.box');

    this.init();
  }

  init(){
    this.timer.classList.add('off');
    this.container.classList.add('off');
    this.pushStart();
  }

  pushStart(){
    this.startBtn.addEventListener('click', () => {
      this.boxList.forEach(box => {
        box.classList.remove('off');
      })
      this.timer.classList.remove('off');
      this.container.classList.remove('off');
      this.startBtn.classList.add('off');
      this.startTimer();
      this.setBoard();
      this.setGame();
    })
  }
  
  startTimer(){
    if(!this.isTimerRun){
      this.isTimerRun = true;
      this.time = Date.now();
      this.timerInterval = setInterval(() => this.updateTimer(), 10);
    }
  }

  updateTimer(){
    let elapsedTime = Date.now() - this.time;

    let min = Math.floor((elapsedTime / 60000) % 60);
    let sec = Math.floor((elapsedTime / 1000) % 60);
    let milli = Math.floor((elapsedTime % 1000) / 10);

    this.timer.innerHTML = 
    String(min).padStart(2, '0') + " : " 
    + String(sec).padStart(2,'0') + " : " 
    + String(milli).padStart(2,'0');
  }

  setBoard() {
    for(let i = 0; i < 25; i++){
      this.frontList.push(i+1);
      this.backList.push(i+26);
    }
    this.shuffleBoard(this.frontList);
    this.shuffleBoard(this.backList);
    this.printBoard();
  }

  shuffleBoard(arr){
    for(let i = 0; i < 25; i++){
      let rdIdx = Math.floor(Math.random() * (i+1));
      // let temp = arr[i];
      // arr[i] = arr[rdIdx];
      // arr[rdIdx] = temp;
      [arr[i], arr[rdIdx]] = [arr[rdIdx], arr[i]];
    }
  }

  printBoard(){
    this.boxList.forEach((box, idx) => {
      box.innerHTML = this.frontList[idx]
      box.classList.add('front');
  });
  }

  setGame(){
    this.boxList.forEach((box, idx) => {
      box.addEventListener('click', () => {
        if(this.cnt < 26 && this.cnt == Number(box.innerHTML)){
          box.classList.remove('front');
          box.classList.add('back');
          box.innerHTML = this.backList[idx];
          this.cnt++;
        }else if(this.cnt >= 26 && this.cnt === Number(box.innerHTML)){
          box.classList.remove('back');
          box.classList.add('off');
          this.cnt++;
        }else if(this.cnt !== Number(box.innerHTML)){
          let hintBox = [...this.boxList].find((hBox) => Number(hBox.innerHTML) == this.cnt);
          if(hintBox){
            hintBox.classList.add('hint');
            setTimeout(() => {
              hintBox.classList.remove('hint');
            }, 300);
          };
        }
        if(this.cnt == 51){
          this.endGame();
          this.resetGame();
        }
      })
  });
  }

  endGame(){
    let record = this.timer.innerHTML;
    clearInterval(this.timerInterval);
    this.timer.innerHTML = `당신의 기록 ${record} 입니다!`;
    this.startBtn.classList.remove('off')
    this.startBtn.innerHTML = "다시 시작";
  }

  resetGame(){
    this.frontList = [];
    this.backList = [];
    this.cnt = 1;

    this.time = 0;
    this.timerInterval = null;
    this.isTimerRun = false;

    this.boxList.forEach(box => {
      box.innerHTML = "";
    })
  }
  
}

window.game = new Game1To50();