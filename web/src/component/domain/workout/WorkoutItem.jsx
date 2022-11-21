import LinkBox from "../../styled/concrete/LinkBox";
import Box from "../../styled/atom/Box";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPen, faPersonRunning} from "@fortawesome/free-solid-svg-icons";
import LinkText from "../../styled/atom/LinkText";

const WorkoutItem = ({id, name}) => {

  return (
      <LinkBox>
        <Box>
            <LinkText color={"#000"} to={`/workout/modify/${id}`}>
                <FontAwesomeIcon icon={faPen}/>
            </LinkText>
        </Box>
          <Box>
              {name}
          </Box>
        <Box>
            <LinkText color={"#000"} to={`/workout/progress/${id}`}>
                <FontAwesomeIcon icon={faPersonRunning}/>
            </LinkText>
        </Box>
      </LinkBox>
  )
}
export default WorkoutItem;