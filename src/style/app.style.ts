import styled, { createGlobalStyle, css, keyframes } from "styled-components";
import { GUTTER } from "../constants";
import { size } from "../utils/device";
import { ActiveType } from "../pages/Sultans";
import { empire, fetihDark, fetih } from "../assets";

const contentAnimation = keyframes`
 0% { opacity: 0 }
 100% { opacity: 1}
`;

export const backgroundPositionSize = (position: string, size: string) => css`
  background-position: ${position};
  background-repeat: no-repeat;
  background-size: ${size};
  -webkit-background-size: ${size};
  -moz-background-size: ${size};
  -o-background-size: ${size};
`;

const GlobalStyle = createGlobalStyle<{
  is1453: boolean;
}>`
  body {
    ${backgroundPositionSize("50% 50%", "cover")};
    background-image: ${({ is1453 }) => `url('${is1453 ? fetih : empire}')`};
  }
`;

const StyledContainer = styled.div<{ is1453: boolean }>`
  height: 100%;
  width: 95%;
  margin: 0 auto;
  display: ${({ is1453 }) => (is1453 ? "none" : "block")};
`;

export const GenericStyleBox = css`
  background: black;
  color: white;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.75);
  border: solid 1px #424242;
  flex-direction: column;
`;

const StyledCounterBox = styled.div`
  ${backgroundPositionSize("bottom", "cover")};
  background-image: url(${fetihDark});
  display: block;
  padding: ${GUTTER.medium};
  margin-top: ${GUTTER.medium};
  position: relative;
  color: white;
  text-align: center;
  font-size: 24px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.75);
  border: solid 1px #5b5b5b;
`;

const StyledBox = styled.div<{ active?: ActiveType; currentBox?: number }>`
  ${({ active, currentBox }) => css`
    ${GenericStyleBox};
    display: flex;
    text-align: center;
    align-items: center;
    cursor: pointer;
    transition: all 0.5s;
    max-height: ${active && active.active === currentBox ? "1000px" : "100px"};

    @media (min-width: ${size.tablet}) {
      flex-direction: row;
      text-align: left;
    }

    &:hover {
      background: #111111;
    }

    h1 {
      margin-top: ${GUTTER.medium};
      animation-name: ${contentAnimation};
      animation-duration: 1s;
      margin: ${active && active.active === currentBox
        ? null
        : `${GUTTER.medium} 0`};
    }

    p {
      font-family: "Trebuchet MS", serif;
      animation-name: ${contentAnimation};
      animation-duration: 2s;
    }

    input {
      margin: ${GUTTER.medium};
    }

    img {
      height: 250px;
      margin-top: ${GUTTER.medium};
      animation-name: ${contentAnimation};
      animation-duration: 2s;

      @media (min-width: ${size.tablet}) {
        margin-top: 0;
      }
    }
  `}
`;

const StyledContent = styled.div`
  padding: 0 2rem;
`;

export {
  GlobalStyle,
  StyledContainer,
  StyledCounterBox,
  StyledBox,
  StyledContent,
};
