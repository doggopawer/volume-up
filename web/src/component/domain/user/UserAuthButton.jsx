import Button from "../../styled/atom/Button";
import axios from "axios";
import {useNavigate} from "react-router-dom";

const UserAuthButton = ({userAuthState}) => {
    const navigate = useNavigate();

    const handleUserAuthButtonClick = async() => {
        const result = await axios.post("http://localhost:4000/user/auth", userAuthState);
        window.localStorage.authToken = result.data.authToken;
        window.localStorage.email = result.data.email;
        navigate(`/routine/list`);
        return;
    }

    return (
        <Button onClick={handleUserAuthButtonClick}>로그인</Button>
    )
}
export default UserAuthButton;