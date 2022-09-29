import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { navTitle } from "../../utils/data";
import "./Navbar.css";
import { BsCart3, BsSearch } from "react-icons/bs";
import { BiMenuAltLeft } from "react-icons/bi";
import {
  AiOutlineUser,
  AiOutlineHeart,
  AiOutlineGlobal,
  AiOutlineClose,
} from "react-icons/ai";
import { useWindowInner } from "../../hooks/useWindowInner";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const { isMobile } = useWindowInner();

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <div className="logo">
            <Link to="/">
              {/* <img src={!isScrolled ? logo : logoColor} alt={logo} /> */}
              LOGO
            </Link>
          </div>

          <div className="menu-icon" onClick={handleClick}>
            <span className="flex">
              {click ? <AiOutlineClose /> : <BiMenuAltLeft />}
            </span>
          </div>

          <ul className={click ? "nav-menu active " : "nav-menu"}>
            {navTitle.map((item, index) => (
              <li className="nav-item" key={index}>
                <NavLink
                  to={item.path}
                  className={"nav-links "}
                  onClick={() => {
                    handleClick();
                  }}
                >
                  {item.title}
                </NavLink>
              </li>
            ))}
            {isMobile && (
              <div className="input-topbar">
                <input type="text" />
                <button>
                  <BsSearch />
                </button>
              </div>
            )}
          </ul>
          <div className="section--topbar-left">
            <div className="icons-topbar">
              <Link to="/cart" className="icon-topbar topbar-cart">
                <BsCart3 />
              </Link>
              <Link to="/favourite" className="icon-topbar topbar-heart">
                <AiOutlineHeart />
              </Link>
              <Link to="/signup" className="icon-topbar topbar-user">
                <AiOutlineUser />
              </Link> 
              <Link to="/profile"  className="icon-topbar topbar-global">
                <AiOutlineGlobal />
              </Link>
            </div>
            {!isMobile && (
              <div className="input-topbar">
                <input type="text" />
                <button>
                  <BsSearch /> 
                </button>
              </div>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
