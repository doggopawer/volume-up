import HeadBox from "../../component/styled/HeadBox";
import Head from "../../component/styled/Head";
import BodyBox from "../../component/styled/BodyBox";
import FootBox from "../../component/styled/FootBox";
import PageMoveButton from "../../component/plain/PageMoveButton";
import Frame from "../../component/styled/Frame";
import Paragraph from "../../component/styled/Paragraph";
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";
import WorkoutSuccessButton from "../../component/domain/workout/WorkoutSuccessButton";

const WorkoutWhetherPage = () => {
    const {workoutId} = useParams();
    const [workoutWhetherState, setWorkoutWhetherState] = useState({
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
            setWorkoutWhetherState(data.result[0]);
        })()
    },[workoutId])
  return (
      <Frame>
          <HeadBox>
              <Head>운동 성공/실패</Head>
          </HeadBox>
          <BodyBox>
            <Paragraph>{workoutWhetherState.name}</Paragraph>
            <Paragraph>{workoutWhetherState.weight} kg</Paragraph>
            <Paragraph>{workoutWhetherState.rep} 번 반복</Paragraph>
            <Paragraph>{workoutWhetherState.set} 세트</Paragraph>
          </BodyBox>
          <FootBox>
              <WorkoutSuccessButton
                workoutWhetherState={workoutWhetherState}
                setWorkoutWhetherState={setWorkoutWhetherState}
              />
              <PageMoveButton
                  name={"실패"}
              />
          </FootBox>
      </Frame>
  )
}
export default WorkoutWhetherPage;