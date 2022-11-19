import HeadBox from "../../component/styled/HeadBox";
import Head from "../../component/styled/Head";
import BodyBox from "../../component/styled/BodyBox";
import FootBox from "../../component/styled/FootBox";
import PageMoveButton from "../../component/plain/PageMoveButton";
import Frame from "../../component/styled/Frame";
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";
import TextArea from "../../component/styled/TextArea";
import produce from "immer";
import WorkoutUpdateButton from "../../component/domain/workout/WorkoutUpdateButton";
import WorkoutDeleteButton from "../../component/domain/workout/WorkoutDeleteButton";

const WorkoutModifyPage = () => {
    const {workoutId} = useParams();
    const [workoutModifyState, setWorkoutModifyState] = useState({
        id: "",
        name: "",
        weight: "",
        rep: "",
        set: "",
    });

    useEffect(()=>{
        (async() => {
           const {data} = await axios.get(`http://localhost:4000/workout/item/${workoutId}`);
           console.log(data.result);
           setWorkoutModifyState(data.result[0]);
        })()
    },[workoutId])

    const handleWorkoutModifyPageChange = (e) => {
        const {name, value} = e.currentTarget;
        const nextWorkoutModifyState = produce(workoutModifyState, draftWorkoutModifyState => {
            draftWorkoutModifyState[name] = value;
        });
        console.log(nextWorkoutModifyState)
        setWorkoutModifyState(nextWorkoutModifyState);
    }

  return (
      <Frame>
          <HeadBox>
              <Head>운동 수정/삭제</Head>
          </HeadBox>
          <BodyBox>
              <TextArea
                placeholder={"이름"}
                name={"name"}
                value={workoutModifyState.name}
                onChange={handleWorkoutModifyPageChange}
              />
              <TextArea
                  placeholder={"무게"}
                  name={"weight"}
                  value={workoutModifyState.weight}
                  onChange={handleWorkoutModifyPageChange}
              />
              <TextArea
                  placeholder={"횟수"}
                  name={"rep"}
                  value={workoutModifyState.rep}
                  onChange={handleWorkoutModifyPageChange}
              />
              <TextArea
                  placeholder={"세트수"}
                  name={"set"}
                  value={workoutModifyState.set}
                  onChange={handleWorkoutModifyPageChange}
              />
          </BodyBox>
          <FootBox>
              <WorkoutUpdateButton
                workoutModifyState={workoutModifyState}
              />
              <WorkoutDeleteButton
                workoutModifyState={workoutModifyState}
              />
              <PageMoveButton
                  name={"돌아가기"}
              />
          </FootBox>
      </Frame>
  )
}
export default WorkoutModifyPage;