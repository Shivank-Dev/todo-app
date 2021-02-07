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

    const updateTodo = async ({ _id, name }, status) => {
        todoItems.forEach(todo => {
            if (todo._id === _id) {
                todo.isDone = status;
            }
        });
        const todoReq = {
            name,
            isDone: status
        }
        const todo = await TodoService.updateTodo(_id, todoReq);
        if (!todo) {
            return;
        }
        toast.info("Task Status Updated Successfully!");
        setTodoItems([...todoItems]);
    }
    
    return (
        <div className="todo-app-main">
            <h1 className="title text-center">Todo Application</h1>
            <TodoForm addTodo={addTodo} />
            {
                todoItems ?
                    <TodoList todoItems={todoItems} removeTask={removeTask} updateTodo={updateTodo} />
                    :
                    <NoTask />
            }
        </div>
    )
}

export default TodoApp