import React, {useState} from "react";
import TodoForm from "../todo-form/todo-form";
import TodoList from "../todo-list/todo-list";

window.id = 0;
const TodoApp = () => {
    const [todoItems, setTodoItems] = useState([]);
    const addTodo = (val) => {
       const todo = {text: val, id: window.id++}
       setTodoItems([...todoItems, todo]);     
       console.log("todo items ", todoItems);
    }
    const removeTask = (id) => {
        const updatedTodoList =  todoItems.filter(todo => todo.id !== id);
        setTodoItems(updatedTodoList);
    }
    return (
    <div className="todo-app-main">
        <TodoForm addTodo={addTodo}/>
        <TodoList todoItems={todoItems} removeTask={removeTask}/>
    </div>
    )
}

export default TodoApp