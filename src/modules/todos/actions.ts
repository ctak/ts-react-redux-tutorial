// 액션 타입을 선언합니다
// 뒤에 as const 를 붙여줌으로써 나중에 액션 개체를 만들때 acion.type 의 값을 추론하는 과정에서
// action.type 이 string 으로 추론되지 않고 'counter/INCREASE' 와 같이 실제 문자열 값으로 추론 되도록 해줍니다.
export const ADD_TODO = 'todos/ADD_TODO';
export const TOGGLE_TODO = 'todos/TOGGLE_TODO';
export const REMOVE_TODO = 'todos/REMOVE_TODO';

let nextId = 1;  // 새로운 항목을 추가할 때 사용할 고유 ID 값

// 액션 생성함수를 선언합니다.
export const addTodo = (text: string) => (<const>{
  type: ADD_TODO,
  payload: {
    id: nextId++,
    text
  }
});

export const toggleTodo = (id: number) => (<const>{
  type: TOGGLE_TODO,
  payload: id
});

export const removeTodo = (id: number) => (<const>{
  type: REMOVE_TODO,
  payload: id
});
