import React, { useState } from "react";
import TodoForm from "../todo-form/todo-form";
import TodoList from "../todo-list/todo-list";
import { toast } from "react-toastify";
import NoTask from "../no-task/no-task";

window.id = 0;
const TodoApp = () => {
    const [todoItems, setTodoItems] = useState([]);
    const [todoStatus, setTodoStatus] = useState("incomplete");
    const addTodo = (val) => {
        console.log("val ", val);
        if (!val) {
            toast.error("Task can't be empty!");
            return;
        }
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
            {
                todoItems.length > 0 ?
                    <TodoList todoItems={todoItems} removeTask={removeTask} updateTodoStatus={updateTodoStatus} />
                    :
                    <NoTask/>
            }
        </div>
    )
}

export default TodoApp