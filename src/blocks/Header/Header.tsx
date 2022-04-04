import React, { FC } from "react";
import { useCounter } from "../../hooks/useCounter";
import { StyledHeader, StyledInnerBox, StyledHamburger } from "./HeaderStyle";
import MenuIcon from "../../assets/img/menu.svg";

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
        <div>{currentFormattedTime}</div>
      </StyledInnerBox>
    </StyledHeader>
  );
};

export default Header;
