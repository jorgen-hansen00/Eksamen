import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="main-footer">
      <div className="container">
        <div className="row">
          {/* Column1 */}
          <div className="col">
            <h4>Eksempel</h4>
            <h1 className="list-unstyled">
              <li>342-420-6969</li>
              <li>Moscow, Russia</li>
              <li>123 Streeet South North</li>
            </h1>
          </div>
          {/* Column2 */}
          <div className="col">
            <h4>Kontakt</h4>
            <ui className="list-unstyled">
              <li>45237524</li>
              <li>eksempel@juh.com</li>
              <li>Truls HT</li>
            </ui>
          </div>
          {/* Column3 */}
          <div className="col">
            <h4>Navigasjon her</h4>
            <ui className="list-unstyled">
              <li>Home</li>
              <li>About</li>
              <li>OSV</li>
            </ui>
          </div>
        </div>
        <hr />
        <div className="row">
          <p className="col-sm">
            &copy;{new Date().getFullYear()} Slimjet | All rights reserved |
            Terms Of Service | Privacy
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
