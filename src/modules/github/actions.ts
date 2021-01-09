import { GithubProfile } from '../../api/github';
import { AxiosError } from 'axios';

// 액션 타입을 선언합니다
// 뒤에 as const 를 붙여줌으로써 나중에 액션 개체를 만들때 acion.type 의 값을 추론하는 과정에서
// action.type 이 string 으로 추론되지 않고 'counter/INCREASE' 와 같이 실제 문자열 값으로 추론 되도록 해줍니다.
export const GET_USER_PROFILE = 'github/GET_USER_PROFILE';
export const GET_USER_PROFILE_SUCCESS = 'github/GET_USER_PROFILE_SUCCESS';
export const GET_USER_PROFILE_ERROR = 'github/GET_USER_PROFILE_ERROR';

let nextId = 1;  // 새로운 항목을 추가할 때 사용할 고유 ID 값

// 액션 생성함수를 선언합니다.
export const getUserProfile = () => (<const>{
  type: GET_USER_PROFILE
});
export const getUserProfileSuccess = (githubProfile: GithubProfile) => (<const>{
  type: GET_USER_PROFILE_SUCCESS,
  payload: githubProfile,
});
export const getUserProfileError = (axiosError: AxiosError) => (<const>{
  type: GET_USER_PROFILE_ERROR,
  payload: axiosError,
});
