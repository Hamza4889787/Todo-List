// src/TodoList.js
import React, { useState } from 'react';

const TodoList = () => {

    const [inputValue,setInputValue] = useState("");
    const [todos, setTodos] = useState(["hamza","Ali"]);
    const [editIndex, setEditIndex] = useState(-1);

    const handleInput = (e)=>{
        setInputValue(e.target.value)
    }
    const handleAddTodo = ()=>{
  
      if(editIndex === -1)
        {
            setTodos([...todos, inputValue]);
        }else{
            const newTodos = [...todos];
           newTodos[editIndex] = inputValue;
           setTodos(newTodos)
           setEditIndex(-1);
        }
    }
    const handleDeleteTodo=(index)=>{
        const newTodos = [...todos];
       newTodos.splice(index,1);
       setTodos(newTodos);
       setEditIndex(-1);
    }
    const handleEditTodo = (val,index)=>{
        setInputValue(val);
        setEditIndex(index);

    }

return(
    <div id='todoList'>
        <div className='container'> 
    <input type='text' value={inputValue} placeholder='Enter Text' onChange={handleInput}/>
    <button onClick={handleAddTodo}>{editIndex === -1?"Add Todo":"Update Todo"}</button>
    <ul>
        {
            todos.map((val,index)=>{
              return (
              <li key={index}>
                <div>{val}</div>
                <div className='useable-buttons'>
              <button onClick={() => handleDeleteTodo(index)}><i class="fa fa-trash"></i></button>
              <button onClick={()=> handleEditTodo(val,index)}>Edit</button>
              </div>
                </li>
            )
            })
        }
    </ul>
    </div>
    </div>
)
};

export default TodoList;
