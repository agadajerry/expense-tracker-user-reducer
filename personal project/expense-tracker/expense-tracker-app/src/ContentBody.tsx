import React from 'react'
import { ACTIONS } from './App';
function ContentBody(props:any) {

  return (
    <>

<div className="content">
            <div className="main-content">
              <input type="submit" value="x" onClick={() => props.dispatch({type:ACTIONS.DELETE_EXPENSE,payload:{
                  id:props.newData.id
              }})} />
              <p>{props.newData.description}</p>
            </div>
            <div className="amount-content">
              <p>{props.newData.price}</p>
              <p>{props.newData.nowdate}</p>
            </div>
          </div>
    </>
  )
}

export default ContentBody