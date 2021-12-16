// HYDRATE는 서버 사이드 렌더링을 위함이다.
// 서버 사이드 렌더링을 하기 위해 index reducer를 추가하는 것
import { HYDRATE } from "next-redux-wrapper";
import { combineReducers } from "redux";

import user from "./user";
import post from "./post";

// async action creater

// 이전 상태와 액션을 통해 다음 상태를 만드는 함수인 거시다.
// 리듀서들을 나눌 때는 이렇게 combineReducers로 세 개의 reducer를 합쳐 준다.
// initialState도 컴바인리듀서가 알아서 해 준다.
const rootReducer = combineReducers({
  index: (state = {}, action) => {
    switch (action.type) {
      case HYDRATE:
        return { ...state, ...action.payload };
      default:
        return state;
    }
  },
  user,
  post,
});

export default rootReducer;
