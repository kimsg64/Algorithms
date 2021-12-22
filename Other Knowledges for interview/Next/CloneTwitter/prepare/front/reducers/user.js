import produce from "immer";

export const initialState = {
  followLoading: false, // 팔로우 시도 중
  followDone: false,
  followError: null,
  unfollowLoading: false, // 언팔로우 시도 중
  unfollowDone: false,
  unfollowError: null,
  logInLoading: false, // 로그인 시도 중
  logInDone: false,
  logInError: null,
  logOutLoading: false, // 로그인 시도 중
  logOutDone: false,
  logOutError: null,
  signUpLoading: false, // 회원가입 시도 중
  signUpDone: false,
  signUpError: null,
  changeNicknameLoading: false, // 닉변 시도 중
  changeNicknameDone: false,
  changeNicknameError: null,
  me: null,
  signUpData: {},
  loginData: {},
};

export const LOG_IN_REQUEST = "LOG_IN_REQUEST";
export const LOG_IN_SUCCESS = "LOG_IN_SUCCESS";
export const LOG_IN_FAILURE = "LOG_IN_FAILURE";

export const LOG_OUT_REQUEST = "LOG_OUT_REQUEST";
export const LOG_OUT_SUCCESS = "LOG_OUT_SUCCESS";
export const LOG_OUT_FAILURE = "LOG_OUT_FAILURE";

export const SIGN_UP_REQUEST = "SIGN_UP_REQUEST";
export const SIGN_UP_SUCCESS = "SIGN_UP_SUCCESS";
export const SIGN_UP_FAILURE = "SIGN_UP_FAILURE";

export const CHANGE_NICKNAME_REQUEST = "CHANGE_NICKNAME_REQUEST";
export const CHANGE_NICKNAME_SUCCESS = "CHANGE_NICKNAME_SUCCESS";
export const CHANGE_NICKNAME_FAILURE = "CHANGE_NICKNAME_FAILURE";

export const FOLLOW_REQUEST = "FOLLOW_REQUEST";
export const FOLLOW_SUCCESS = "FOLLOW_SUCCESS";
export const FOLLOW_FAILURE = "FOLLOW_FAILURE";

export const UNFOLLOW_REQUEST = "UNFOLLOW_REQUEST";
export const UNFOLLOW_SUCCESS = "UNFOLLOW_SUCCESS";
export const UNFOLLOW_FAILURE = "UNFOLLOW_FAILURE";

export const ADD_POST_TO_ME = "ADD_POST_TO_ME";
export const REMOVE_POST_OF_ME = "REMOVE_POST_OF_ME";

const dummyUser = (data) => ({
  ...data,
  nickname: "윈카우",
  id: 1,
  Posts: [{ id: 1 }],
  Followings: [
    { nickname: "부기초" },
    { nickname: "부기초" },
    { nickname: "부기초" },
  ],
  Followers: [
    { nickname: "부기초" },
    { nickname: "부기초" },
    { nickname: "부기초" },
  ],
});

// action creater: 원래 액션은 객체인데 객체로 만들면 동적으로 값을 바꾸기 힘들어서 객체를 뱉는 함수를 만든 것

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// thunk가 해 주는 일이 이것이다.(비동기 액션을 가능하게 해 줌, 한 번에 디스패치를 여러 번 할 수 있게 해 준다.)
// saga를 쓰면 조금 더 많은 것을 해 준다. 딜레이(몇 초 뒤에 디스패치가 가능하게 한다든지...)
// 그래서 간단한 어플을 만들 때는 thunk를 써서 비동기 액션만 사용 가능하게 해도 되는데, 그렇지 않으면 saga로 다양한 기능을 지원받으면 좋음
// export const loginAction = (data) => {
//   return (dispatch, getState) => {
//     const state = getState();
//     dispatch(loginRequestAction());
//     axios
//       .post("/api/login")
//       .then((res) => dispatch(loginSuccessAction(res.data)))
//       .catch((err) => dispatch(loginFailureAction(err)));
//   };
// };
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
export const loginRequestAction = (data) => {
  return { type: LOG_IN_REQUEST, data };
};

