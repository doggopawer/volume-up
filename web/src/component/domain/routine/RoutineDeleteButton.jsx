import axios from "axios";
import {useNavigate} from "react-router-dom";
import ShortButton from "../../styled/ShortButton";


const RoutineDeleteButton = ({id}) => {
    const navigate = useNavigate();

    const handleRoutineDeleteButtonClick = async() => {
        try {
            await axios.delete(`http://localhost:4000/routine/delete/${id}`);
            navigate("/");
            return;
        } catch (e) {
            console.log(e);
        }
    }
    return (
        <ShortButton onClick={handleRoutineDeleteButtonClick}>삭제</ShortButton>
    )
}
export default RoutineDeleteButton;