import {useEffect, useState} from "react";
import axios from "axios";
import WorkoutItem from "./WorkoutItem";
import Paragraph from "../../styled/atom/Paragraph";
import Box from "../../styled/atom/Box";

const WorkoutReadList = ({routineId}) => {
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
                workoutReadState.length === 0 ?
                    <Box direction={"row"} main={"center"} margin={"50px 0"}>
                        <Paragraph color={"#000"}>
                            운동 없음...
                        </Paragraph>
                    </Box>:
                workoutReadState.map(({id, name}) => (
                    <WorkoutItem id={id} name={name} key={id} />
                ))
            }
        </>
    )
}
export default WorkoutReadList;