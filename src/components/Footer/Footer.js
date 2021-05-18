import React from "react";
import "./Footer.css";

function Footer(props) {
  return (
    <>
      <footer>
        <div className="row">
          <ul className="socials">
            <li>
              <a href="#">
                <i class="fab fa-facebook-square" aria-hidden="true"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i class="fab fa-instagram" aria-hidden="true"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i class="fab fa-linkedin" aria-hidden="true"></i>
              </a>
            </li>
          </ul>
        </div>
        <div className="row"></div>
      </footer>
    </>
  );
}

export default Footer;
