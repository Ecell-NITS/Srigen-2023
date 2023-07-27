import { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
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

  useEffect(() => {
    if (burger === true) {
      document.body.style.height = "100dvh";
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.height = "";
      document.body.style.overflow = "";
    }
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
          <span className={burger ? `${style.barActive}` : `${style.bar}`}></span>
          <span className={burger ? `${style.barActive}` : `${style.bar}`}></span>
        </div>
      </div>
      <div className={burger ? `${style.activate}` : `${style.menu}`} ref={menuRef}>
        <ul className={style.mainMenu}>
          <li className={`${style.active} ${style.item}`}>
            <NavLink
              className={({ isActive }) => (isActive ? style.linkActive : style.links)}
              to="#!"
            >
              Home
            </NavLink>
          </li>
          <li className={style.item}>
            <NavLink
              className={({ isActive }) => (isActive ? style.linkActive : style.links)}
              to="#!"
            >
              Gallery
            </NavLink>
          </li>
          <li className={style.item}>
            <NavLink
              className={({ isActive }) => (isActive ? style.linkActive : style.links)}
              to="#!"
            >
              Events
            </NavLink>
          </li>
          <li className={style.item}>
            <NavLink
              className={({ isActive }) => (isActive ? style.linkActive : style.links)}
              to="#!"
            >
              Workshops
            </NavLink>
          </li>
          <li className={style.item}>
            <NavLink
              className={({ isActive }) => (isActive ? style.linkActive : style.links)}
              to="#!"
            >
              Speakers
            </NavLink>
          </li>
          <li className={style.item}>
            <NavLink
              className={({ isActive }) => (isActive ? style.linkActive : style.links)}
              to="#!"
            >
              Team
            </NavLink>
          </li>
          <li className={style.item}>
            <NavLink
              className={({ isActive }) => (isActive ? style.linkActive : style.links)}
              to="#!"
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
