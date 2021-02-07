import { Paper, Box, TableBody, TableContainer, TableCell, TableRow, Table, Grid } from "@material-ui/core";
import React, { useRef, useState } from "react";
import AppTextField from "../$widgets/form-input/AppTextField";
import { DeleteIcon, AppEditIcon, AppCloseIcon } from "../$widgets/icons/app-icons";
import "./todo-list.scss";

const TodoList = ({ todoItems, removeTask, editTodo }) => {

    const [editing, setEditing] = useState(null);

    return (
        <div className="todo-list-main">
            <Box mt={8}>
                <Grid container spacing={3} justify="center">
                    <Grid item xs={10} sm={8} md={7} lg={5} className="">
                        <TableContainer component={Paper}>
                            <Table>
                                <TableBody>
                                    {
                                        todoItems && todoItems.map(todoItem => (
                                            <TableRow>
                                                <TableCell className= "py-0">
                                                    {
                                                        editing === todoItem._id ?
                                                            <div className="d-flex">    
                                                            <AppTextField
                                                                variant="outlined"
                                                                name={`editing_${todoItem._id}`}
                                                                defaultValue={todoItem.name}
                                                                size="small"
                                                                className="py-0"
                                                                onKeyDown={(e) => {
                                                                    if (e.key === 'Enter') e.preventDefault();
                                                                }}
                                                                onKeyUp= {(e) => {
                                                                    if (e.key === 'Enter') editTodo(e, todoItem._id, setEditing)
                                                                }}
                                                                onBlur= {(e)=> editTodo(e, todoItem._id, setEditing)}
                                                            />
                                                            <AppCloseIcon onClick={() => setEditing(null)}/>
                                                            </div>
                                                            :
                                                            <span>{todoItem.name}</span>
                                                    }
                                                </TableCell>
                                                <TableCell className="d-flex justify-end align-center">
                                                    <AppEditIcon
                                                        onClick={() => {
                                                            setEditing(todoItem._id);
                                                            document.querySelector(`[name="editing_${todoItem._id}"]`)
                                                        }}
                                                    />
                                                    <DeleteIcon onClick={() => removeTask(todoItem._id)} />
                                                </TableCell>
                                            </TableRow>
                                        ))
                                    }
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Grid>
                </Grid>
            </Box>
        </div>
    )
}

export default TodoList;