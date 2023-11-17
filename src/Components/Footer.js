import React from "react";

const Footer = () => {
  return (
    <>
      <footer>
        <img src="" alt="logo" />
        <div className="doormatNavigation">
          <h5>Doormat navigation</h5>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/">About</a>
            </li>
            <li>
              <a href="/">Menu</a>
            </li>
            <li>
              <a href="/">Reservation</a>
            </li>
            <li>
              <a href="/">Order online</a>
            </li>
            <li>
              <a href="/">Login</a>
            </li>
          </ul>
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
      ;
    </>
  );
};

export default Footer;
