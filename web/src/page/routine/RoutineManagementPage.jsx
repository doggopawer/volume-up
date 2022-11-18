import HeadBox from "../../component/styled/HeadBox";
import Head from "../../component/styled/Head";
import BodyBox from "../../component/styled/BodyBox";
import FootBox from "../../component/styled/FootBox";
import PageMoveButton from "../../component/domain/move/PageMoveButton";
import Frame from "../../component/styled/Frame";

const RoutineManagementPage = () => {
  return (
      <Frame>
          <HeadBox>
              <Head>루틴 관리</Head>
          </HeadBox>
          <BodyBox>
              <PageMoveButton
                path={"/workout/management/1"}
                name={"가슴 루틴"}
              />
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