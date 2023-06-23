import React, { useState } from "react";
import "./sidebar.css";
import logo11 from "../../assets/logo11.svg";
const Sidebar = () => {
  const [show, setShow] = useState(false);
  return (
    <>
      <aside className={show ? "aside show-menu " : "aside"}>
        <a href="#home" className="nav__logo">
          <img src={logo11} alt="logo"></img>
        </a>
        <nav className="nav">
          <div className="nav">
            <div className="nav__menu">
              <ul className="nav__list">
                <li className="nav__item">
                  <a href="#home" className="nav__link">
                    <i className="icon-home"></i>
                  </a>
                </li>
                <li className="nav__item">
                  <a href="#about" className="nav__link">
                    <i className="icon-user-following"></i>
                  </a>
                </li>
                <li className="nav__item">
                  <a href="#services" className="nav__link">
                    <i className="icon-briefcase"></i>
                  </a>
                </li>
                <li className="nav__item">
                  <a href="#resume" className="nav__link">
                    <i className="icon-graduation"></i>
                  </a>
                </li>
                <li className="nav__item">
                  <a href="#portfolio" className="nav__link">
                    <i className="icon-layers"></i>
                  </a>
                </li>
                <li className="nav__item">
                  <a href="#blog" className="nav__link">
                    <i className="icon-note"></i>
                  </a>
                </li>
                <li className="nav__item">
                  <a href="#contact" className="nav__link">
                    <i className="icon-bubble"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div className="nav__footer">
          <span className="cobyright">&copy; 2022 - 2023.</span>
        </div>
      </aside>
      <div
        className={show ? "nav__toggle nav__toggle-open" : "nav__toggle"}
        onClick={() => setShow(!show)}>
        <i className="icon-menu"></i>
      </div>
    </>
  );
};

export default Sidebar;
