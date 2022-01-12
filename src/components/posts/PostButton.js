import React, { useState } from "react";

function PostButton(props) {
  const openModal = (e) => {
    e.preventDefault();
    props.setModalOpen(true);
  };

  return (
    <div className="submit-btn-container">
      <button
        type="button"
        id="submit-btn"
        className="btn btn-primary"
        onClick={openModal}
      >
        Submit Post
      </button>
    </div>
  );
}

export default PostButton;
