import styled from "styled-components";
import logoImg from "../../../resource/volumeup.svg"

const Logo = styled.div`
  display: inline-block;
  width: ${props => props.width}px;
  height: ${props => props.height}px;
  background-image: url(${logoImg});
  background-repeat: no-repeat;
  background-size: cover;
`;
export default Logo;