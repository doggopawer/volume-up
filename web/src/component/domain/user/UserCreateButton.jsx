import Button from "../../styled/Button";
import axios from "axios";
import {useNavigate} from "react-router-dom";

const UserCreateButton = ({userCreateState}) => {
    const navigate = useNavigate();

    const handleUserCreateButtonClick = async() => {
        try {
            await axios.post("http://localhost:4000/user/create", userCreateState);
            navigate(`/user/auth`);
            return;
        } catch (e) {
            console.log(e);
        }

    }

    return (
        <Button onClick={handleUserCreateButtonClick}>회원가입</Button>
    )
}
export default UserCreateButton;