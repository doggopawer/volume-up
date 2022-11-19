import HeadBox from "../../component/styled/HeadBox";
import Head from "../../component/styled/Head";
import BodyBox from "../../component/styled/BodyBox";
import FootBox from "../../component/styled/FootBox";
import PageMoveButton from "../../component/plain/PageMoveButton";
import Frame from "../../component/styled/Frame";
import WorkoutCreateButton from "../../component/domain/workout/WorkoutCreateButton";
import TextArea from "../../component/styled/TextArea";
import {useState} from "react";
import produce from "immer";
import {useParams} from "react-router-dom";

const WorkoutAddPage = () => {
    const { routineId } = useParams();
    const [workoutAddState, setWorkoutAddState] = useState({
        name: "",
        weight: "",
        rep: "",
        set: "",
        routineId,
    });

    const handleWorkoutAddPageChange = (e) => {
        const {name, value} = e.currentTarget;
        const nextWorkoutAddState = produce(workoutAddState, draftWorkoutAddState => {
            draftWorkoutAddState[name] = value;
        });
        console.log(nextWorkoutAddState)
        setWorkoutAddState(nextWorkoutAddState);
    }
    return (
        <Frame>
            <HeadBox>
                <Head>운동 추가</Head>
            </HeadBox>
            <BodyBox>
                <TextArea
                    placeholder={"이름"}
                    name={"name"}
                    value={workoutAddState.name}
                    onChange={handleWorkoutAddPageChange}
                />
                <TextArea
                    placeholder={"무게"}
                    name={"weight"}
                    value={workoutAddState.weight}
                    onChange={handleWorkoutAddPageChange}
                />
                <TextArea
                    placeholder={"횟수"}
                    name={"rep"}
                    value={workoutAddState.rep}
                    onChange={handleWorkoutAddPageChange}
                />
                <TextArea
                    placeholder={"세트수"}
                    name={"set"}
                    value={workoutAddState.set}
                    onChange={handleWorkoutAddPageChange}
                />
            </BodyBox>
            <FootBox>
                <WorkoutCreateButton
                    workoutAddState={workoutAddState}
                />
                <PageMoveButton
                    name={"돌아가기"}
                />
            </FootBox>
        </Frame>
    )
}
export default WorkoutAddPage;