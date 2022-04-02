import React, { useReducer, useState } from "react";
import "../counter.css";

const ACTIONS = {
  ADD_TODOS: "add_todos",
  EDIT_TODOS: "edit_todos",
  DELETE_TODO :"delete_todo"
};


const reducer = (todos: any, action: any) => {
  switch (action.type) {
    case ACTIONS.ADD_TODOS:
      return [...todos, newTodos(action.payload.todoName)];
    case ACTIONS.EDIT_TODOS:
        return todos.map((val:any)=>val.id === action.payload.id ? {...val, complete:!val.complete}:val)

        //delete todo
        case ACTIONS.DELETE_TODO:
            return todos.filter((val:any)=>val.id!==action.payload.id)
  }
};

// nppx json-server --watch data/db.json --port 80000
const newTodos = (todoName: string) => {

  return { id: Date.now(), name: todoName, complete: false };
};

function Todo() {
  const [todos, dispatch] = useReducer(reducer, []);
  const [todoName, setTodoName] = useState("");

  const submitData = (e: any) => {

    if(todoName === "") return alert("Empty field");
    e.preventDefault();
    
    dispatch({ type: ACTIONS.ADD_TODOS, payload: { todoName: todoName } });
    setTodoName("");
  };
 function editTodo(id:any){
     dispatch({type: ACTIONS.EDIT_TODOS, payload: { id: id } });
   
 }
 function deleteTodo(id:any){
     dispatch({type: ACTIONS.DELETE_TODO, payload:{id:id}})
 }

  return (
    <>
      <div className="container">
        <form>
          <input type="text" value={todoName} placeholder="Enter your todo" onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTodoName(e.target.value)} />
          <input type="submit" value="Send" onClick={submitData} />
        </form>
        {todos?.map((val:any, index: number) => (
          <div className="content" key = {index} style = {{borderLeft: val.complete ? "green solid 4px":""}}>
            <div className="content-body">
              <span>{val.name}</span>
              <span>{val.id}</span>
            </div>
            <span>
              <input type="submit" value="Edit" onClick = {()=>editTodo(val.id)} />
              <input type="submit" value="Delete" onClick = {()=>deleteTodo(val.id)} />
            </span>
          </div>
        ))}
        {JSON.stringify(todos,null,3)}
      </div>
    </>
  );
}

export default Todo;
