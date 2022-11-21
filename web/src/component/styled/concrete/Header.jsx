import Box from "../atom/Box";
import LinkText from "../atom/LinkText";
import MoveBackLinkText from "../../plain/MoveBackLinkText";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlus} from "@fortawesome/free-solid-svg-icons";
import UserLogoutText from "../../domain/user/UserLogoutText";
import MoveRoutineListLogo from "../../plain/MoveRoutineListLogo";

const Header = ({pathname,path}) => {
    return (

        <Box direction={"row"} main={"space-around"} cross={"center"} height={"64px"} borderBottom={"1px solid lightgray"} >
            <Box>
                {
                    path ?
                        <LinkText color={"#000"} decoration={"none"} to={path}>
                            <FontAwesomeIcon icon={faPlus} />
                        </LinkText> : null
                }
            </Box>
            <Box direction={"row"} main={"center"}>
                <MoveRoutineListLogo/>
            </Box>
            <Box>
                {
                   pathname === "/routine/list" ? <UserLogoutText/> : <MoveBackLinkText/>
                }
            </Box>
        </Box>

    )

}

export default Header;