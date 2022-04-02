import React, { useReducer } from "react";
import "./counter.css";

function reducer(state: any, action: any) {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };

    case "DECREMENT":
      return { count: state.count - 1 };
    default:
        return state.count;
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, { count: 0});

  const increment = () => {
    dispatch({ type: "INCREMENT" });
  };
  const decrement = () => {
    dispatch({ type: "DECREMENT" });
  };

 

  return (
    <div className="container">
      <button onClick={() => increment()}>+</button>
      <p>{state?.count}</p>
      <button onClick={() => decrement()}>-</button>
    </div>

  );
}

export default Counter;
