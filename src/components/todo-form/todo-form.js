import React,{useState, useRef} from "react";
import "./todo-form.scss";
import AppTextField from "../$widgets/form-input/AppTextField";
import AppButton from "../$widgets/buttons/AppButton";
import TodoList from "../todo-list/todo-list";

const TodoForm = ({addTodo}) => {
    let textRef = useRef();
    return (
        <div className="todo-form-main">
            <div className="form">
                <AppTextField
                    variant="outlined"
                    size="small"
                    inputRef={textRef}
                />
                <AppButton
                    variant="contained"
                    color="secondary"
                    className="ml-1"
                    onClick={() => {addTodo(textRef.current.value);
                        textRef.current.value = ''
                    }}
                >Add Task</AppButton>
            </div>
        </div>
    )
}

export default TodoForm