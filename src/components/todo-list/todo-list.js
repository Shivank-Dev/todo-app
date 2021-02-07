import { Paper, Box, TableBody, TableContainer, TableCell, TableRow, Table, Grid } from "@material-ui/core";
import React from "react";
import { DoneIcon, DeleteIcon, IncompleteIcon } from "../$widgets/icons/app-icons";
import "./todo-list.scss";

const TodoList = ({todoItems, removeTask, updateTodo}) => {
    return (
        <div className="todo-list-main">
            <Box mt={3}>
            <Grid container spacing={3} justify="center">
                <Grid item sm={12} md={6} lg={5} className="w-90 px-0">
                    <TableContainer component={Paper}>
                        <Table>
                            <TableBody>
                                {
                                    todoItems && todoItems.map(todoItem => (
                                <TableRow>
                                    <TableCell className={todoItem.isDone ? "line-through" : "remove-line-through"}>{todoItem.name}</TableCell>
                                    <TableCell className="d-flex justify-end align-center">
                                        {
                                        !todoItem.isDone ?
                                        <IncompleteIcon onClick={() => updateTodo(todoItem, true)}/> :
                                        <DoneIcon onClick={() => updateTodo(todoItem, false)} />
                                        }
                                        <DeleteIcon onClick={() => removeTask(todoItem._id)}/>
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