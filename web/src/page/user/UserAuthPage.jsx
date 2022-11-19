import HeadBox from "../../component/styled/HeadBox";
import Head from "../../component/styled/Head";
import BodyBox from "../../component/styled/BodyBox";
import FootBox from "../../component/styled/FootBox";
import Frame from "../../component/styled/Frame";
import UserAuthButton from "../../component/domain/user/UserAuthButton";
import {useState} from "react";
import TextArea from "../../component/styled/TextArea";
import produce from "immer";

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
      <Frame>
          <HeadBox>
              <Head>로그인</Head>
          </HeadBox>
          <BodyBox>
              <TextArea
                placeholder={"이메일"}
                name={"email"}
                value={userAuthState.email}
                onChange={handleUserAuthPageChange}
              />
              <TextArea
                  placeholder={"비밀번호"}
                  name={"password"}
                  value={userAuthState.password}
                  onChange={handleUserAuthPageChange}
              />
          </BodyBox>
          <FootBox>
              <UserAuthButton userAuthState={userAuthState}/>
          </FootBox>
      </Frame>
  )
}
export default UserAuthPage;