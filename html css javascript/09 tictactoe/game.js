class TicTacToe{
  constructor(p1, p2){
    this.p1 = p1;
    this.p2 = p2;
    this.curPlayer = this.p1;
    this.gameRun = true;
    this.gameBoard = Array(9).fill(null);
    this.startBtn = document.querySelector('#start');
    this.container = document.querySelector('.container');
    this.table;
    this.state = document.querySelector('p.turn');
    this.turnName = p1.name;
    this.endMsg = document.querySelector('p.msg');

    this.init();
  }

  init() {
    this.startBtn.addEventListener('click', () => {
      this.resetGame();
      this.createTable();
    })
  }
  
  createTable(){
    this.startBtn.classList.add('off');
    this.state.classList.remove('off');

    this.table = document.createElement('table');
    this.container.appendChild(this.table);

    let tableRow;
    let tableData;
    let cnt = 0;
    for(let i = 0; i < 3; i++){
      tableRow = document.createElement('tr');
      this.table.appendChild(tableRow);
      for(let j = 0; j < 3; j++){
        tableData = document.createElement('td');
        tableData.dataset.index = cnt++;
        tableData.addEventListener("click", (e) => this.clickCell(e));
        tableRow.appendChild(tableData);
      }
    }
    this.state.innerText = `플레이어 ${this.turnName}의 턴`;
  }

  clickCell(e) {
    if(!this.gameRun || e.target.innerText !== "") return;

    this.turnName = this.curPlayer === this.p1 ? this.p2.name : this.p1.name;
    this.state.innerText = `플레이어 ${this.turnName}의 턴`;

    let idx = e.target.dataset.index;
    this.gameBoard[idx] = this.curPlayer.shape;

    e.target.innerText = this.curPlayer.shape;
    e.target.style.backgroundColor = this.curPlayer.color;

    if(this.checkWinner()){
      this.endMsg.classList.remove('off');
        this.endMsg.innerText = `${this.curPlayer.name} 승리!`
        this.state.classList.add('off');
        this.gameRun = false;
      setTimeout(() => {
        this.endGame();
        return;
      },3000)
    }

    if(this.checkDraw()){
      this.endMsg.classList.remove('off');
        this.endMsg.innerText = "무승부!"
        this.state.classList.add('off');
        this.gameRun = false;
      setTimeout(() => {
        this.endGame();
        return;
      },3000)
    }

    this.curPlayer = this.curPlayer === this.p1 ? this.p2 : this.p1;
  }

  checkWinner() {
    const answerSheet = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8],
      [0, 3, 6], [1, 4, 7], [2, 5, 8],
      [0, 4, 8], [2, 4, 6]
    ];

    return answerSheet.some(([a, b, c]) => {
      return (
        this.gameBoard[a] !== null && 
        this.gameBoard[a] === this.gameBoard[b] && 
        this.gameBoard[a] === this.gameBoard[c]
      );
    });
  }

  checkDraw(){
    return this.gameBoard.every(box => box != null);
  }

  resetGame(){
    this.curPlayer = this.p1;
    this.turnName = this.p1.name;
    this.gameRun = true;
    this.gameBoard.fill(null);
    this.endMsg.classList.add('off');
  }

  endGame() {
    this.gameRun = false;
    this.endMsg.classList.add('off');
    this.table.classList.add('off');
    this.startBtn.innerHTML = "다시 시작";
    this.startBtn.classList.remove("off");
    this.state.classList.add('off');
    this.container.innerHTML = "";
  }
  
} // 

class Player{
  constructor(name, color, shape){
    this.name = name;
    this.color = color;
    this.shape = shape;
  }
}

const game = new TicTacToe (new Player("P1", 'pink', 'O'), new Player('P2', 'skyblue', 'X'));