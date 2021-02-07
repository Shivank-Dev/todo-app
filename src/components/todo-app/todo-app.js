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
    }
    const removeTask = (id) => {
        const updatedTodoList = todoItems.filter(todo => todo.id !== id);
        setTodoItems(updatedTodoList);
    }
    const updateTodoStatus = (id, status) => {
        todoItems.forEach(todo => {
            if (todo.id === id) {
                todo.todoStatus = status;
            }
        })

        setTodoItems([...todoItems]);
    }
    return (
        <div className="todo-app-main">
            <TodoForm addTodo={addTodo} />
            <TodoList todoItems={todoItems} removeTask={removeTask} updateTodoStatus={updateTodoStatus} />
        </div>
    )
}

export default TodoApp