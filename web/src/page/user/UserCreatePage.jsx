import HeadBox from "../../component/styled/HeadBox";
import Head from "../../component/styled/Head";
import BodyBox from "../../component/styled/BodyBox";
import FootBox from "../../component/styled/FootBox";
import Frame from "../../component/styled/Frame";
import UserCreateButton from "../../component/domain/user/UserCreateButton";
import {useState} from "react";
import TextArea from "../../component/styled/TextArea";
import produce from "immer";

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
        <Frame>
            <HeadBox>
                <Head>회원가입</Head>
            </HeadBox>
            <BodyBox>
                <TextArea
                    placeholder={"이메일"}
                    name={"email"}
                    value={userCreateState.email}
                    onChange={handleUserCreatePageChange}
                />
                <TextArea
                    placeholder={"비밀번호"}
                    name={"password"}
                    value={userCreateState.password}
                    onChange={handleUserCreatePageChange}
                />
            </BodyBox>
            <FootBox>
                <UserCreateButton userCreateState={userCreateState}/>
            </FootBox>
        </Frame>
    )
}
export default UserCreatePage;