import Button from "../../styled/Button";
import axios from "axios";
import {useNavigate} from "react-router-dom";

const WorkoutUpdateButton = ({workoutModifyState}) => {
    const navigate = useNavigate();

    const handleWorkoutUpdateButtonClick = async() => {
        try {
            await axios.put("http://localhost:4000/workout/update", workoutModifyState);
            navigate(-1);
            return;
        } catch (e) {
            console.log(e);
        }
    }
    return (
        <Button onClick={handleWorkoutUpdateButtonClick}>수정</Button>
    )
}
export default WorkoutUpdateButton;