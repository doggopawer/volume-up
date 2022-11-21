import Header from "../../component/styled/concrete/Header";
import Layout from "../../component/styled/concrete/Layout";
import Frame from "../../component/styled/concrete/Frame";
import Box from "../../component/styled/atom/Box";
import Paragraph from "../../component/styled/atom/Paragraph";
import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import axios from "axios";
import WorkoutSuccessButton from "../../component/domain/workout/WorkoutSuccessButton";

const WorkoutProgressPage = () => {
    const { workoutId } = useParams();

    const [workoutProgressState, setWorkoutProgressState] = useState({
        id: workoutId,
        weight: "",
        rep: "",
        set: "",
        name: "",
    });

    useEffect(() => {
        (async ()=> {
            const { data } = await axios.get(`http://localhost:4000/workout/item/${workoutProgressState.id}`);
            console.log(data);
            setWorkoutProgressState(data.result[0]);
        })()
    },[workoutProgressState])

    return (
        <>
            <Header/>
            <Layout>
                <Frame>
                    <Box direction={"row"} main={"center"} margin={"20px 0"}>
                        <Paragraph color={"#6B7280"}>
                            운동 성공 여부
                        </Paragraph>
                    </Box>
                    <Box direction={"column"}>
                        <Box direction={"column"} margin={"20px 0"}>
                            <Paragraph>운동 이름</Paragraph>
                            {workoutProgressState.name}
                        </Box>
                        <Box direction={"column"} margin={"20px 0"}>
                            <Paragraph>무게</Paragraph>
                            {workoutProgressState.weight}
                        </Box>
                        <Box direction={"column"} margin={"20px 0"}>
                            <Paragraph>횟수</Paragraph>
                            {workoutProgressState.rep}
                        </Box>
                        <Box direction={"column"} margin={"20px 0"}>
                            <Paragraph>세트</Paragraph>
                            {workoutProgressState.set}
                        </Box>
                    </Box>
                    <Box>
                        <WorkoutSuccessButton workoutProgressState={workoutProgressState} setWorkoutProgressState={setWorkoutProgressState}/>
                    </Box>
                </Frame>
            </Layout>
        </>
    )
};

export default WorkoutProgressPage;