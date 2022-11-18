import HeadBox from "../../component/styled/HeadBox";
import Head from "../../component/styled/Head";
import BodyBox from "../../component/styled/BodyBox";
import PageMoveButton from "../../component/domain/move/PageMoveButton";
import FootBox from "../../component/styled/FootBox";
import Frame from "../../component/styled/Frame";

const UserAuthPage = () => {
  return (
      <Frame>
          <HeadBox>
              <Head>로그인</Head>
          </HeadBox>
          <BodyBox>
              내용 아직 없음
          </BodyBox>
          <FootBox>
              <PageMoveButton
                  path={"/"}
                  name={"로그인"}
              />
          </FootBox>
      </Frame>
  )
}
export default UserAuthPage;