export const logoutRequestAction = () => {
  return { type: LOG_OUT_REQUEST };
};

const reducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case FOLLOW_REQUEST: {
        // console.log("reducer logged in");
        draft.followLoading = true;
        draft.followError = null;
        draft.followDone = false;
        draft.me = action.data;
        break;
      }
      case FOLLOW_SUCCESS: {
        // console.log("더미유저 체크", dummyUser(action.data));
        draft.followLoading = false;
        draft.followDone = true;
        draft.me = dummyUser(action.data);
        break;
      }
      case FOLLOW_FAILURE: {
        // console.log("logged in");
        draft.followLoading = false;
        draft.followError = action.error;
        draft.me = action.data;
        break;
      }
      case UNFOLLOW_REQUEST: {
        // console.log("reducer logged in");
        draft.unfollowLoading = true;
        draft.unfollowError = null;
        draft.unfollowDone = false;
        draft.me = action.data;
        break;
      }
      case UNFOLLOW_SUCCESS: {
        // console.log("더미유저 체크", dummyUser(action.data));
        draft.unfollowLoading = false;
        draft.unfollowDone = true;
        draft.me = draft.me.Followings.filter((v) => v.id !== action.data);
        break;
      }
      case UNFOLLOW_FAILURE: {
        // console.log("logged in");
        draft.unfollowLoading = false;
        draft.unfollowError = action.error;
        draft.me = action.data;
        break;
      }
      case LOG_IN_REQUEST: {
        // console.log("reducer logged in");
        draft.logInLoading = true;
        draft.logInError = null;
        draft.logInDone = false;
        draft.me = action.data;
        break;
      }
      case LOG_IN_SUCCESS: {
        // console.log("더미유저 체크", dummyUser(action.data));
        draft.logInLoading = false;
        draft.logInDone = true;
        draft.me = dummyUser(action.data);
        break;
      }
      case LOG_IN_FAILURE: {
        // console.log("logged in");
        draft.logInLoading = false;
        draft.logInError = action.error;
        draft.me = action.data;
        break;
      }
      case LOG_OUT_REQUEST: {
        draft.logOutLoading = true;
        draft.logOutError = null;
        draft.logOutDone = false;
        break;
      }
      case LOG_OUT_SUCCESS: {
        draft.logOutLoading = false;
        draft.logOutDone = true;
        draft.me = null;
        break;
      }
      case LOG_OUT_FAILURE: {
        draft.logOutLoading = false;
        draft.logOutError = action.error;
        break;
      }
      case SIGN_UP_REQUEST: {
        draft.signUpLoading = true;
        draft.signUpError = null;
        draft.signUpDone = false;
        break;
      }
      case SIGN_UP_SUCCESS: {
        draft.signUpLoading = false;
        draft.signUpDone = true;
        break;
      }
      case SIGN_UP_FAILURE: {
        draft.signUpLoading = false;
        draft.signUpError = action.error;
        break;
      }
      case CHANGE_NICKNAME_REQUEST: {
        draft.changeNicknameLoading = true;
        draft.changeNicknameError = null;
        draft.changeNicknameDone = false;
        break;
      }
      case CHANGE_NICKNAME_SUCCESS: {
        draft.changeNicknameLoading = false;
        draft.changeNicknameDone = true;
        break;
      }
      case CHANGE_NICKNAME_FAILURE: {
        draft.changeNicknameLoading = false;
        draft.changeNicknameError = action.error;
        break;
      }
      case ADD_POST_TO_ME: {
        draft.me.Posts.unshift({ id: action.data });
        break;
      }
      case REMOVE_POST_OF_ME: {
        draft.me.Post.filter((v) => v.id !== action.data);
        break;
      }
      default:
        break;
    }
  });

export default reducer;
