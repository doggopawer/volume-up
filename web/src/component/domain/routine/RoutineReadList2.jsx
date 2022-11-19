import PageMoveButton from "../../plain/PageMoveButton";
import {useEffect, useState} from "react";
import axios from "axios";

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
                routineReadState.map(({id, name}) => (
                    <>
                        <PageMoveButton path={`/workout/progress/${id}`} name={name} key={id} />
                    </>
                ))
            }
        </>
    )
}
export default RoutineReadList;