import LinkText from "../styled/atom/LinkText";
import {useNavigate} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faRotateLeft} from "@fortawesome/free-solid-svg-icons";

const MoveBackLinkText = () => {
    const navigate= useNavigate();
    const handleMoveBackLinkText = () => {
        navigate(-1);
        return;
    }

    return (
        <LinkText decoration={"none"} color={"#000"} onClick={handleMoveBackLinkText}>
            <FontAwesomeIcon icon={faRotateLeft}/>
        </LinkText>
  )
}
export default MoveBackLinkText;