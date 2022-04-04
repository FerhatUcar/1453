import styled from "styled-components";
import { GUTTER } from "../../constants";

const StyledHeader = styled.div`
  color: white;
  background: black;
  padding: ${GUTTER.small} ${GUTTER.medium};
  font-size: 22px;
  font-weight: bolder;
`;

const StyledInnerBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  width: 97%;
`;

const StyledHamburger = styled.button`
  background: transparent;
  border: 0;
  cursor: pointer;
  display: block;
  
  img {
    height: 30px;
    margin-top: 5px;
  }
`;

export { StyledHeader, StyledInnerBox, StyledHamburger };
