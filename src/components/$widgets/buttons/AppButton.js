import { Button, withStyles } from "@material-ui/core";
import React from "react";

const AppButtonWithStyles = withStyles({
    root: {

    }
})((props) => <Button {...props}/>)

const AppButton = (props) => (
    <AppButtonWithStyles 
    {...props}
    />
)

export default AppButton;