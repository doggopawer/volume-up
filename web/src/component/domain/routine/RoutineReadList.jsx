import {useEffect, useState} from "react";
import axios from "axios";
import RoutineItem from "./RoutineItem";
import Paragraph from "../../styled/atom/Paragraph";
import Box from "../../styled/atom/Box";

const RoutineReadList = () => {
  const [routineReadState, setRoutineReadState] = useState([]);


  useEffect(()=> {
    (async()=> {
      const {data} = await axios.get(`http://localhost:4000/routine/list/${window.localStorage.email}`);
      setRoutineReadState(data.result);
    })();
  },[]);

  return(
      <>
        {
          routineReadState.length === 0 ? <Box direction={"row"} main={"center"} margin={"50px 0"}>
                <Paragraph color={"#000"}>
                  루틴 없음...
                </Paragraph>
              </Box> :
          routineReadState.map(({id, name}) => (
              <>
              <RoutineItem id={id} name={name} key={id} />
              </>
          ))
        }
      </>
  )
}
export default RoutineReadList;