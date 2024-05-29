// rafc


import React from 'react'
import TodoItem from "./TodoItem";

const Todos = (props) => {

  let Designfortods = {
 
   'min-height':"500px",
    
  }
  
  return (
    <div className="container" style={Designfortods}>
      <h3 className='my-3'>Todos List </h3>
      {/*props.Todos*/}


 
     {props.todos.map((todo)=>{
      return <TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete}/>
     })}


    </div>
  )
}

export default Todos



/* 
   <TodoItem todo={props.todos[0]}/>
--- */