import React, { useState } from "react";

function Post(props) {
  const [itemContent, setItemContent] = useState(
    JSON.parse(props.post.item_content)
  );
  const [address, setAddress] = useState(
    props.truncateAddress(itemContent.address)
  );
  const [timePosted, setTimePosted] = useState(() => {
    return props.timeSince(new Date(itemContent.time + 1000)); //fix this #TODO
  });
  const [content, setContent] = useState(itemContent.content.body);

  return (
    <div className="post card my-2">
      <div className="card-body">
        <div className="row">
          <div className="col-4">
            <img
              src="https://i.pinimg.com/736x/3f/94/70/3f9470b34a8e3f526dbdb022f9f19cf7.jpg"
              alt="Profile Pic"
              id="profile-image"
            />
          </div>
          <div className="col-8">
            <p className="user">
              <b>{address}</b> . <span className="time"> {timePosted} </span>
            </p>
            <p>{content}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post;
