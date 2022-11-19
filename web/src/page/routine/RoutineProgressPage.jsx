import HeadBox from "../../component/styled/HeadBox";
import Head from "../../component/styled/Head";
import BodyBox from "../../component/styled/BodyBox";
import FootBox from "../../component/styled/FootBox";
import PageMoveButton from "../../component/plain/PageMoveButton";
import Frame from "../../component/styled/Frame";
import RoutineReadList2 from "../../component/domain/routine/RoutineReadList2";

const RoutineProgressPage = () => {
    return (
        <Frame>
            <HeadBox>
                <Head>루틴 진행</Head>
            </HeadBox>
            <BodyBox>
                <RoutineReadList2/>
            </BodyBox>
            <FootBox>
                <PageMoveButton
                    path={"/"}
                    name={"돌아가기"}
                />
            </FootBox>
        </Frame>
    )
}
export default RoutineProgressPage;