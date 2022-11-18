import HeadBox from "../../component/styled/HeadBox";
import Head from "../../component/styled/Head";
import BodyBox from "../../component/styled/BodyBox";
import FootBox from "../../component/styled/FootBox";
import PageMoveButton from "../../component/domain/move/PageMoveButton";
import Frame from "../../component/styled/Frame";

const WorkoutAddPage = () => {

    return (
        <Frame>
            <HeadBox>
                <Head>운동 추가</Head>
            </HeadBox>
            <BodyBox>
                내용 아직 없음
            </BodyBox>
            <FootBox>
                <PageMoveButton
                    name={"추가"}
                />
                <PageMoveButton
                    name={"돌아가기"}
                />
            </FootBox>
        </Frame>
    )
}
export default WorkoutAddPage;