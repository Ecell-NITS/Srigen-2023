import { useState } from "react";
import style from "./Navbar.module.scss";

const Navbar = () => {
  const [burger, setBurger] = useState(false);
  const toggleMenu = () => {
    setBurger(!burger);
  };
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      toggleMenu();
    }
  };

  return (
    <nav className={style.navbar}>
      <img className={style.logo} src="/logos/srijan-logo.svg" alt="srijan-logo"></img>
      <div
        className={style.hamburger}
        role="button"
        tabIndex={0}
        onClick={toggleMenu}
        onKeyDown={handleKeyDown}
      >
        <div className={style.ham}>
          <span className={style.bar}></span>
          <span className={style.bar}></span>
        </div>
      </div>
      <div className={burger ? `${style.activate}` : `${style.menu}`}>
        <ul className={style.mainMenu}>
          <li className={`${style.active} ${style.item}`}>
            <a className={style.links} href="#!">
              Home
            </a>
          </li>
          <li className={style.item}>
            <a className={style.links} href="#!">
              Gallery
            </a>
          </li>
          <li className={style.item}>
            <a className={style.links} href="#!">
              Events
            </a>
          </li>
          <li className={style.item}>
            <a className={style.links} href="#!">
              Workshops
            </a>
          </li>
          <li className={style.item}>
            <a className={style.links} href="#!">
              Speakers
            </a>
          </li>
          <li className={style.item}>
            <a className={style.links} href="#!">
              Team
            </a>
          </li>
          <li className={style.item}>
            <a className={style.links} href="#!">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
