import React from "react";

function Footer() {
  return (
    <footer className="page-footer black" style = {{
      textAlign: "center",
      padding: "20px",
      left: "0",
      bottom: "0",
      width: "100%",
    }}>
      <div className="container">
        <div className="row">
          <div>
            <h5 className="white-text">Footer Content</h5>
            <p className="grey-text text-lighten-4">Footer Content</p>
          </div>
        </div>
      </div>
      <div className="footer-copyright">
        <div className="container">
          © 2020 Marco Greenberg. All Rights Reserved.{" "}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
