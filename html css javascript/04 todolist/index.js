let itemList = document.querySelectorAll('span.item_name');
const $ul = document.querySelector('.items');
let idx = 1;

function createItem(){
  if ($input.value.trim() === "") return;

  if (isDupItem($input.value)) {
    alert("이미 존재하는 항목입니다.");
    return;
  }
    const $li = document.createElement(`li`);
    $li.classList.add('item_row');
    $li.setAttribute('data-id', idx+"");
    $ul.appendChild($li);

    const $div = document.createElement('div');
    $div.classList.add('item');
    $li.appendChild($div);

    const $span = document.createElement('span');
    $span.classList.add("item_name");
    $span.innerHTML = $input.value;
    $div.appendChild($span);

    const $button = document.createElement('button');
    $button.classList.add("item_delete");
    $div.appendChild($button);

    const $i = document.createElement("i");
    $i.classList.add("fa-solid", "fa-trash-can");
    $i.setAttribute("data-id", idx+"");
    $button.appendChild($i);

    updateList();
    idx++;
    $input.value = '';
}

function updateList(){
  itemList = document.querySelectorAll('span.item_name');
}

function isDupItem(input){
  let isCheck = false;
  itemList.forEach((e) => {
    if(e.textContent === input){
      isCheck = true;
    }
  })
  return isCheck;
}

// 엔터키 add
let $input = document.querySelector("input");
$input.addEventListener("keydown", (e) => {
  if (e.isComposing) return; // 키보드에서 한글를 입력받았을때 이벤트 중복처리 방지 
  if (e.code === 'Enter') {
    createItem(e);
  }
}); 

// 클릭 add
let $addBtn = document.querySelector("button.footer_btn");
$addBtn.addEventListener("click", (e) => {
  createItem(e);
}); 

// 삭제
let $deleteBtn = document.querySelectorAll("button.item_delete");
$deleteBtn = document.addEventListener("click", (e) => {
  if (e.target.classList.contains("fa-trash-can")) {
      const $li = e.target.closest(".item_row");
      $li.remove();
      updateList();
  }
});