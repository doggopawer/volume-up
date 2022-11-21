import Frame from "../../component/styled/concrete/Frame";
import UserAuthButton from "../../component/domain/user/UserAuthButton";
import {useState} from "react";
import TextArea from "../../component/styled/atom/TextArea";
import produce from "immer";
import Layout from "../../component/styled/concrete/Layout";
import Logo from "../../component/styled/atom/Logo";
import Box from "../../component/styled/atom/Box";
import Paragraph from "../../component/styled/atom/Paragraph";
import Heading from "../../component/styled/atom/Heading";
import LinkText from "../../component/styled/atom/LinkText";

const UserAuthPage = () => {
    const [userAuthState, setUserAuthState] = useState({
        email: "",
        password: ""
    });
    const handleUserAuthPageChange = (e) => {
        const {name, value} = e.currentTarget;
        const nextUserAuthState = produce(userAuthState, draftUserAuthState => {
            draftUserAuthState[name] = value;
        });
        console.log(nextUserAuthState);
        setUserAuthState(nextUserAuthState);
    }

  return (
      <Layout>
          <Frame>
              <Box direction={"row"} main={"center"}>
                  <Logo width={"132"} height={"96"}/>
              </Box>
              <Box direction={"row"} main={"center"} margin={"20px 0"}>
                  <Heading>
                    볼륨업에 오신것을 환영합니다.
                  </Heading>
              </Box>
              <Box direction={"row"} main={"center"} margin={"20px 0"}>
                  <Paragraph color={"#4B5563"}>
                      볼륨업은 점진적 과부화 원리에 입각한 운동 볼륨 기록 앱입니다.
                  </Paragraph>
              </Box>
              <Box direction={"row"} main={"center"} margin={"20px 0"}>
                  <Paragraph color={"#6B7280"}>
                      로그인
                  </Paragraph>
              </Box>
              <Box direction={"column"}>
                  <Box direction={"column"} margin={"20px 0"}>
                      <Paragraph>아이디</Paragraph>
                      <TextArea
                          name={"email"}
                          value={userAuthState.email}
                          onChange={handleUserAuthPageChange}
                      />
                  </Box>
                  <Box direction={"column"} margin={"20px 0"}>
                      <Paragraph>비밀번호</Paragraph>
                      <TextArea
                          type={"password"}
                          name={"password"}
                          value={userAuthState.password}
                          onChange={handleUserAuthPageChange}
                      />
                  </Box>
                  <Box direction={"row"} main={"flex-end"} margin={"20px 0"}>
                      <LinkText color={"#0090F9"} decoration={"none"}>계정찾기</LinkText>
                  </Box>
              </Box>
              <Box>
                  <UserAuthButton userAuthState={userAuthState}/>
              </Box>
              <Box direction={"row"} main={"center"} margin={"20px 0"}>
                    <Paragraph>아직 회원이 아니신가요?</Paragraph>
                    <LinkText to={"/user/create"} color={"#0090F9"}>회원가입</LinkText>
              </Box>
          </Frame>
      </Layout>
  )
}
export default UserAuthPage;