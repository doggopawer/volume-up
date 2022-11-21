import styled from "styled-components";

const Box = styled.div`
  width: ${props => props.width};
  height: ${props => props.height};
  display: flex;
  flex-direction: ${props => props.direction};
  align-items: ${(props) => props.cross};
  justify-content: ${props => props.main};
  margin: ${props => props.margin};
  border-bottom: ${props => props.borderBottom};
    
`;
export default Box;