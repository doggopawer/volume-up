import HeadBox from "../../component/styled/HeadBox";
import Head from "../../component/styled/Head";
import BodyBox from "../../component/styled/BodyBox";
import FootBox from "../../component/styled/FootBox";
import PageMoveButton from "../../component/domain/move/PageMoveButton";
import Frame from "../../component/styled/Frame";

const WorkoutProgressPage = () => {
    return (
        <Frame>
            <HeadBox>
                <Head>운동 진행</Head>
            </HeadBox>
            <BodyBox>
                <PageMoveButton
                    path={"/workout/whether/1"}
                    name={"벤치프레스"}
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