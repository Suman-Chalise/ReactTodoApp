import React from 'react'

const TodoItem = ({todo, onDelete}) => {
  return (
    <div>
        <h4>{todo.title}</h4>
        <p>{todo.desc}</p>
        <button className="btn btn-danger btn-sm" onClick= {( )=> {onDelete(todo)}}>Delete</button>
        <hr/>
    </div>
  
  )
}

export default TodoItem


// notes 

//  <button className="btn btn-danger btn-sm" onClick={onDelete(todo)}>Delete</button>

// we need arrow function to pass function 
// within arrow function we only passing function not calling function 

//<button className="btn btn-danger btn-sm" onClick= {( )=> {onDelete(todo)}}>Delete</button>
