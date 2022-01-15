import { posts } from "aleph-js";
import React, { useState, useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import swearjar from "swearjar-extended2";

function PostFormModal(props) {
  const [postContent, setPostContent] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (props.modalOpen) {
      setLoading(false);
    }
  }, [props.modalOpen]);

  const handleUserPost = (e) => {
    let userMessage = e.target.value;
    if (swearjar.profane(userMessage)) {
      alert("Such Messages are not Allowed.");
      props.setModalOpen(false);
    } else {
      setPostContent(userMessage);
    }
  };

  const close = (e) => {
    e.preventDefault();
    props.setModalOpen(false);
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
      .catch((error) => {
        setLoading(false);
      });
  };

  return (
    <Modal show={props.modalOpen} id="model-color">
      <Modal.Header className="py-0">
        <a className="closer" href="/" onClick={close}>
          x
        </a>
      </Modal.Header>
      {loading ? (
        <Modal.Body>
          <div className="p-4 text-center mb-5">
            <div className="lds-ripple">
              <div></div>
              <div></div>
            </div>
            <br /> <br />
            <p className="loader-footer">
              <b>Please confirm in your wallet.</b>
            </p>
          </div>
        </Modal.Body>
      ) : (
        <div>
          <Modal.Body>
            <div className="modal-body">
              {/* <label>Post Here</label> */}
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
              id="modal-post-btn"
              className="btn btn-primary"
              onClick={handleSubmitPost}
              disabled={postContent === "" || postContent === undefined}
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
