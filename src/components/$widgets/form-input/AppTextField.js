import { TextField, withStyles } from "@material-ui/core";
import React from "react";

const TextFieldWithStyles = withStyles({
    root: {
        width: "100%"
    },
})((props) => <TextField {...props} />);

function AppTextField(props) {
    const { onChange } = props;
    return <TextFieldWithStyles
        {...props}
        onChange={onChange}
    />
}
export default AppTextField;