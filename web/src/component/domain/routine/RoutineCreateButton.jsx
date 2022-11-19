import Button from "../../styled/Button";
import axios from "axios";
import {useNavigate} from "react-router-dom";

const RoutineCreateButton = ({routineAddState}) => {
    const navigate = useNavigate();

    const handleRoutineCreateButtonClick = async() => {
        try {
            await axios.post("http://localhost:4000/routine/create", routineAddState);
            navigate(-1);
            return;
        } catch (e) {
            console.log(e);
        }
    }
    return (
        <Button onClick={handleRoutineCreateButtonClick}>추가</Button>
    )
}
export default RoutineCreateButton;