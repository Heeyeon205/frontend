let inputData = JSON.parse(localStorage.getItem("data")) || [];

let titleInput = document.querySelector('#title');
let conInput = document.querySelector('#content');

let isDupTitle = false; 

// add 버튼 로직
document.querySelector('#addBtn').addEventListener('click', () => {
  if(titleInput.value.trim() === "" || conInput.value.trim() === ""){
    alert("필수 값을 입력해주세요.");
    return;
  }
  if(inputData.length > 0){
    checkDupTitle();
  }
  if(isDupTitle) return;
  addContent();
  addJson();
  clearInput();
});

// 제목 중복 체크
function checkDupTitle(){
  isDupTitle = false;
inputData.forEach(data => {
  if(data.title === titleInput.value){
    alert("제목은 중복이 불가능합니다.")
    clearInput();
    isDupTitle = true;
    return;
  };
});
};

// todo 추가
function addContent() {
let list = document.querySelector('div#list');

let div = document.createElement('div');
div.classList.add('item');

list.appendChild(div);
addDragFn(div);

let h4 = document.createElement('h4');
h4.classList.add('title');
div.appendChild(h4);
h4.innerText = titleInput.value;

let span = document.createElement('span');
span.classList.add('msg');
div.appendChild(span);
span.innerText = conInput.value;
}

// 입력 값 초기화
function clearInput(){
  titleInput.value = "";
  conInput.value = "";
}

// 제이슨 데이터 추가
function addJson() {
  let data = {
    title : titleInput.value.trim(),
    content : conInput.value.trim()
  }
  inputData.push(data);
  localStorage.setItem('data', JSON.stringify(inputData));
}

// todo 드래그
let itemList = [...document.querySelectorAll('div.item')];
let dragItem = null;
function addDragFn(item) {
  item.setAttribute("draggable", "true");
  item.addEventListener("dragstart", (e) => {
    dragItem = e.target;
  });
}

// 드래그 드롭으로 삭제
let msgBox = document.querySelector('.msg-box');
let garbageBox = document.querySelector('#garbage');
garbageBox.addEventListener('dragover', (e) => {
  e.preventDefault();
});

garbageBox.addEventListener('drop', (e) => {
  if(dragItem){
    deleteJson();
  dragItem.remove();
  dragItem = null;
  msgBox.innerText = "할 일 삭제 완료!"
  msgBox.classList.add('on');
  setTimeout(() => {
    msgBox.classList.remove('on');
  },2000)

  }
});

// 제이슨 데이터 삭제
function deleteJson() {
  let deleteTitle = dragItem.querySelector('.title').innerText;
  inputData = inputData.filter(data => data.title !== deleteTitle);
  localStorage.setItem('data', JSON.stringify(inputData));
}
