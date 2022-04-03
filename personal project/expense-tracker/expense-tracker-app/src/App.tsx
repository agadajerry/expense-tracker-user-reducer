import React, { useEffect, useReducer, useState } from "react";
import "./index.css";
import ContentBody from "./ContentBody";

//CONSTANTS

export const ACTIONS = {
  ADD_EXPENSE: "ADD_EXPENSE",
  DELETE_EXPENSE: "DELETE_EXPENSE",
};
//reducer function

function reducer(data: any, action: any) {
  switch (action.type) {
    case ACTIONS.ADD_EXPENSE:
      return [...data, newExpense(action.payload.price, action.payload.description, action.payload.nowdate, data.length)];

    case ACTIONS.DELETE_EXPENSE:
      return data?.filter((val: any) => val.id !== action.payload.id);
  }
}
/// add new expense

function newExpense(price: string, nowdate: Date, description: string, length: number) {
  return { price: price, nowdate: nowdate, description: description, id: length + 1 };
}
function App() {
  //useState

  const [price, setPrice] = useState<string>("");
  const [nowdate, setDate] = useState<Date | any>("");
  const [description, setDiscription] = useState<string>("");
  const [totalPrice, setTotalPrice] = useState<number>(0);

  const [data, dispatch] = useReducer(reducer, []);


  function handleSubmit(e: any) {
    e.preventDefault();

    if(!price || !nowdate || !description) return alert("Empty fields")
    dispatch({ type: ACTIONS.ADD_EXPENSE, payload: { description: description, price: price, nowdate: nowdate, totalPrice: totalPrice } });
    setDate("");
    setDiscription("");
    setPrice("");
  }

  //set total price

  useEffect(() => {
    let temp: number = 0;

    for (let i = 0; i < data.length; i++) {
      temp += parseInt(data[i].price);
    }
    setTotalPrice(temp);
  }, [data]);

  return (
    <React.Fragment>
      <div className="container">
        <div className="header">
          <h3>Income Tracker</h3>
          <span>#{totalPrice}</span>
        </div>

        <form>
          <input type="text" value={description} placeholder="Income description" onChange={(e: React.ChangeEvent<HTMLInputElement>) => setDiscription(e.target.value)} />
          <input type="number" value={price} placeholder="price" onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPrice(e.target.value)} />
          <input type="date" value={nowdate} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setDate(e.target.value)} />
          <input type="submit" value="Add Income" onClick={handleSubmit} />
        </form>
        {data?.map((val: any, idx: number) => (
          <ContentBody newData = {val} key = {idx} dispatch = {dispatch}/>
        ))}
      </div>
    </React.Fragment>
  );
}
export default App;
