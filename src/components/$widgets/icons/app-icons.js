import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';

const DoneIcon = (props) => (
    <CheckCircleIcon style={{
        width: "30px",
        height: "30px",
        cursor: "pointer",
        color: "#1db56d"
    }}
    {...props}
    />
)

const DeleteIcon = (props) => (
    <HighlightOffIcon style={{
        width: "30px",
        height: "30px",
        cursor: "pointer",
        color: "#e53737"
    }}
    {...props}
    />
)

const IncompleteIcon = (props) => (
    <CheckCircleOutlineIcon style={{
        width: "30px",
        height: "30px",
        cursor: "pointer",
        color: "#1db56d"
    }}
    {...props}
/>
)

export {
    DoneIcon,
    DeleteIcon,
    IncompleteIcon
}