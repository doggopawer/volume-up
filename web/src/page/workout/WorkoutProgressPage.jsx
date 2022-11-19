import HeadBox from "../../component/styled/HeadBox";
import Head from "../../component/styled/Head";
import BodyBox from "../../component/styled/BodyBox";
import FootBox from "../../component/styled/FootBox";
import PageMoveButton from "../../component/plain/PageMoveButton";
import Frame from "../../component/styled/Frame";
import WorkoutReadList2 from "../../component/domain/workout/WorkoutReadList2";
import {useParams} from "react-router-dom";

const WorkoutProgressPage = () => {
    const {routineId} = useParams();
    return (
        <Frame>
            <HeadBox>
                <Head>운동 진행</Head>
            </HeadBox>
            <BodyBox>
                <WorkoutReadList2
                    routineId={routineId}
                />
            </BodyBox>
            <FootBox>
                <PageMoveButton
                    name={"돌아가기"}
                />
            </FootBox>
        </Frame>
    )
}
export default WorkoutProgressPage;