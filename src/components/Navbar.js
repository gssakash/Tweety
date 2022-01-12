import React from "react";

function Navbar(props) {
  return (
    <nav className="navbar fixed-top">
      <div className="container">
        <div className="col-3">
          <a className="navbar-brand main-title" href="/">
            Tweety.
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
