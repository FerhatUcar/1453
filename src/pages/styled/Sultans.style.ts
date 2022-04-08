import styled from "styled-components";
import { GUTTER } from "../../constants";
import { size } from "../../utils/device";
import { empire } from "../../assets";
import { backgroundPositionSize } from "../../style/app.style";

const StyledSultansPage = styled.div`
  color: white;
  padding: ${GUTTER.medium};
  background-image: url(${empire});
  height: 100vh;
  ${backgroundPositionSize("50% 50%", "cover")};

  h1 {
    text-align: center;

    @media (min-width: ${size.tablet}) {
      font-size: 62px;
      margin: 0;
    }
  }
`;

const StyledDate = styled.span`
  display: block;
  font-size: 48px;
  text-align: center;
`;

const StyledTimeLine = styled.div`
  position: relative;
  top: 0;
  bottom: 0;
  left: 50%;
  height: 30px;
  content: "";
  z-index: 1;
  border-left: 5px dotted white;
`;

const StyledHat = styled.img`
  height: 100px;
  display: block;
  margin: 0 auto;
`;

export { StyledDate, StyledHat, StyledSultansPage, StyledTimeLine };
