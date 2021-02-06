import { Paper, Box, TableBody, TableContainer, TableCell, TableRow, Table, Grid } from "@material-ui/core";
import React from "react";
import { DoneIcon, DeleteIcon } from "../$widgets/icons/app-icons";
import "./todo-list.scss";

const TodoList = (props) => {
    return (
        <div className="todo-list-main">
            <Box mt={3}>
            <Grid container spacing={1} justify="center">
                <Grid item md={6}>
                    <TableContainer component={Paper}>
                        <Table>
                            <TableBody>
                                <TableRow>
                                    <TableCell>hello this is demo task it could be more long</TableCell>
                                    <TableCell className="d-flex justify-center align-center">
                                        <DoneIcon />
                                        <DeleteIcon/>
                                    </TableCell>
                                </TableRow>
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