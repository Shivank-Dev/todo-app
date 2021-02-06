import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';

const DoneIcon = (props) => (
    <AssignmentTurnedInIcon style={{
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

export {
    DoneIcon,
    DeleteIcon
}