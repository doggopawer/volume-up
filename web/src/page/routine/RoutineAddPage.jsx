import HeadBox from "../../component/styled/HeadBox";
import Head from "../../component/styled/Head";
import BodyBox from "../../component/styled/BodyBox";
import FootBox from "../../component/styled/FootBox";
import PageMoveButton from "../../component/plain/PageMoveButton";
import Frame from "../../component/styled/Frame";
import TextArea from "../../component/styled/TextArea";
import {useState} from "react";
import produce from "immer";
import RoutineCreateButton from "../../component/domain/routine/RoutineCreateButton";

const RoutineAddPage = () => {
    const [routineAddState, setRoutineAddState] = useState({
        name: "",
        email: window.localStorage.email,
    });

    const handleRoutineAddPageChange = (e) => {
        const {name, value} = e.currentTarget;
        const nextRoutineAddState = produce(routineAddState, draftRoutineAddState => {
            draftRoutineAddState[name] = value;
        });
        console.log(nextRoutineAddState)
        setRoutineAddState(nextRoutineAddState);
    }
    return (
        <Frame>
            <HeadBox>
                <Head>루틴 추가</Head>
            </HeadBox>
            <BodyBox>
                <TextArea
                    placeholder={"이름"}
                    name={"name"}
                    value={routineAddState.name}
                    onChange={handleRoutineAddPageChange}
                />
            </BodyBox>
            <FootBox>
                <RoutineCreateButton
                    routineAddState={routineAddState}
                />
                <PageMoveButton
                    path={"/routine/management"}
                    name={"돌아가기"}
                />
            </FootBox>
        </Frame>
    )
}
export default RoutineAddPage;