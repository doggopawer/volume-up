import LinkBox from "../../styled/concrete/LinkBox";
import Box from "../../styled/atom/Box";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faList, faPen} from "@fortawesome/free-solid-svg-icons";
import LinkText from "../../styled/atom/LinkText";

const RoutineItem = ({id, name}) => {

  return (
      <LinkBox>
        <Box>
            <LinkText color={"#000"} to={`/routine/modify/${id}`}>
                <FontAwesomeIcon icon={faPen} />
            </LinkText>
        </Box>
          <Box>
              {name}
          </Box>
        <Box>
            <LinkText color={"#000"} to={`/workout/list/${id}`}>
                <FontAwesomeIcon icon={faList}/>
            </LinkText>
        </Box>
      </LinkBox>
  )
}
export default RoutineItem;