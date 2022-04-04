import { CSSTransition } from "react-transition-group";
import {
  StyledInnerMenu,
  StyledMenuSider,
  StyledCloseButton,
} from "./MenuStyle";
import React, { FC } from "react";
import { Link } from "react-router-dom";

type MenuProps = {
  openMenu: boolean;
  handleOpenMenu: () => void;
};

const Menu: FC<MenuProps> = ({ openMenu, handleOpenMenu }) => {
  const nodeRef = React.useRef(null);

  return (
    <CSSTransition
      in={openMenu}
      timeout={300}
      unmountOnExit
      nodeRef={nodeRef}
      classNames="menu"
    >
      <StyledMenuSider ref={nodeRef}>
        <StyledInnerMenu>
          <Link to="/" onClick={handleOpenMenu}>Home</Link>
          <Link to="/sultans" onClick={handleOpenMenu}>The Sultans</Link>
          <Link to="/contact" onClick={handleOpenMenu}>Contact</Link>
          <StyledCloseButton onClick={handleOpenMenu} className="close" />
        </StyledInnerMenu>
      </StyledMenuSider>
    </CSSTransition>
  );
};

export default Menu;
