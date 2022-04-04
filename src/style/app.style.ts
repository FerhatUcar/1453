import styled, { createGlobalStyle, css, keyframes } from "styled-components";
import fetih from "../assets/img/fetih.jpeg";
import fetihDark from "../assets/img/fetih-dark.png";
import istanbul from "../assets/img/istanbul.jpeg";
import empire from "../assets/img/empire.png";
import { GUTTER } from "../constants";
import { size } from "../utils/device";
import { ActiveType } from "../pages/Sultans";

const contentAnimation = keyframes`
 0% { opacity: 0 }
 100% { opacity: 1}
`;

const backgroundStyle = (position: string, size: string) => css`
  background-position: ${position};
  background-repeat: no-repeat;
  background-size: ${size};
`;

const GlobalStyle = createGlobalStyle<{
  is1453?: boolean;
  backgroundImage: boolean;
}>`
  body {
    ${backgroundStyle("50% 50%", "cover")};
    background-image: ${({ is1453, backgroundImage }) =>
      backgroundImage ? `url(${is1453 ? fetih : istanbul})` : `url(${empire})`};
    transition: background-image 1s ease-in-out;
    height: 100%;
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
  display: block;
  ${backgroundStyle("bottom", "100%")};
  background-image: url(${fetihDark});
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
