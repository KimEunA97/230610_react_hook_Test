import { useReducer } from "react";

function reducer(state, action) {
  switch (action.type) {
    case 'INCREMENT':
      return { value: state.value + 1 }
    case 'DECREMENT':
      return { value: state.value - 1 }
    default:
      return state;
  }
}

const UseReducerCounter = () => {

  const [state, dispatch] = useReducer(reducer, { value: 0 })

  return (
    <div>
      <p>
        현재 카운터 값은 <b>{state.value}</b>입니다.
        <button onClick={() => dispatch({ type: 'INCREMENT' })}>+1</button>
        <button onClick={() => dispatch({ type: 'DECREMENT' })}>-1</button>
      </p>
    </div>
  )
}

export default UseReducerCounter;

//useReducer를 사용했을 때 가장 큰 장점은 컴포넌트 업데이트 로직을 컴포넌트 바깥으로 뺄 수 있다는 것.