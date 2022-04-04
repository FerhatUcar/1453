import styled, { keyframes } from "styled-components";
import { GUTTER } from "../../constants";

const contentAnimation = keyframes`
 0% { 
   transform: translateY(50px); 
   opacity: 0;
   visibility: hidden;
 }
 100% { 
   transform: translateY(0); 
   opacity: 1; 
   visibility: visible;
 }
`;

const StyledMenuSider = styled.div`
  background: black;
  color: white;
  width: 100%;
  height: 100vh;
  position: absolute;
  z-index: 9;
`;

const StyledInnerMenu = styled.ul`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  padding: 3rem;
  justify-content: center;
  position: relative;

  a {
    display: block;
    text-align: center;
    font-size: 50px;
    animation-name: ${contentAnimation};
    animation-duration: 1s;
    cursor: pointer;
    width: 95%;
    transition: color .3s ease-in-out;
    color: white;
    text-decoration: none;

    &:hover {
      color: #00a2ff;
    }

    &:nth-of-type(2) {
      animation-duration: 1.25s;
    }

    &:nth-of-type(3) {
      animation-duration: 1.5s;
    }
  }
}`;

const StyledCloseButton = styled.button`
  position: absolute;
  right: ${GUTTER.medium};
  top: 0;
  width: 32px;
  height: 32px;
  opacity: 0.8;
  background: transparent;
  border: 0;
  cursor: pointer;
  transition: all .2s ease-in-out;

  &:hover {
    opacity: 1;
  }
  
  &:before,
  &:after {
    position: absolute;
    left: 15px;
    content: " ";
    height: 35px;
    width: 3px;
    background-color: #fff;
  }
  &:before {
    transform: rotate(45deg);
  }
  &:after {
    transform: rotate(-45deg);
  }
`;

export { StyledMenuSider, StyledInnerMenu, StyledCloseButton };
