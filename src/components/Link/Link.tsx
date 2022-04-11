import { SANGRIA_LIGHT } from "../../constants";
import styled from "styled-components";
import { FC } from "react";

const StyledLink = styled.a`
  color: white;
  transition: color 0.1s ease-in-out;

  &:hover {
    color: ${SANGRIA_LIGHT};
  }
`;

type LinkProps = {
  url: string;
  text: string;
};

const Link: FC<LinkProps> = ({ url, text }) => (
  <StyledLink href={url} target="_blank">
    {text}
  </StyledLink>
);

export default Link;
