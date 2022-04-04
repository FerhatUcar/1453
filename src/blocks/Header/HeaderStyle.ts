import styled from "styled-components";
import { BLUE_DARK, GUTTER } from "../../constants";

const StyledHeader = styled.div`
  color: white;
  background: black;
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

const StyledHeaderRightContent = styled.div`
  display: flex;
  justify-content: space-between;

  img {
    cursor: pointer;
    height: 25px;

    &[alt="stop"] {
      margin-right: ${GUTTER.small};
    }
  }
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
  background: ${BLUE_DARK};
  padding: 0 ${GUTTER.small};
`;

export {
  StyledHeader,
  StyledInnerBox,
  StyledHamburger,
  StyledHeaderRightContent,
  StyledHeaderText,
  StyledPlayer,
};
