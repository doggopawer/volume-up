import styled from "styled-components";
import {Link} from "react-router-dom";

const LinkText = styled(Link)`
  font-size: 14px;
  color: ${props => props.color};
  text-decoration: ${props => props.decoration};
`;
export default LinkText;