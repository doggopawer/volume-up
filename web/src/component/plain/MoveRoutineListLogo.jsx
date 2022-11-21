import {useNavigate} from "react-router-dom";
import Logo from "../styled/atom/Logo";

const MoveRoutineListLogo = () => {
    const navigate= useNavigate();
    const handleMoveRoutineListLogoClick = () => {
        navigate("/routine/list");
        return;
    }

    return (
        <Logo width={"66"} height={"48"} onClick={handleMoveRoutineListLogoClick} />
    )
}
export default MoveRoutineListLogo;