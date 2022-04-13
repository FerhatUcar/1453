import styled from "styled-components";
import { GUTTER, SANGRIA, SHADOW} from "../../constants";
import {size} from "../../utils/device";

const StyledHeader = styled.div`
  color: white;
  background: black;
  font-size: 22px;
  font-weight: bolder;
  box-shadow: ${SHADOW};
  position: relative;
  z-index: 10;
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
  height: 25px;
  display: none;

  @media (min-width: ${size.mobileL}) {
   display: block;
  }
`;

const StyledPlayer = styled.div`
  display: flex;
  align-items: center;
  margin-right: ${GUTTER.small};
  margin-top: -8px;
  margin-bottom: -8px;
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

const StyledCurrentTime = styled.div`
  height: 25px;
`

const StyledHeaderTitle = styled.div`
  height: 25px;
`

const StyledStopButton = styled.img`
  margin-right: 0;

  @media (min-width: ${size.mobileL}) {
    margin-right: ${GUTTER.small};
  }
`

const FlexItems = styled.div`
  display: flex;
  align-items: center;
`

export {
  StyledHeader,
  StyledInnerBox,
  StyledHamburger,
  StyledHeaderRightContent,
  StyledHeaderText,
  StyledPlayer,
  StyledStopButton,
  StyledCurrentTime,
  StyledHeaderTitle,
  FlexItems
};
