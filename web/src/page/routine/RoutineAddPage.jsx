import Frame from "../../component/styled/concrete/Frame";
import TextArea from "../../component/styled/atom/TextArea";
import {useState} from "react";
import produce from "immer";
import RoutineCreateButton from "../../component/domain/routine/RoutineCreateButton";
import Header from "../../component/styled/concrete/Header";
import Layout from "../../component/styled/concrete/Layout";
import Box from "../../component/styled/atom/Box";
import Paragraph from "../../component/styled/atom/Paragraph";

const RoutineAddPage = () => {
    const [routineAddState, setRoutineAddState] = useState({
        name: "",
        email: window.localStorage.email,
    });

    const handleRoutineAddPageChange = (e) => {
        const {name, value} = e.currentTarget;
        const nextRoutineAddState = produce(routineAddState, draftRoutineAddState => {
            draftRoutineAddState[name] = value;
        });
        setRoutineAddState(nextRoutineAddState);
    }
    return (
        <>
            <Header/>
            <Layout>
                <Frame>
                    <Box direction={"row"} main={"center"} margin={"20px 0"}>
                        <Paragraph color={"#6B7280"}>
                            루틴 추가
                        </Paragraph>
                    </Box>
                    <Box direction={"column"}>
                        <Box direction={"column"} margin={"20px 0"}>
                            <Paragraph>루틴 이름</Paragraph>
                            <TextArea
                                name={"name"}
                                value={routineAddState.name}
                                onChange={handleRoutineAddPageChange}
                            />
                        </Box>
                    </Box>
                    <Box>
                        <RoutineCreateButton routineAddState={routineAddState}/>
                    </Box>
                </Frame>
            </Layout>
        </>
    )
}
export default RoutineAddPage;