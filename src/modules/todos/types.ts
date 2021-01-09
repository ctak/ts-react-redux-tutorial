import * as actions from './actions';

const { addTodo, toggleTodo, removeTodo } = actions;

// 모든 액션 객체들에 대한 타입을 준비해 줍니다.
// ReturnType<typeof ____> 는 특정 함수의 반환값을 추론해 줍니다.
// 상단부에서 액션타입을 선언할 때 as const 를 하지 않으면 이 부분이 제대로 작동하지 않습니다.
// 이것은 잘못된 것이고 CounterAction 이 switch 문에서 case ____: 걸릴 때, | (또는) 으로 명확하다면 각각의 action 에
// 없는 값. 예를 들면 action.payload 가 없다 해도 해당 case 에서 정확하게 알 수 있기 때문에... 결론은 벨로퍼트의 말처럼 상단에
// const ACTION_TYPE 를 [as const] 로 하지 않고, 액션생성함수의 Return 값을 <const> 로 해줘야 한다.
// TypeScript 2.8 버전에 추가된 ReturnType 제네릭 타입, TypeScript 3.4 버전에 추가된 const assertion 기능을 활용하면,
export type TodosAction =
  | ReturnType<typeof addTodo>
  | ReturnType<typeof toggleTodo>
  | ReturnType<typeof removeTodo>;

// 이 리덕스 모듈에서 관리 할 상태의 타입을 선언합니다.
export type Todo = {
  id: number;
  text: string;
  done: boolean;
}

export type TodosState = Todo[];
