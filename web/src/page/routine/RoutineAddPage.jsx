import HeadBox from "../../component/styled/HeadBox";
import Head from "../../component/styled/Head";
import BodyBox from "../../component/styled/BodyBox";
import FootBox from "../../component/styled/FootBox";
import PageMoveButton from "../../component/domain/move/PageMoveButton";
import Frame from "../../component/styled/Frame";

const RoutineAddPage = () => {

    return (
        <Frame>
            <HeadBox>
                <Head>루틴 추가</Head>
            </HeadBox>
            <BodyBox>
                내용 아직 없음
            </BodyBox>
            <FootBox>
                <PageMoveButton
                    path={"/routine/management"}
                    name={"추가"}
                />
                <PageMoveButton
                    path={"/routine/management"}
                    name={"돌아가기"}
                />
            </FootBox>
        </Frame>
    )
}
export default RoutineAddPage;