import axios from "axios";
import {useNavigate} from "react-router-dom";
import Button from "../../styled/atom/Button";


const RoutineDeleteButton = ({routineModifyState}) => {
    const navigate = useNavigate();

    const handleRoutineDeleteButtonClick = async() => {
        try {
            await axios.delete(`http://localhost:4000/routine/delete/${routineModifyState.id}`);
            navigate(-1);
            return;
        } catch (e) {
            console.log(e);
        }
    }
    return (
        <Button onClick={handleRoutineDeleteButtonClick}>삭제</Button>
    )
}
export default RoutineDeleteButton;