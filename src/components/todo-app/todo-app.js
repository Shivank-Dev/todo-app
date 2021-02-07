import React, { useState, useEffect } from "react";
import TodoForm from "../todo-form/todo-form";
import TodoList from "../todo-list/todo-list";
import { toast } from "react-toastify";
import NoTask from "../no-task/no-task";
import { TodoService } from "../../service/api/TodoService";

const TodoApp = () => {

    const [todoItems, setTodoItems] = useState([]);

    useEffect(() => {
        getAllTodos();
    }, []);

    const addTodo = async (val) => {
        console.log("val ", val);
        if (!val) {
            toast.error("Task can't be empty!");
            return;
        }
        const todoReq = { name: val };
        const todo = await TodoService.addTodo(todoReq);
        if (!todo) {
            return;
        }
        toast.info("Task Added Successfully!");
        setTodoItems([...todoItems, todo]);
    }

    const getAllTodos = async () => {
        const todos = await TodoService.getAllTodos();
        if (!todos) {
            return;
        }
        setTodoItems([...todos]);
    }

    const removeTask = async (id) => {
        const updatedTodoList = todoItems.filter(todo => todo._id !== id);
        const todo = await TodoService.deleteTodo(id);
        if (!todo) {
            return;
        }
        toast.info("Task Deleted Successfully!");
        setTodoItems([...updatedTodoList]);
    }

    const editTodo = async (event, id, setEditing) => {
        todoItems.forEach(todo => { 
            if (todo._id === id) {
                todo.name = event.target.value;
            }
        })
        const todoReq = {
            name: event.target.value
        }
        const todo = await TodoService.updateTodo(id, todoReq);
        if (!todo) {
            return;
        }
        toast.info("Task Updated Successfully!");
        setTodoItems([...todoItems]);
        setEditing(null);
    }
    
    return (
        <div className="todo-app-main">
            <h1 className="title text-center mt-5">Todo Application</h1>
            <TodoForm addTodo={addTodo} />
            {
                todoItems ?
                    <TodoList todoItems={todoItems} removeTask={removeTask} editTodo={editTodo}/>
                    :
                    <NoTask />
            }
        </div>
    )
}

export default TodoApp