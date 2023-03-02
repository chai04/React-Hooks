import { useReducer } from "react";
import Button from './UI/Button';

const reducer = (state, action) => {
  switch (action.type) {
    case "DEPOSIT":
      return state + action.payload;
    case "WITHDRAW":
      return state - action.payload;
    default:
      return state;
  }
};

export default function ComponentWithUseReducer() {
  const deposit = (amount) => {
    dispatch({
      type: "DEPOSIT",
      payload: amount,
    });
  };

  const withdraw = (amount) => {
    dispatch({
      type: "WITHDRAW",
      payload: amount,
    });
  };
  const [amount, dispatch] = useReducer(reducer, 500);
  return (
    <div>
      <h1>{amount}</h1>
      <Button onClick={() => deposit(500)}> Deposit </Button>
      <Button onClick={() => withdraw(500)}>Withdraw</Button>
    </div>
  );
}
