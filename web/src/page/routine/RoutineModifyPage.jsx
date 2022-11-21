import Header from "../../component/styled/concrete/Header";
import Layout from "../../component/styled/concrete/Layout";
import Frame from "../../component/styled/concrete/Frame";
import Box from "../../component/styled/atom/Box";
import Paragraph from "../../component/styled/atom/Paragraph";
import TextArea from "../../component/styled/atom/TextArea";
import {useEffect, useState} from "react";
import produce from "immer";
import RoutineUpdateButton from "../../component/domain/routine/RoutineUpdateButton";
import RoutineDeleteButton from "../../component/domain/routine/RoutineDeleteButton";
import {useParams} from "react-router-dom";
import axios from "axios";

const RoutineModifyPage = () => {
    const { routineId } = useParams();

    const [routineModifyState, setRoutineModifyState] = useState({
        id: routineId,
        name: "",
        email: window.localStorage.email,
    });

    useEffect(() => {
        (async ()=> {
          const { data } = await axios.get(`http://localhost:4000/routine/item/${routineModifyState.id}`);
            console.log(data);
            setRoutineModifyState(data.result[0]);
        })()
    },[routineModifyState])

    const handleRoutineModifyPageChange = (e) => {
        const {name, value} = e.currentTarget;
        const nextState = produce(routineModifyState, draftState => {
            draftState[name] = value;
        });
        setRoutineModifyState(nextState);
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
                            <Paragraph>루틴 이름</Paragraph>
                            <TextArea
                                name={"name"}
                                value={routineModifyState.name}
                                onChange={handleRoutineModifyPageChange}
                            />
                        </Box>
                    </Box>
                    <Box margin={"20px 0"}>
                        <RoutineUpdateButton routineModifyState={routineModifyState}/>
                    </Box>
                    <Box margin={"20px 0"}>
                        <RoutineDeleteButton routineModifyState={routineModifyState}/>
                    </Box>
                </Frame>
            </Layout>
        </>
    )
};

export default RoutineModifyPage;