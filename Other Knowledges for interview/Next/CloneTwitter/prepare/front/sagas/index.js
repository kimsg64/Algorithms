// 제너레이터: 함수 뒤에 *이 붙어 있는 것...
// 제너레이터 안의 것을 실행하려면 .next()로 호출해야 한다. 그냥 제너레이터만 호출하면 suspended가 나옴
// 제너레이터 안의 yield는 무엇이냐... yield 앞까지만 실행됨
// 예를 들어
// const gen = function* () {
//   console.log(1);
//   yield;
//   console.log(2);
//   yield;
//   console.log(3);
//   yield 4;
// }
// 이런 제너레이터가 있다면
// gen()의 결과는 {<suspended>}
// gen().next()를 하면 맨 처음에는 콘솔창에 1이 찍히고, 반환값은 {value: undefined, done: false}
// 한 번 더 gen().next()를 하면 콘솔창에 2가 찍히고, 반환값은 {value: undefined, done: false}
// 한 번 더 gen().next()를 하면 콘솔창에 3이 찍히고, 반환값은 {value: 4, done: true}
// 한 번 더 gen().next()를 하면 콘솔창에 아무것도 안찍히고, 반환값은 {value: undefined, done: false}

// 절대 멈추지 않는 제너레이터가 있는데, while(true) 문이다. 원래 무한 반복되어 프로그램이 중지되어 버리는 while(true)지만, yield가 중단점이 되어버리므로 프로그램이 중단되지 않는다.
// 또 이벤트 리스너와 비슷한 것을 만들 수도 있다. 어떤 코드가 실행되면 next가 실행되도록 하는 ...
// saga는 이것을 이용해 이벤트 리스너처럼 작동하게 한다. 로그인 액션이 들어오면 로그인을 실행하는 등...
// reducers/user.js의 주석(thunk)과 같은 일을 하는 것

import {
  all,
  fork,
  call,
  put,
  takeLatest,
  throttle,
  delay,
} from "redux-saga/effects";
// 이것들을 saga effect라고 한다.
// 사가를 쪼갤 때는 리듀서랑 비슷한 기준으로 쪼개면 된다.
// 다행히 컴바인하는건 따로 없고 그냥 export import로 가능
import postSaga from "./post";
import userSaga from "./user";

export default function* rootSaga() {
  // all은 배열을 받아서 배열 안의 것들을 한 번에(동시에) 실행시켜 준다.
  // fork는 해당 함수를 실행시킨다.
  yield all([fork(postSaga), fork(userSaga)]);
}
