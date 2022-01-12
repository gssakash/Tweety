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
              src="https://lh3.googleusercontent.com/ogw/ADea4I7NuvOfRWCDPCcaEX1oZO1WBADhAEQWWZpPd5MM=s83-c-mo"
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
