import React, { useRef } from "react";
import "./todo-form.scss";
import AppTextField from "../$widgets/form-input/AppTextField";
import AppButton from "../$widgets/buttons/AppButton";
import { Paper, Box, Grid } from "@material-ui/core";

const TodoForm = ({ addTodo }) => {
    let textRef = useRef();

    const handleTodoInput = (e) => {
        if (e.key === 'Enter') {
            addTodo(textRef.current.value);
            textRef.current.value = '';
        }
    }

    return (
        <div className="todo-form-main">
            <div className="form">
                <Grid container justify="center">
                    <Grid item md={4} sm={10}>
                        <AppTextField
                            variant="outlined"
                            size="small"
                            inputRef={textRef}
                            onKeyDown={(e) => handleTodoInput(e)}
                        />
                    </Grid>
                    <AppButton
                        variant="contained"
                        color="secondary"
                        className="ml-1"
                        onClick={() => {
                            addTodo(textRef.current.value);
                            textRef.current.value = ''
                        }}
                    >Add Task</AppButton>
                </Grid>
            </div>
        </div>
    )
}

export default TodoForm