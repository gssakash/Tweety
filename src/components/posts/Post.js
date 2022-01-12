import React, { useState } from "react";

function Post(props) {
  const [itemContent, setItemContent] = useState(
    JSON.parse(props.post.item_content)
  );
  const [address, setAddress] = useState(
    props.truncateAddress(itemContent.address)
  );
  const [timePosted, setTimePosted] = useState(() => {
    return new Date(itemContent.time + 1000).toLocaleString();
  });
  const [content, setContent] = useState(itemContent.content.body);

  return (
    <div className="post card my-2">
      <div className="card-body">
        <p className="user">
          <b>{address}</b>
          <span className="time"> {timePosted} </span>
        </p>
        <p>{content}</p>
      </div>
    </div>
  );
}

export default Post;
