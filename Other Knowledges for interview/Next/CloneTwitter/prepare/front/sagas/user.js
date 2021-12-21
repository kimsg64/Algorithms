import axios from "axios";
import { all, delay, fork, put, takeLatest } from "redux-saga/effects";
import {
  LOG_IN_REQUEST,
  LOG_IN_SUCCESS,
  LOG_IN_FAILURE,
  LOG_OUT_REQUEST,
  LOG_OUT_SUCCESS,
  LOG_OUT_FAILURE,
  SIGN_UP_REQUEST,
  SIGN_UP_SUCCESS,
  SIGN_UP_FAILURE,
  UNFOLLOW_REQUEST,
  UNFOLLOW_SUCCESS,
  UNFOLLOW_FAILURE,
  FOLLOW_REQUEST,
  FOLLOW_SUCCESS,
  FOLLOW_FAILURE,
} from "../reducers/user";

function followAPI(data) {
  // 실제로 서버에 요청(제너레이터 아님)
  return axios.post("/api/follow", data);
}

function* follow(action) {
  try {
    // const result = yield call(logInAPI, action.data);
    yield delay(1000);

    yield put({
      type: FOLLOW_SUCCESS,
      data: action.data,
    });
  } catch (err) {
    yield put({
      type: FOLLOW_FAILURE,
      data: err.response.data,
    });
  }
}

function* watchFollow() {
  yield takeLatest(FOLLOW_REQUEST, follow);
}
function unfollowAPI(data) {
  // 실제로 서버에 요청(제너레이터 아님)
  return axios.post("/api/unfollow", data);
}

function* unfollow(action) {
  try {
    yield delay(1000);

    yield put({
      type: UNFOLLOW_SUCCESS,
      data: action.data,
    });
  } catch (err) {
    yield put({
      type: UNFOLLOW_FAILURE,
      data: err.response.data,
    });
  }
}

function* watchFollow() {
  yield takeLatest(UNFOLLOW_REQUEST, follow);
}

function logInAPI(data) {
  // 실제로 서버에 요청(제너레이터 아님)
  return axios.post("/api/login", data);
}

function* logIn(action) {
  try {
    // call도 해당 함수를 실행시키는데, fork와 약간 다르다.
    // fork는 비동기 함수 호출, call은 동기 함수 호출이다.
    // 즉 여기서 yield call 대신 yield fork를 써버리면, loginAPI의 결과가 result에 담기기 전에 바로 다음 줄로 넘어가 버린다.
    // call을 하면 앞의 logInAPI가 완료될 때까지 실행되지 않는다.
    // 즉 call은 axios.post().then(res => res)처럼 작동하지만, fork를 여기서 쓰면 axios.post() 뒤에 res가 없는데 res를 찾는 꼴이 되어버린다.
    // 또, call과 fork는 첫 번째 인자로 콜백함수, 두 번째 인자부터는 다른 데이터들이 넘어가는데, 이는 callback(a, b, c, ...) 이런 식으로 사용하는 것과 같다.
    // 아래 예시로는 logInAPI(action.data)와 같은 것
    // const result = yield call(logInAPI, action.data);

    // 서버가 없는 상태이므로 임시로 delay를 사용할 예정이다. setTimeout과 비슷하다.
    yield delay(1000);

    // put은 dispatch같은 것이다.
    yield put({
      type: LOG_IN_SUCCESS,
      data: action.data,
    });
  } catch (err) {
    yield put({
      type: LOG_IN_FAILURE,
      data: err.response.data,
    });
  }
}

function* watchLogIn() {
  // take는 해당 액션이 실행될 때까지 기다렸다가 두 번째 인자로 전달된 함수를 실행시킨다. (액션 데이터도 같이 넘어간다.)
  // 이 take는 일회용이라서 그냥 이렇게 쓰면 로그인을 한 번밖에 못한다...
  // 그래서 while문을 사용하거나, takeEvery로 바꿔서 사용해 주면 된다.
  // 단, take는 동기적이지만 takeEvery는 비동기적으로 동작한다는 차이가 있다.
  // takeLatest는 반복적인 요청에 대해 마지막 응답만을 취하는 것이다.
  // 예를 들면, 실수로 두 번 클릭했을 때, 로그인 요청이 두 번 가는데, 이 때 마지막 요청에 대한 응답만을 받아오게 해 준다. (요청 자체를 취소할 수는 없음)
  // 그래서 보통 takeLatest를 쓴다.
  // console.log("saga login requrest");
  yield takeLatest(LOG_IN_REQUEST, logIn);
}

function logOutAPI() {
  return axios.post("/api/logout");
}

function* logOut() {
  try {
    // const result = yield call(logOutAPI);
    yield delay(1000);
    yield put({
      type: LOG_OUT_SUCCESS,
      data: action.data,
    });
  } catch (err) {
    yield put({
      type: LOG_OUT_FAILURE,
      data: err.response.data,
    });
  }
}

function* watchLogOut() {
  yield takeLatest(LOG_OUT_REQUEST, logOut);
}

function SignUpAPI() {
  return axios.post("/api/signup");
}

function* signUp() {
  try {
    yield delay(1000);
    yield put({
      type: SIGN_UP_SUCCESS,
      data: action.data,
    });
  } catch (err) {
    yield put({
      type: SIGN_UP_FAILURE,
      data: err.response.data,
    });
  }
}

function* watchSignUp() {
  yield takeLatest(SIGN_UP_REQUEST, signUp);
}

export default function* userSaga() {
  yield all(fork(watchFollow), fork(watchUnfollow), [
    fork(watchLogIn),
    fork(watchLogOut),
    fork(watchSignUp),
  ]);
}
