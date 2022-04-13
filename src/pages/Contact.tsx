import styled, { createGlobalStyle } from "styled-components";
import { GUTTER, SANGRIA, SHADOW} from "../constants";
import { empire, fetih } from "../assets";
import { backgroundPositionSize } from "../style/app.style";
import { useCounter } from "../hooks";
import Link from "../components/Link/Link";

const GlobalStyle = createGlobalStyle<{
  is1453: boolean;
}>`
  body {
    ${backgroundPositionSize("50% 50%", "cover")};
    background-image: ${({ is1453 }) => `url('${is1453 ? fetih : empire}')`};
  }
`;

const StyledBody = styled.div`
  padding: ${GUTTER.medium};
  color: white;
  font-size: 24px;

  h1 {
    color: white;
    margin: ${GUTTER.small} 0;
  }
`;

const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  background: ${SANGRIA};
  box-shadow: ${SHADOW};
  border: solid 1px #6d6d6d;

  span {
    padding: ${GUTTER.small};

    &:nth-of-type(odd) {
      border-right: solid 1px #6d6d6d;
      background: black;
    }
  }
`;

const Contact = () => {
  const { warTime } = useCounter();

  return (
    <>
      <GlobalStyle is1453={warTime} />
      <StyledBody>
        <StyledGrid>
          <span>Creator</span>
          <span>Ferhat Ucar</span>

          <span>Place</span>
          <span>Netherlands</span>

          <span>Github</span>
          <span>
            <Link
              url="https://github.com/FerhatUcar"
              text="Github.com/FerhatUcar"
            />
          </span>
          <span>LinkedIn</span>
          <span>
            <Link
              url="https://www.linkedin.com/in/ferhat-ucar-bb435283/"
              text="LinkedIn.com/FerhatUcar"
            />
          </span>
        </StyledGrid>
      </StyledBody>
    </>
  );
};

export default Contact;
