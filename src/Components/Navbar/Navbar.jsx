import React from "react";
import nav from "../Navbar/Navbar.module.scss";
import { ReactComponent as NavbarIcon } from "../../assets/images/navbar_icon.svg";

const Navbar = () => {
  return (
    <nav>
      <div className={nav.navbar}>
        <div className={nav.navbar_block}>
          <NavbarIcon className={nav.navbar_icon} />
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
