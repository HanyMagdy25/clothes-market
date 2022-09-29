import React from "react";
import { Link } from "react-router-dom";
import { help, navTitle } from "../../utils/data";
import "./Footer.css";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaTelegramPlane,
} from "react-icons/fa";
import { FiYoutube } from "react-icons/fi";
import { BiCopyright } from "react-icons/bi";

export default function Footer() {
  return (
    <footer>
      <div className="container-less">
        <div className="footer-top">
          <div className="footer-first">
            <h2>الفئات</h2>
            {navTitle.map((item, index) => (
              <Link className="footer-nav" key={index} to={item.path}>
                {item.title}
              </Link>
            ))}
          </div>
          <div className="footer-first">
            <h2>المساعدة</h2>
            {help.map((item, index) => (
              <Link className="footer-nav" key={index} to={item.path}>
                {item.title}
              </Link>
            ))}
          </div>
          <div className="footer-third">
            <h2>تابعنا على</h2>
            <div className="footer-icons">
              <Link to="/">
                <FaFacebookF />
              </Link>
              <Link to="/">
                <FiYoutube />
              </Link>
              <Link to="/">
                <FaTwitter />
              </Link>
              <Link to="/">
                <FaInstagram />
              </Link>
            </div>
            <h2>إشترك في نشرة أخبارنا</h2>
            <div className="input-topbar">
              <input type="email" placeholder="البريد الإلكتروني" />
              <button>
                <FaTelegramPlane />
              </button>
            </div>
          </div>
        </div>
        <hr />
        <div className="footer-copy">
          <BiCopyright />
           جميع الحقوق محفوظة 
          <a href="https://googole.om"> Software Cloud 2 </a>
        </div>
      </div>
    </footer>
  );
}
