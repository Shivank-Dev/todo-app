import React, {useState} from "react";
import TodoForm from "../todo-form/todo-form";
import TodoList from "../todo-list/todo-list";

const TodoApp = () => {
    const [todoItems, setTodoItems] = useState([]);
    const addTodo = (todo) => {
       setTodoItems([...todoItems, todo]);     
       console.log("todo items ", todoItems);
    }
    return (
    <div className="todo-app-main">
        <TodoForm addTodo={addTodo}/>
        {
        todoItems &&
        <TodoList todoItems={todoItems}/>
        }
    </div>
    )
}

export default TodoApp