import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import EditIcon from '@material-ui/icons/Edit';
import CloseIcon from '@material-ui/icons/Close';

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

const AppEditIcon = (props) => (
  <EditIcon style={{
    width: "30px",
    height: "30px",
    cursor: "pointer",
    color: "#1d84b5"
  }}
  {...props}
  />
)
const AppCloseIcon = (props) => (
  <CloseIcon style={{
    width: "20px",
    height: "40px",
    display: "flex",
    alignItems: "center",
    marginLeft: "20px",
    cursor: "pointer",
    color: "#aaa"
  }}
  {...props}
  />
)

export {
    DeleteIcon,
    AppEditIcon,
    AppCloseIcon
}