import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faRightFromBracket} from "@fortawesome/free-solid-svg-icons";
import Text from "../../styled/atom/Text";
import {useNavigate} from "react-router-dom";



const UserLogoutText = () => {
    const navigate = useNavigate();
    const handleUserLogoutTextClick = () => {
        window.localStorage.removeItem("authToken");
        window.localStorage.removeItem("email");
        navigate("/user/auth");
        return;
    }
    
    return (
        <Text>
            <FontAwesomeIcon onClick={handleUserLogoutTextClick} icon={faRightFromBracket}/>
        </Text>
    )
}
export default UserLogoutText;