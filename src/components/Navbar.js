import React from "react";
import PostButton from "./posts/PostButton";

function Navbar(props) {
  return (
    <nav className="navbar fixed-top">
      <div className="container">
        <div className="col-3">
          <a className="navbar-brand main-title" href="/">
            Tweety.
          </a>
          <PostButton setModalOpen={props.setModalOpen} />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
