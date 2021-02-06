import React from "react";
import "./todo-form.scss";
import AppTextField from "../$widgets/form-input/AppTextField";
import AppButton from "../$widgets/buttons/AppButton";
import TodoList from "../todo-list/todo-list";

const TodoForm = () => {
    return (
        <div className="todo-form-main">
            <div className="form">
                <AppTextField
                    variant="outlined"
                    size="small"
                />
                <AppButton
                    variant="contained"
                    color="secondary"
                    className="ml-1"
                >Add Task</AppButton>
            </div>
        </div>
    )
}

export default TodoForm