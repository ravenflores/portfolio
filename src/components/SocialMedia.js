import React from "react";
import {
  AiFillGithub,
  AiFillInstagram,
} from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import { FaLinkedinIn,FaTelegram } from "react-icons/fa";

function SocialMedia() {
  return (
    <ul className="home-about-social-links">
      <li className="social-icons">
        <a
          href="https://github.com/ravenflores"
          target="_blank"
          rel="noreferrer"
          className="icon-colour  home-social-icons"
        >
          <AiFillGithub className="social-icon" />
        </a>
      </li>
      <li className="social-icons">
        <a
          href="mailto:ravendonly@gmail.com"
          target="_blank"
          rel="noreferrer"
          className="icon-colour home-social-icons"
        >
          <MdEmail className="social-icon" />
        </a>
      </li>
      <li className="social-icons">
        <a
          href="https://t.me/ravendonly1"
          target="_blank"
          rel="noreferrer"
          className="icon-colour home-social-icons"
        >
          <FaTelegram className="social-icon" />
        </a>
      </li>
    </ul>
  );
}
export default SocialMedia;
