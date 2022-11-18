import HeadBox from "../../component/styled/HeadBox";
import Head from "../../component/styled/Head";
import BodyBox from "../../component/styled/BodyBox";
import FootBox from "../../component/styled/FootBox";
import PageMoveButton from "../../component/domain/move/PageMoveButton";
import Frame from "../../component/styled/Frame";

const WorkoutWhetherPage = () => {
  return (
      <Frame>
          <HeadBox>
              <Head>운동 성공/실패</Head>
          </HeadBox>
          <BodyBox>
              내용 아직 없음
          </BodyBox>
          <FootBox>
              <PageMoveButton
                  name={"성공"}
              />
              <PageMoveButton
                  name={"실패"}
              />
          </FootBox>
      </Frame>
  )
}
export default WorkoutWhetherPage;