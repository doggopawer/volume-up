import Button from "../../styled/Button";
import {useNavigate} from "react-router-dom";

const PageMoveButton = ({path, name}) => {
  const navigate = useNavigate();

  const handlePageMoveClick = () => {
    if(path) {
      navigate(path);
      return;
    }
    navigate(-1);
    return;
  }

  return (
      <Button onClick={handlePageMoveClick}>{name}</Button>
  )
}
export default PageMoveButton;