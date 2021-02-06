import React from "react";
import TodoForm from "../todo-form/todo-form";
import TodoList from "../todo-list/todo-list";

const TodoApp = () => {
    return (
    <div className="todo-app-main">
        <TodoForm />
        <TodoList />
    </div>
    )
}

export default TodoApp