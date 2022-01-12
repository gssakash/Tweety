import { posts } from "aleph-js";
import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";

function PostFormModal(props) {
  const [postContent, setPostContent] = useState("");
  const [loading, setLoading] = useState(false);

  const handleUserPost = (e) => {
    setPostContent(e.target.value);
  };

  const handleSubmitPost = async (e) => {
    e.preventDefault();
    setLoading(true);
    // console.log(postContent);
    posts
      .submit(
        props.alephAccount.address,
        "chat",
        { body: postContent },
        {
          account: props.alephAccount,
          channel: "TEST",
          api_server: "https://api2.aleph.im",
          ref: "hall"
        }
      )
      .then((result) => {
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
      });
  };

  return (
    <Modal show={props.modalOpen}>
      {loading ? (
        <Modal.Body>
          <div className="progress">
            <div
              className="progress-bar"
              role="progressbar"
              style={{ width: "25%" }}
              aria-valuenow="25"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>
        </Modal.Body>
      ) : (
        <div>
          <Modal.Body>
            <div className="modal-body">
              <label>Post Here</label>
              <textarea
                onChange={handleUserPost}
                placeholder="Enter your Message..."
                className="form-control"
              />
            </div>
          </Modal.Body>
          <Modal.Footer>
            <button
              type="button"
              className="btn btn-primary"
              onClick={handleSubmitPost}
            >
              Post
            </button>
          </Modal.Footer>
        </div>
      )}
    </Modal>
  );
}

export default PostFormModal;
