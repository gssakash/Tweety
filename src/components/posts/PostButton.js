import React, { useState } from "react";

function PostButton(props) {
  return (
    <div>
      <button
        type="button"
        class="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Launch demo modal
      </button>
    </div>
  );
}

export default PostButton;
