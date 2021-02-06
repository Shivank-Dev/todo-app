import React, { useState } from "react";
import TodoForm from "../todo-form/todo-form";
import TodoList from "../todo-list/todo-list";

window.id = 0;
const TodoApp = () => {
    const [todoItems, setTodoItems] = useState([]);
    const [todoStatus, setTodoStatus] = useState("incomplete");
    const addTodo = (val) => {
        const todo = { text: val, id: window.id++, todoStatus }
        setTodoItems([...todoItems, todo]);
        console.log("todo items ", todoItems);
    }
    const removeTask = (id) => {
        const updatedTodoList = todoItems.filter(todo => todo.id !== id);
        setTodoItems(updatedTodoList);
    }
    const completeTask = (id) => {
        console.log("todoItems ", todoItems);
        todoItems.forEach(todo => {
            if (todo.id === id) {
                todo.todoStatus = "completed";
            }
        })

        console.log("updatedTodoList ", todoItems);
        setTodoItems([...todoItems]);
    }
    return (
        <div className="todo-app-main">
            <TodoForm addTodo={addTodo} />
            <TodoList todoItems={todoItems} removeTask={removeTask} completeTask={completeTask} />
        </div>
    )
}

export default TodoApp