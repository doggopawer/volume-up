import PageMoveButton from "../../plain/PageMoveButton";
import {useEffect, useState} from "react";
import axios from "axios";

const WorkoutReadList2 = ({routineId}) => {
    const [workoutReadState, setWorkoutReadState] = useState([]);
    useEffect(()=> {
        (async()=> {
            const {data} = await axios.get(`http://localhost:4000/workout/list/${routineId}`);
            setWorkoutReadState(data.result);
        })();
    },[routineId]);

    return(
        <>
            {
                workoutReadState.map(({id, name}) => (
                    <PageMoveButton path={`/workout/whether/${id}`} name={name} key={id} />
                ))
            }
        </>
    )
}
export default WorkoutReadList2;