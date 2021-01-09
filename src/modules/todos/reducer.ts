import { TodosState, TodosAction } from './types';
import {
  ADD_TODO,
  TOGGLE_TODO,
  REMOVE_TODO,
} from './actions';

// 초기상태를 선언합니다.
const initialState: TodosState = [];

// 리듀서를 작성합니다.
// 리듀서에서는 state 와 함수의 반환값이 일치하도록 작성하세요.
// 액션에서는 우리가 방금 만든 CounterAction 을 타입으로 설정합니다.

function reducer(
  state: TodosState = initialState,
  action: TodosAction,
): TodosState {
  switch (action.type) {
    case ADD_TODO:
      return state.concat({
        id: action.payload.id,
        text: action.payload.text,
        done: false
      })
    case TOGGLE_TODO:
      return state.map(todo => todo.id === action.payload ? { ...todo, done: !todo.done } : todo);
    case REMOVE_TODO:
      return state.filter(todo => todo.id !== action.payload);
    default:
      return state;
  }
}

export default reducer;
