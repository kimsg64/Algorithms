// for next-redux-wrapper
import { applyMiddleware, compose, createStore } from "redux";
import { createWrapper } from "next-redux-wrapper";
import { composeWithDevTools } from "redux-devtools-extension";
// import thunkMiddelware from "redux-thunk";
import createSagaMiddleware from "@redux-saga/core";
import reducer from "../reducers";
import rootSaga from "../sagas";

const loggerMiddleware =
  ({ dispatch, getState }) =>
  (next) =>
  (action) => {
    // 로그를 찍어주는 간단한 미들웨어를 만들어봤다.
    console.log(action);
    return next(action);
  };

const configureStore = () => {
  // const middlewares = [thunkMiddelware];
  const sagaMiddleware = createSagaMiddleware();
  const middlewares = [sagaMiddleware, loggerMiddleware];
  // 미들웨어: 리덕스의 기능을 향상시켜주는 친구
  // -> thunk는 리덕스가 비동기 처리를 할 수 있도록 해 줌 (호출할 때 디스패치 => 하나의 액션에서 여러번 디스패치가 가능해진다.)
  // 즉, 하나의 비동기 요청 안에 여러 개의 동기 액션이 가능
  const enhancer =
    process.env.NODE_ENV === "production"
      ? compose(applyMiddleware(...middlewares))
      : composeWithDevTools(applyMiddleware(...middlewares));
  const store = createStore(reducer, enhancer);
  store.sagaTask = sagaMiddleware.run(rootSaga);
  return store;
};

const wrapper = createWrapper(configureStore, {
  debug: process.env.NODE_ENV === "development",
});

export default wrapper;
