import React from "react";

function Navbar(props) {
  return (
    <nav className="navbar fixed-top">
      <div className="container">
        <div className="col-3">
          <a className="navbar-brand" href="/">
            Tweety
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
