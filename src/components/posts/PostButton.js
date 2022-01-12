import React, { useState } from "react";

function PostButton(props) {
  const openModal = (e) => {
    e.preventDefault();
    props.setModalOpen(true);
  };

  return (
    <div>
      <button type="button" className="btn btn-primary" onClick={openModal}>
        Submit Post 
      </button>
    </div>
  );
}

export default PostButton;
