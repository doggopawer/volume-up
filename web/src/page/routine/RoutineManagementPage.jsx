import HeadBox from "../../component/styled/HeadBox";
import Head from "../../component/styled/Head";
import BodyBox from "../../component/styled/BodyBox";
import FootBox from "../../component/styled/FootBox";
import PageMoveButton from "../../component/plain/PageMoveButton";
import Frame from "../../component/styled/Frame";
import RoutineReadList from "../../component/domain/routine/RoutineReadList";

const RoutineManagementPage = () => {
  return (
      <Frame>
          <HeadBox>
              <Head>루틴 관리</Head>
          </HeadBox>
          <BodyBox>
              <RoutineReadList/>
          </BodyBox>
          <FootBox>
              <PageMoveButton
                  path={"/routine/add"}
                  name={"루틴 추가"}
              />
              <PageMoveButton
                  path={"/"}
                  name={"돌아가기"}
              />
          </FootBox>
      </Frame>
  )
}
export default RoutineManagementPage;