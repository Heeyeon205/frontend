let data = '강내연,김나경,김도연,김민규,한종석,구승회,박시현,송명보,이원규,이종현,정지원,조지영';

//[1] userList input 값 입력
const userList = document.querySelector('#user-list');
const addbtn = document.querySelector('#btn-add');
const input = document.querySelector('#username');
const start = document.querySelector('#btn-start');
const stopBtn = document.querySelector('#btn-stop');
const selectedList = document.querySelector('#selected-list');
let users = data.split(',');

// 초기 설정
function init() {
  userList.innerHTML = "";
  users.forEach(name => {
    const li = document.createElement('li');
    li.classList.add('item');
    li.innerHTML = name;
    userList.appendChild(li);
  });
}

init();

// add 버튼 클릭
addbtn.addEventListener('click', () => {
  const username = input.value.trim();
  if (username === "") return;
  if (isDupName(username)) return;

  const li = document.createElement('li');
  li.classList.add('item');
  li.innerHTML = username;
  userList.appendChild(li);
  users.push(username);
  input.value = "";
});

// 중복 확인
function isDupName(username) {
  if (users.includes(username)) {
    alert('중복된 이름입니다.');
    return true;
  }
  return false;
}

//[2] 시작버튼을 누르면 순차적으로 on 붙이기
let isRun = false;
let idx = 0;
let runOn = null;

function getItems() {
  return items = [...document.querySelectorAll('.item')].filter(li => !li.classList.contains('fix'));
}

start.addEventListener('click', () => {
  if (isRun) return;
  isRun = true;
  const activeItems = getItems();
  if (activeItems.length === 0) return;

  idx = 0;
  runOn = setInterval(() => {
    activeItems[idx].classList.add('on');
    setTimeout(() => {
      activeItems[idx].classList.remove('on');
      idx = (idx + 1) % activeItems.length;
    }, 250);
  }, 500);
});

//[3] 정지버튼을 누르면 on 삭제, fix 추가, user-list에서 삭제 후 selected-list로 이동
stopBtn.addEventListener('click', () => {
  if (!isRun) return;
  clearInterval(runOn);
  isRun = false;

  let activeItems = getItems();
  if (activeItems.length === 0) return;

  activeItems[idx].classList.remove('on');
  activeItems[idx].classList.add('fix');

  const li = document.createElement('li');
  li.innerHTML = activeItems[idx].innerHTML;
  li.classList.add('item', 'fix');
  selectedList.appendChild(li);

  users = users.filter(name => name !== activeItems[idx].innerHTML);
  activeItems[idx].remove();

  idx = 0;
});
