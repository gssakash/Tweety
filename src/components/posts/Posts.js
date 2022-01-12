import React, { useState, useEffect } from "react";
import { posts } from "aleph-js"; //Gives me Dummy data to use
import Post from "./Post";

function Posts(props) {
  const [loadedPosts, setLoadedPosts] = useState([]);

  const loadPosts = async () => {
    const response = await posts.get_posts("chat", {
      refs: ["hall"]
    });
    setLoadedPosts(response.posts);

    const url = "wss://api2.aleph.im/api/ws0/messages?contentTypes=chat";

    const connection = new WebSocket(url);

    connection.onmessage = (e) => {
      // console.log("Socket Msg: ", JSON.parse(e.data));
      // setLoadedPosts((existingPosts) => [JSON.parse(e.data), ...existingPosts]);
    };
  };

  useEffect(() => {
    loadPosts();
  }, []);

  return (
    <div className="posts">
      <h2>Welcome to Tweety!</h2>
      {loadedPosts.map((post) => (
        <Post
          key={post.item_hash}
          post={post}
          truncateAddress={props.truncateAddress}
          timeSince={props.timeSince}
        />
      ))}
    </div>
  );
}

export default Posts;
