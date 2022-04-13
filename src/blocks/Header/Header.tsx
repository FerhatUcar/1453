import React, { FC } from "react";
import { useCounter } from "../../hooks";
import {
  StyledHeader,
  StyledInnerBox,
  StyledHamburger,
  StyledHeaderRightContent,
  StyledCurrentTime,
  StyledHeaderTitle,
  FlexItems,
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
        <FlexItems>
          <StyledHamburger onClick={openMenu}>
            <img src={MenuIcon} alt="menu" />
          </StyledHamburger>
          <StyledHeaderTitle>1453.info</StyledHeaderTitle>
        </FlexItems>
        <StyledHeaderRightContent>
          <Player />
          <StyledCurrentTime>{currentFormattedTime}</StyledCurrentTime>
        </StyledHeaderRightContent>
      </StyledInnerBox>
    </StyledHeader>
  );
};

export default Header;
