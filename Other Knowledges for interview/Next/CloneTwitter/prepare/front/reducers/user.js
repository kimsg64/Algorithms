export const initialState = {
  isLoggedIn: false,
  me: null,
  signUpData: {},
  loginData: {},
};

// action creater: 원래 액션은 객체인데 객체로 만들면 동적으로 값을 바꾸기 힘들어서 객체를 뱉는 함수를 만든 것
export const loginAction = (data) => {
  return { type: "LOG_IN", data };
};
export const logoutAction = () => {
  return { type: "LOG_OUT" };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOG_IN": {
      console.log("logged in");
      return {
        ...state,
        isLoggedIn: true,
        me: action.data,
      };
    }
    case "LOG_OUT": {
      return {
        ...state,
        isLoggedIn: false,
        me: null,
      };
    }
    default: {
      return { ...state };
    }
  }
};

export default reducer;
