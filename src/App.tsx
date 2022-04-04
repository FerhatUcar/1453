import { Header, Menu } from "./blocks/index";

import { Outlet } from "react-router-dom";
import { useState } from "react";

const App = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const handleOpenMenu = () => setOpenMenu(!openMenu);

  return (
    <>
      <Menu openMenu={openMenu} handleOpenMenu={handleOpenMenu} />
      <Header openMenu={handleOpenMenu} />

      <Outlet />
    </>
  );
};

export default App;
