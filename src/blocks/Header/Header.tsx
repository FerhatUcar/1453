import React, { FC } from "react";
import { useCounter } from "../../hooks";
import {
  StyledHeader,
  StyledInnerBox,
  StyledHamburger,
  StyledHeaderRightContent,
} from "./HeaderStyle";
import { MenuIcon } from "../../assets";
import Player from "../../components/Player/Player";

type HeaderProps = {
  openMenu: () => void;
};

const Header: FC<HeaderProps> = ({ openMenu }) => {
  const { currentFormattedTime } = useCounter();

  return (
    <StyledHeader>
      <StyledInnerBox>
        <StyledHamburger onClick={openMenu}>
          <img src={MenuIcon} alt="menu" />
        </StyledHamburger>
        <StyledHeaderRightContent>
          <Player />
          <div>{currentFormattedTime}</div>
        </StyledHeaderRightContent>
      </StyledInnerBox>
    </StyledHeader>
  );
};

export default Header;
