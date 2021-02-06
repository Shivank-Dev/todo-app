import React from "react";
import TextField from '@material-ui/core/TextField'
import "./todo-form.scss";
import Button from '@material-ui/core/Button'
import AppTextField from "../$widgets/form-input/AppTextField";
import AppButton from "../$widgets/buttons/AppButton";

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