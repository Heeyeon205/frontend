let data = '강내연,김나경,김도연,김민규,한종석,구승회,박시현,송명보,이원규,이종현,정지원,조지영';
let cnt = 12;

//[1] userList input 값을 입력 => <li class="item">박연미</li> 추가
const userList = document.querySelector('#user-list');
const input = document.querySelector('#btn-add');

// 초기 설정
for(let i = 0; i < cnt; i++){
  const li = document.createElement('li');
  li.classList.add('item');
  li.innerHTML = `${data.split(',')[i]}`;
  userList.appendChild(li);
}

// add 버튼 클릭시
input.addEventListener('click', (e) =>{
  const username = e.target.value;
  const li = document.createElement('li');
  li.classList.add('item');
  li.innerHTML = `d ${username}`;
  userList.appendChild(li);
  data += `,${username}`;
});

//[2] 시작버튼을 누르면 순차적으로 on 붙이기
const liList = document.querySelectorAll('.item');
const start = document.querySelector('#btn-start');
let idx = 0;
start.addEventListener('click', () =>{
  setInterval(() =>{
    if(idx < liList.length){
      liList[idx++].classList.add('on');
    }
},500);
})


//[3] 정지버튼을 누르면 on 삭제 fix 붙이기 , user-list있는 li 태그
// 값 삭제하기