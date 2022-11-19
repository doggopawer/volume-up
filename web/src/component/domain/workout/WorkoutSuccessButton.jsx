import Button from "../../styled/Button";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import produce from "immer";

const WorkoutSuccessButton = ({workoutWhetherState, setWorkoutWhetherState}) => {
    const navigate = useNavigate();


    const handleWorkoutSuccessButtonClick = async() => {
        const {rep} = workoutWhetherState;

        try {
            if(rep === 5) {
                const nextWorkoutWhetherState = produce(workoutWhetherState, draftWorkoutWhetherState => {
                    draftWorkoutWhetherState.weight = draftWorkoutWhetherState.weight+5;
                });
                await axios.put("http://localhost:4000/workout/update", nextWorkoutWhetherState);
                navigate(-1);
                setWorkoutWhetherState(nextWorkoutWhetherState);
                return;
            }
            if(rep >= 8 && rep <= 11 ) {
                const nextWorkoutWhetherState = produce(workoutWhetherState, draftWorkoutWhetherState => {
                    draftWorkoutWhetherState.rep++;
                })
                console.log(nextWorkoutWhetherState);
                await axios.put("http://localhost:4000/workout/update", nextWorkoutWhetherState);
                navigate(-1);
                setWorkoutWhetherState(nextWorkoutWhetherState);
                return;
            }
            if (rep === 12) {
                const nextWorkoutWhetherState = produce(workoutWhetherState, draftWorkoutWhetherState => {
                    draftWorkoutWhetherState.weight = draftWorkoutWhetherState.weight+5;
                    draftWorkoutWhetherState.rep = 8;
                })
                console.log(nextWorkoutWhetherState);
                await axios.put("http://localhost:4000/workout/update", nextWorkoutWhetherState);
                navigate(-1);
                setWorkoutWhetherState(nextWorkoutWhetherState);
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