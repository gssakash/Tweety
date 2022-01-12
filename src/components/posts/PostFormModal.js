import { posts } from "aleph-js";
import React, { useState } from "react";

function PostFormModal(props) {
  const [postContent, setPostContent] = useState("");
  const handleUserPost = (e) => {
    setPostContent(e.target.value);
  };

  const handleSubmitPost = async (e) => {
    e.preventDefault();
    // console.log(postContent);
    await posts.submit(
      props.alephAccount.address,
      "chat",
      { body: postContent },
      {
        account: props.alephAccount,
        channel: "TEST",
        api_server: "https://api2.aleph.im",
        "ref":"hall"
      }
    );
  };

  return (
    <div
      className="modal fade"
      id="exampleModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">
              Modal title
            </h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <label>Post Here</label>
            <textarea
              onChange={handleUserPost}
              placeholder="Enter your Message..."
              className="form-control"
            />
          </div>
          <div className="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
            <button
              type="button"
              className="btn btn-primary"
              onClick={handleSubmitPost}
            >
              Post
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PostFormModal;
