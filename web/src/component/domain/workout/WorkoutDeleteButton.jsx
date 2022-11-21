import Button from "../../styled/atom/Button";
import axios from "axios";
import {useNavigate} from "react-router-dom";

const WorkoutDeleteButton = ({workoutModifyState}) => {
    const navigate = useNavigate();

    const handleWorkoutDeleteButtonClick = async() => {
        try {
            await axios.delete(`http://localhost:4000/workout/delete/${workoutModifyState.id}`);
            navigate(-1);
            return;
        } catch (e) {
            console.log(e);
        }
    }
    return (
        <Button onClick={handleWorkoutDeleteButtonClick}>삭제</Button>
    )
}
export default WorkoutDeleteButton;