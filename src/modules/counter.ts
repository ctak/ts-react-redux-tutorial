/**
 * Ducks 패턴을 사용.
 * 즉, 액션타입, 액션생성함수, 리듀서를 모두 한 파일에 작성하겠습니다.
 *
 */

// 액션 타입을 선언합니다
// 뒤에 as const 를 붙여줌으로써 나중에 액션 개체를 만들때 acion.type 의 값을 추론하는 과정에서
// action.type 이 string 으로 추론되지 않고 'counter/INCREASE' 와 같이 실제 문자열 값으로 추론 되도록 해줍니다.
const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';
const INCREASE_BY = 'counter/INCREASE_BY';

// 액션 생성함수를 선언합니다.
export const increase = () => (<const>{
  type: INCREASE
});

export const decrease = () => (<const>{
  type: DECREASE
});

export const increaseBy = (diff: number) => (<const>{
  type: INCREASE_BY,
  // 액션에 부가적으로 필요한 값을 payload 라는 이름으로 통일합니다.
  // 이는 FSA (https://github.com/redux-utilities/flux-standard-action) 라는 규칙인데
  // 이 규칙을 적용하면 액션들이 모두 비슷한 구조로 이루어져있게 되어 추후 다룰 때도 편하고
  // 읽기 쉽고, 액션 구조를 일반화함으로써 액션에 관련된 라이브러리를 사용할 수 있게 해줍니다.
  payload: diff
});

// 모든 액션 객체들에 대한 타입을 준비해 줍니다.
// ReturnType<typeof ____> 는 특정 함수의 반환값을 추론해 줍니다.
// 상단부에서 액션타입을 선언할 때 as const 를 하지 않으면 이 부분이 제대로 작동하지 않습니다.
// 이것은 잘못된 것이고 CounterAction 이 switch 문에서 case ____: 걸릴 때, | (또는) 으로 명확하다면 각각의 action 에
// 없는 값. 예를 들면 action.payload 가 없다 해도 해당 case 에서 정확하게 알 수 있기 때문에... 결론은 벨로퍼트의 말처럼 상단에
// const ACTION_TYPE 를 [as const] 로 하지 않고, 액션생성함수의 Return 값을 <const> 로 해줘야 한다.
// TypeScript 2.8 버전에 추가된 ReturnType 제네릭 타입, TypeScript 3.4 버전에 추가된 const assertion 기능을 활용하면,
type CounterAction =
  | ReturnType<typeof increase>
  | ReturnType<typeof decrease>
  | ReturnType<typeof increaseBy>;

// 이 리덕스 모듈에서 관리 할 상태의 타입을 선언합니다.
type CounterState = {
  count: number;
};

// 초기상태를 선언합니다.
const initialState: CounterState = {
  count: 0
};

// 리듀서를 작성합니다.
// 리듀서에서는 state 와 함수의 반환값이 일치하도록 작성하세요.
// 액션에서는 우리가 방금 만든 CounterAction 을 타입으로 설정합니다.

function counter(
  state: CounterState = initialState,
  action: CounterAction,
): CounterState {
  switch (action.type) {
    case INCREASE:
      return { count: state.count + 1 };
    case DECREASE:
      return { count: state.count - 1 };
    case INCREASE_BY:
      return { count: state.count + action.payload };
    default:
      return state;
  }
}

export default counter;

// const circle = {
//   type: 'circle' as const,
//   radius: 10
// };

// const square = {
//   type: 'square' as const,
//   width: 10,
//   height: 20
// };

// type Shape = typeof circle | typeof square;

// function draw(shape: Shape) {
//   switch (shape.type) {
//     case 'circle':
//         console.log(shape.radius);
//         break;
//     case 'square':
//       console.log(shape.width);
//       break;
//   }
// }
