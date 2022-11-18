import HeadBox from "../../component/styled/HeadBox";
import Head from "../../component/styled/Head";
import BodyBox from "../../component/styled/BodyBox";
import FootBox from "../../component/styled/FootBox";
import PageMoveButton from "../../component/domain/move/PageMoveButton";
import Frame from "../../component/styled/Frame";

const WorkoutModifyPage = () => {
  return (
      <Frame>
          <HeadBox>
              <Head>운동 수정/삭제</Head>
          </HeadBox>
          <BodyBox>

          </BodyBox>
          <FootBox>
              <PageMoveButton
                  name={"수정"}
              />
              <PageMoveButton
                  name={"삭제"}
              />
              <PageMoveButton
                  name={"돌아가기"}
              />
          </FootBox>
      </Frame>
  )
}
export default WorkoutModifyPage;