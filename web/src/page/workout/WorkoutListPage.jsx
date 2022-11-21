import Frame from "../../component/styled/concrete/Frame";
import Header from "../../component/styled/concrete/Header";
import Layout from "../../component/styled/concrete/Layout";
import WorkoutReadList from "../../component/domain/workout/WorkoutReadList";
import {useParams} from "react-router-dom";
import Paragraph from "../../component/styled/atom/Paragraph";
import Box from "../../component/styled/atom/Box";

const WorkoutListPage = () => {
    const {routineId} = useParams();
    return (
        <>
            <Header path={`/workout/add/${routineId}`}/>
            <Layout>
                <Frame>
                    <Box direction={"row"} main={"center"} margin={"20px 0"}>
                        <Paragraph color={"#6B7280"}>
                            운동 목록
                        </Paragraph>
                    </Box>
                    <WorkoutReadList routineId={routineId} />
                </Frame>
            </Layout>
        </>
    )
}
export default WorkoutListPage;