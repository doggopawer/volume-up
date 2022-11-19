import HeadBox from "../../component/styled/HeadBox";
import Head from "../../component/styled/Head";
import BodyBox from "../../component/styled/BodyBox";
import FootBox from "../../component/styled/FootBox";
import PageMoveButton from "../../component/plain/PageMoveButton";
import Frame from "../../component/styled/Frame";
import WorkoutReadList from "../../component/domain/workout/WorkoutReadList";
import {useParams} from "react-router-dom";

const WorkoutManagementPage = () => {
    const {routineId} = useParams();
    return(
        <Frame>
            <HeadBox>
                <Head>운동 관리</Head>
            </HeadBox>
            <BodyBox>
                <WorkoutReadList routineId={routineId} />
            </BodyBox>
            <FootBox>
                <PageMoveButton
                    path={`/workout/add/${routineId}`}
                    name={"운동 추가"}
                />
                <PageMoveButton
                    path={"/routine/management"}
                    name={"돌아가기"}
                />
            </FootBox>
        </Frame>
    )
}
export default WorkoutManagementPage