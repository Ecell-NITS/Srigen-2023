import { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import style from "./Navbar.module.scss";

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  const toggleMenu = () => {
    setMenu(!menu);
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
        setMenu(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
    };
  }, []);

  useEffect(() => {
    if (menu === true) {
      document.body.style.height = "100dvh";
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.height = "";
      document.body.style.overflow = "";
    }
  }, [menu]);

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
        <div className={menu ? `${style.hamActive}` : `${style.ham}`} ref={hamRef}>
          <span className={menu ? `${style.barActive}` : `${style.bar}`}></span>
          <span className={menu ? `${style.barActive}` : `${style.bar}`}></span>
        </div>
      </div>
      <div className={menu ? `${style.activate}` : `${style.menu}`} ref={menuRef}>
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
