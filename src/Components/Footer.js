import React from "react";
import Nav from "./Nav";

const Footer = () => {
  return (
    <>
      <footer>
        <img src="" alt="logo" />
        <div className="doormatNavigation">
          <h5>Doormat navigation</h5>
          <Nav />
        </div>
        <div className="contact">
          <h5>Contact</h5>
          <ul>
            <li>Adress</li>
            <li>Phone number</li>
            <li>Email</li>
          </ul>
        </div>
        <div className="socialMediaLinks">
          <h5>Social media links</h5>
          <ul>
            <li>Instagram</li>
            <li>Facebook</li>
          </ul>
        </div>
      </footer>
    </>
  );
};

export default Footer;
