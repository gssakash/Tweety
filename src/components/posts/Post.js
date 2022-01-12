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
    <div className="post card my-3">
      <div className="card-body">
        <p>{address}</p>
        <p>{timePosted}</p>
        <p>{content}</p>
      </div>
    </div>
  );
}

export default Post;
