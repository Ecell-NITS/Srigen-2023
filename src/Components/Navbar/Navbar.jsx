import { useState, useEffect, useRef } from "react";
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
  const menuRef = useRef();
  const hamRef = useRef();

  useEffect(() => {
    const handler = (e) => {
      if (!menuRef.current.contains(e.target) && !hamRef.current.contains(e.target)) {
        setBurger(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

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
        <div className={burger ? `${style.hamActive}` : `${style.ham}`} ref={hamRef}>
          <span className={style.bar}></span>
          <span className={style.bar}></span>
        </div>
      </div>
      <div className={burger ? `${style.activate}` : `${style.menu}`} ref={menuRef}>
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
