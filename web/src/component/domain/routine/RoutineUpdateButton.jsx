import Button from "../../styled/atom/Button";
import {useNavigate} from "react-router-dom";
import axios from "axios";

const RoutineUpdateButton = ({routineModifyState}) => {
    const navigate = useNavigate();

    const handleRoutineUpdateButtonClick = async() => {
        try {
            await axios.put("http://localhost:4000/routine/update", routineModifyState);
            navigate(-1);
            return;
        } catch (e) {
            console.log(e);
        }
    }
    return (
        <Button onClick={handleRoutineUpdateButtonClick}>수정</Button>
    )
}
export default RoutineUpdateButton;