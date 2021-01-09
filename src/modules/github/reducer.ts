import { GithubState, GithubAction } from './types';
import {
  GET_USER_PROFILE,
  GET_USER_PROFILE_SUCCESS,
  GET_USER_PROFILE_ERROR
} from './actions';

// 초기상태를 선언합니다.
const initialState: GithubState = {
  userProfile: {
    loading: false,
    error: null,
    data: null
  }
};

// 리듀서를 작성합니다.
// 리듀서에서는 state 와 함수의 반환값이 일치하도록 작성하세요.
// 액션에서는 우리가 방금 만든 CounterAction 을 타입으로 설정합니다.

function reducer(
  state: GithubState = initialState,
  action: GithubAction,
): GithubState {
  switch (action.type) {
    case GET_USER_PROFILE:
      return {
        ...state,
        userProfile: {
          loading: true,
          error: null,
          data: null
        }
      };
    case GET_USER_PROFILE_SUCCESS:
      return {
        ...state,
        userProfile: {
          loading: false,
          error: null,
          data: action.payload,
        }
      };
    case GET_USER_PROFILE_ERROR:
      return {
        ...state,
        userProfile: {
          loading: false,
          error: action.payload,
          data: null,
        }
      };
    default:
      return state;
  }
}

export default reducer;
