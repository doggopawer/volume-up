import Frame from "../component/styled/Frame";
import HeadBox from "../component/styled/HeadBox";
import FootBox from "../component/styled/FootBox";
import BodyBox from "../component/styled/BodyBox";
import Head from "../component/styled/Head";
import PageMoveButton from "../component/plain/PageMoveButton";

const MainPage = () => {
  return (
      <Frame>
          <HeadBox>
            <Head>메인</Head>
          </HeadBox>
          <BodyBox>
              내용 아직 없음
          </BodyBox>
          <FootBox>
            <PageMoveButton
                path={"/routine/management"}
                name={"루틴 관리"}
            />
            <PageMoveButton
              path={"/routine/progress"}
              name={"루틴 진행"}
            />
          </FootBox>
      </Frame>
  )
}
export default MainPage;