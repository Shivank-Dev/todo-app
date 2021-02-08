import React from "react";
import { Paper, Box, Grid, Card, CardContent, Typography, makeStyles } from "@material-ui/core";

const NoTask = () => (
    <Box mt={3}>
        <Grid container spacing={1} justify="center">
            <Grid item xs={10} sm={8} md={7} lg={5}>
                <Card>
                    <CardContent>
                        <Typography component="p" className="text-center">No task Added!</Typography>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    </Box>
)

export default NoTask;