import Button from "../../styled/Button";
import axios from "axios";
import {useNavigate} from "react-router-dom";

const WorkoutCreateButton = ({workoutAddState}) => {
    const navigate = useNavigate();

    const handleWorkoutCreateButtonClick = async() => {
        try {
            await axios.post("http://localhost:4000/workout/create", workoutAddState);
            navigate(-1);
            return;
        } catch (e) {
            console.log(e);
        }
    }
    return (
        <Button onClick={handleWorkoutCreateButtonClick}>추가</Button>
    )
}
export default WorkoutCreateButton;