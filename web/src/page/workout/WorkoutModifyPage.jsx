import Header from "../../component/styled/concrete/Header";
import Layout from "../../component/styled/concrete/Layout";
import Frame from "../../component/styled/concrete/Frame";
import Box from "../../component/styled/atom/Box";
import Paragraph from "../../component/styled/atom/Paragraph";
import TextArea from "../../component/styled/atom/TextArea";
import {useEffect, useState} from "react";
import produce from "immer";
import {useParams} from "react-router-dom";
import axios from "axios";
import WorkoutUpdateButton from "../../component/domain/workout/WorkoutUpdateButton";
import WorkoutDeleteButton from "../../component/domain/workout/WorkoutDeleteButton";

const WorkoutModifyPage = () => {
    const { workoutId } = useParams();

    const [workoutModifyState, setWorkoutModifyState] = useState({
        id: workoutId,
        weight: "",
        rep: "",
        set: "",
        name: "",
    });

    useEffect(() => {
        (async ()=> {
            const { data } = await axios.get(`http://localhost:4000/workout/item/${workoutModifyState.id}`);
            console.log(data);
            setWorkoutModifyState(data.result[0]);
        })()
    },[workoutModifyState])

    const handleWorkoutModifyPageChange = (e) => {
        const {name, value} = e.currentTarget;
        const nextState = produce(workoutModifyState, draftState => {
            draftState[name] = value;
        });
        setWorkoutModifyState(nextState);
    }

    return (
        <>
            <Header/>
            <Layout>
                <Frame>
                    <Box direction={"row"} main={"center"} margin={"20px 0"}>
                        <Paragraph color={"#6B7280"}>
                            루틴 수정/삭제
                        </Paragraph>
                    </Box>
                    <Box direction={"column"}>
                        <Box direction={"column"} margin={"20px 0"}>
                            <Paragraph>운동 이름</Paragraph>
                            <TextArea
                                name={"name"}
                                value={workoutModifyState.name}
                                onChange={handleWorkoutModifyPageChange}
                            />
                        </Box>
                        <Box direction={"column"} margin={"20px 0"}>
                            <Paragraph>무게</Paragraph>
                            <TextArea
                                name={"weight"}
                                value={workoutModifyState.weight}
                                onChange={handleWorkoutModifyPageChange}
                            />
                        </Box>
                        <Box direction={"column"} margin={"20px 0"}>
                            <Paragraph>횟수</Paragraph>
                            <TextArea
                                name={"rep"}
                                value={workoutModifyState.rep}
                                onChange={handleWorkoutModifyPageChange}
                            />
                        </Box>
                        <Box direction={"column"} margin={"20px 0"}>
                            <Paragraph>세트</Paragraph>
                            <TextArea
                                name={"set"}
                                value={workoutModifyState.set}
                                onChange={handleWorkoutModifyPageChange}
                            />
                        </Box>
                    </Box>
                    <Box margin={"20px 0"}>
                        <WorkoutUpdateButton workoutModifyState={workoutModifyState}/>
                    </Box>
                    <Box margin={"20px 0"}>
                        <WorkoutDeleteButton workoutModifyState={workoutModifyState}/>
                    </Box>
                </Frame>
            </Layout>
        </>
    )
};

export default WorkoutModifyPage;