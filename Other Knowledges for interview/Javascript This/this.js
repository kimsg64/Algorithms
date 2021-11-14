console.log("전역 문맥의 this ↓");
console.log(this);
////////////////////////////////////////////////////////////////////////
function checkThis() {
  return this;
}
console.log("함수 내부에서 호출했을 때의 this ↓");
console.log(checkThis());
////////////////////////////////////////////////////////////////////////
function checkThisInStrictMode() {
  "use strict";
  return this;
}
console.log("엄격 모드가 선언된 함수 내부에서 호출했을 때의 this ↓");
console.log(checkThisInStrictMode());
////////////////////////////////////////////////////////////////////////
const obj = { a: "Custom" };
const a = "Global";
function whatsThis() {
  return this.a;
}
console.log("일반적인 () 호출 ↓");
console.log(whatsThis());
console.log("call()로 호출 ↓");
console.log(whatsThis.call(obj));
console.log("apply()로 호출 ↓");
console.log(whatsThis.apply(obj));
////////////////////////////////////////////////////////////////////////
function bar() {
  return this;
}
console.log("숫자 전달 ↓");
console.log(bar.call(7));
console.log("문자열 전달 ↓");
console.log(bar.call("foo"));
console.log("undefined 전달 ↓");
console.log(bar.call(undefined));
console.log("null 전달 ↓");
console.log(bar.call(null));
////////////////////////////////////////////////////////////////////////
const bindThis = whatsThis.bind({ a: "binded!" });
console.log("whatsThis를 { a: 'binded!' }로 바인드 ↓");
console.log(bindThis());
////////////////////////////////////////////////////////////////////////
const thisObj = {
  getThis: function () {
    console.log("thisObj!");
    return console.log(this);
  },
};
thisObj.getThis();
////////////////////////////////////////////////////////////////////////
function thisConstructor() {
  this.a = "this!";
}
const thisInstance = new thisConstructor();
console.log(thisInstance.a);
////////////////////////////////////////////////////////////////////////
const box = document.getElementById("box");
function thisInArrowFn() {
  console.log("이벤트 리스너의 트리거로 사용된 엘리먼트 ↓");
  console.log(this);
  const checkArrowFn = () => {
    console.log("이벤트 리스너의 콜백 내부에 정의된 화살표 함수 ↓");
    return this;
  };
  function checkNormalFn() {
    console.log("이벤트 리스너의 콜백 내부에 정의된 일반 함수 ↓");
    return this;
  }
  console.log(checkArrowFn());
  console.log(checkNormalFn());
}
box.addEventListener("click", thisInArrowFn);
