import Heading from "../../component/styled/atom/Heading";
import Frame from "../../component/styled/concrete/Frame";
import UserCreateButton from "../../component/domain/user/UserCreateButton";
import {useState} from "react";
import TextArea from "../../component/styled/atom/TextArea";
import produce from "immer";
import Box from "../../component/styled/atom/Box";
import Logo from "../../component/styled/atom/Logo";
import Paragraph from "../../component/styled/atom/Paragraph";
import LinkText from "../../component/styled/atom/LinkText";
import Layout from "../../component/styled/concrete/Layout";

const UserCreatePage = () => {
    const [userCreateState, setUserCreateState] = useState({
        email: "",
        password: ""
    });
    const handleUserCreatePageChange = (e) => {
        const {name, value} = e.currentTarget;
        const nextUserCreateState = produce(userCreateState, draftUserCreateState => {
            draftUserCreateState[name] = value;
        });
        console.log(nextUserCreateState);
        setUserCreateState(nextUserCreateState);
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
                        회원가입
                    </Paragraph>
                </Box>
                <Box direction={"column"} >
                    <Box direction={"column"} margin={"20px 0"}>
                        <Paragraph>아이디</Paragraph>
                        <TextArea
                            name={"email"}
                            value={userCreateState.email}
                            onChange={handleUserCreatePageChange}
                        />
                    </Box>
                    <Box direction={"column"} margin={"20px 0"}>
                        <Paragraph>비밀번호</Paragraph>
                        <TextArea
                            type={"password"}
                            name={"password"}
                            value={userCreateState.password}
                            onChange={handleUserCreatePageChange}
                        />
                    </Box>

                </Box>
                <Box margin={"20px 0"}>
                    <UserCreateButton userCreateState={userCreateState}/>
                </Box>
                <Box direction={"row"} main={"center"} margin={"20px 0"}>
                    <Paragraph>이미 회원이신가요?</Paragraph>
                    <LinkText to={"/user/auth"} color={"#0090F9"}>로그인</LinkText>
                </Box>
            </Frame>
        </Layout>
    )
}
export default UserCreatePage;