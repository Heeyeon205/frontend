// Counter 라는 클래스를 만들고 value 변수를 캡슐화 하기 
// public increase() 메서드 통해서 value 값을 증가시키기 
// 예외조건 set 통해서 value 수정할때 음수값은 들어가지 않게 설정 :
// 음수 들어오면 기본값 0으로 변경

class Counter {
  #value;
  constructor(initialValue) {
    this.#value = initialValue < 0 ? console.log("올바르지 않은 값 범위") : initialValue;
  }
  increase() {
    this.#value++;
  }
  get value() {
    return this.#value;
  }
  set value(newValue) {
    this.#value = newValue < 0 ? 0 : newValue;
  }
}

const counter1 = new Counter(-100);

const counter = new Counter(5);
console.log(counter);
console.log(counter.value);
counter.increase();
counter.increase();
counter.increase();
console.log(counter.value);

counter.value = -100;
console.log(counter.value);