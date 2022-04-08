import styled from "styled-components";
import { GUTTER, SANGRIA, SHADOW} from "../../constants";

const StyledHeader = styled.div`
  color: white;
  background: black;
  font-size: 22px;
  font-weight: bolder;
  box-shadow: ${SHADOW};
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

const StyledHeaderRightContent = styled.div`
  display: flex;
  justify-content: space-between;
  margin-right: 5px;
`;

const StyledHeaderText = styled.span`
  letter-spacing: 1px;
  font-size: 18px;
`;

const StyledPlayer = styled.div`
  display: flex;
  align-items: center;
  margin-right: ${GUTTER.small};
  margin-top: -7px;
  margin-bottom: -7px;
  background: ${SANGRIA};
  padding: 0 ${GUTTER.small};
  
  input, audio {
    display: none;
  }
  
  label {
    display: flex;
  }

  img {
    cursor: pointer;
    height: 25px;
  }
`;

const StyledStopButton = styled.img`
  margin-right: ${GUTTER.small};
`

export {
  StyledHeader,
  StyledInnerBox,
  StyledHamburger,
  StyledHeaderRightContent,
  StyledHeaderText,
  StyledPlayer,
  StyledStopButton
};
