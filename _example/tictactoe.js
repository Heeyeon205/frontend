class Tictactoe{

  constructor() {
    this.board = Array(9).fill(null);
    this.curPlayer = "x";
    this.isGameRun = true;
    this.status = document.querySelector("#status");
    this.cells = document.querySelectorAll(".cell");
    this.resetBtn = document.querySelector("#resetBtn");

    this.init();
  }

  init() {
    this.cells.forEach((cell, idx) => {
      cell.addEventListener("click", () => {
        this.handleClick(idx);
      })
    });
    this.resetBtn.addEventListener('click', () => {
      this.resetGame();
    })
  }

  handleClick(idx){
    if(!this.isGameRun || this.board[idx] !== null) return;

    this.board[idx] = this.curPlayer;
    this.cells[idx].innerHTML = this.curPlayer;

    if(this.checkWinner()){
      this.status.innerHTML =  `플레이어 ${this.curPlayer} 승리!`;
      this.isGameRun = false;
      return;
    }

    if(this.board.every(cell => cell !== null)){
      this.status.innerHTML = "무승부!";
      this.isGameRun = false;
      return;
    }

    this.curPlayer = this.curPlayer === "o" ? "x" : "o";
    this.status.innerHTML = `플레이어 ${this.curPlayer}의 차례`;
  }

  checkWinner() {
    const winningCombinations = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8],
      [0, 3, 6], [1, 4, 7], [2, 5, 8], 
      [0, 4, 8], [2, 4, 6]
    ];

    return winningCombinations.some(combination => {
      const [a, b, c] = combination;
      return this.board[a] && this.board[a] === this.board[b] && this.board[a] === this.board[c];
    });
  }

  resetGame() {
    this.board.fill(null);
    this.isGameRun = true;
    this.curPlayer = "X";
    this.status.innerText = "플레이어 X의 차례";
    this.cells.forEach(cell => (cell.innerText = ""));
  }
};

document.addEventListener("DOMContentLoaded", () => new Tictactoe());
// const game = new Tictactoe();