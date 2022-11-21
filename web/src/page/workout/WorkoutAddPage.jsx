import Frame from "../../component/styled/concrete/Frame";
import TextArea from "../../component/styled/atom/TextArea";
import {useState} from "react";
import produce from "immer";
import Header from "../../component/styled/concrete/Header";
import Layout from "../../component/styled/concrete/Layout";
import Box from "../../component/styled/atom/Box";
import Paragraph from "../../component/styled/atom/Paragraph";
import WorkoutCreateButton from "../../component/domain/workout/WorkoutCreateButton";
import {useParams} from "react-router-dom";

const WorkoutAddPage = () => {
    const {routineId} = useParams();
    const [workoutAddState, setWorkoutAddState] = useState({
        name: "",
        weight: "",
        rep: "",
        set: "",
        routineId,
    });

    const handleWorkoutAddPageChange = (e) => {
        const {name, value} = e.currentTarget;
        const nextState = produce(workoutAddState, draftState => {
            draftState[name] = value;
        });
        setWorkoutAddState(nextState);
    }
    return (
        <>
            <Header/>
            <Layout>
                <Frame>
                    <Box direction={"row"} main={"center"} margin={"20px 0"}>
                        <Paragraph color={"#6B7280"}>
                            운동 추가
                        </Paragraph>
                    </Box>
                    <Box direction={"column"}>
                        <Box direction={"column"} margin={"20px 0"}>
                            <Paragraph>운동 이름</Paragraph>
                            <TextArea
                                name={"name"}
                                value={workoutAddState.name}
                                onChange={handleWorkoutAddPageChange}
                            />
                        </Box>
                        <Box direction={"column"} margin={"20px 0"}>
                            <Paragraph>무게</Paragraph>
                            <TextArea
                                name={"weight"}
                                value={workoutAddState.weight}
                                onChange={handleWorkoutAddPageChange}
                            />
                        </Box>
                        <Box direction={"column"} margin={"20px 0"}>
                            <Paragraph>횟수</Paragraph>
                            <TextArea
                                name={"rep"}
                                value={workoutAddState.rep}
                                onChange={handleWorkoutAddPageChange}
                            />
                        </Box>
                        <Box direction={"column"} margin={"20px 0"}>
                            <Paragraph>세트</Paragraph>
                            <TextArea
                                name={"set"}
                                value={workoutAddState.set}
                                onChange={handleWorkoutAddPageChange}
                            />
                        </Box>
                    </Box>
                    <Box>
                        <WorkoutCreateButton workoutAddState={workoutAddState}/>
                    </Box>
                </Frame>
            </Layout>
        </>
    )
}
export default WorkoutAddPage;