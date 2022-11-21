import Button from "../../styled/atom/Button";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import produce from "immer";

const WorkoutSuccessButton = ({workoutProgressState, setWorkoutProgressState}) => {
    const navigate = useNavigate();


    const handleWorkoutSuccessButtonClick = async() => {
        const {rep} = workoutProgressState;

        try {
            if(rep === 5) {
                const nextWorkoutProgressState = produce(workoutProgressState, draftWorkoutProgressState => {
                    draftWorkoutProgressState.weight = draftWorkoutProgressState.weight+5;
                });
                await axios.put("http://localhost:4000/workout/update", nextWorkoutProgressState);
                navigate(-1);
                setWorkoutProgressState(nextWorkoutProgressState);
                return;
            }
            if(rep >= 8 && rep <= 11 ) {
                const nextWorkoutProgressState = produce(workoutProgressState, draftWorkoutProgressState => {
                    draftWorkoutProgressState.rep++;
                })
                console.log(nextWorkoutProgressState);
                await axios.put("http://localhost:4000/workout/update", nextWorkoutProgressState);
                navigate(-1);
                setWorkoutProgressState(nextWorkoutProgressState);
                return;
            }
            if (rep === 12) {
                const nextWorkoutProgressState = produce(workoutProgressState, draftWorkoutProgressState => {
                    draftWorkoutProgressState.weight = draftWorkoutProgressState.weight+5;
                    draftWorkoutProgressState.rep = 8;
                })
                console.log(nextWorkoutProgressState);
                await axios.put("http://localhost:4000/workout/update", nextWorkoutProgressState);
                navigate(-1);
                setWorkoutProgressState(nextWorkoutProgressState);
                return;
            }
        } catch (e) {
            console.log(e);
        }
    }
    return (
        <Button onClick={handleWorkoutSuccessButtonClick}>성공</Button>
    )
}
export default WorkoutSuccessButton;