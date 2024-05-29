
import './App.css';

import Header from './MyComponents/Header';
import Todos from './MyComponents/Todos';
import Footer from './MyComponents/Footer';
import React, { useState } from 'react';
import Addtodo  from './MyComponents/Addtodo';

function App() {


  const onDelete = (todo)=> {
    console.log("I am on delete", todo);

    //deleting this way in react doesnt work 
    //let index = todos.indexOf(todo);
   // todos.splice(index, 1);

   setTodos(todos.filter((e)=> {
    return e!==todo;
   }));
  
    }

  const addTodo= (title, desc)=>{
    console.log("I am adding ", title, desc)
    let sno;
    if(todos.length === 0){
      sno = 0;
    }
    else {
        let sno = todos[todos.length-1].sno + 1;
      }
    
   

    const myTodo = {
      sno: sno,
      title: title,
      desc: desc

    }
    
   setTodos([...todos, myTodo]);
    console.log(myTodo);
  
  }

  //let todos
  
  const [todos, setTodos] = useState([]);

  return (


    <>
    <Header title="todod-from-props" searchBar = {true}/>  
    <Addtodo addTodo={addTodo}/>

    <Todos todos={todos} onDelete={onDelete}/>
    <Footer/>

    </>
    

    
  );
}

export default App;

// lets try search bar true of false on header using React searchBar = {true}. {} this is where javascript code goes here true

// we need use state in react when dom needs updating after click on delete
// use state hook 
// first of all we need to import 