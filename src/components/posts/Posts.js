import React, { useState, useEffect } from "react";
import { posts } from "aleph-js"; //Gives me Dummy data to use
import Post from "./Post";

function Posts(props) {
  const [loadedPosts, setLoadedPosts] = useState([]);
  const [socketConnected, setSocketConnected] = useState(false);

  const loadPosts = async () => {
    const response = await posts.get_posts("chat", {
      refs: ["hall"]
    });
    setLoadedPosts(response.posts);
  };

  useEffect(() => {
    loadPosts();
  }, []);

  useEffect(() => {
    if (loadedPosts.length > 0 && !socketConnected) {
      const url = "wss://api2.aleph.im/api/ws0/messages?contentTypes=chat";

      const connection = new WebSocket(url);

      connection.onmessage = (e) => {
        let post = JSON.parse(e.data);
        if (post.item_content && post.content.type === "chat") {
          if (post.content.address === props.walletAddress) {
            props.setModalOpen(false);
          }

          const hash = post.item_hash;
          const loadedData = loadedPosts.some((element) => {
            return element.item_hash === hash;
          });

          if (!loadedData) {
            setLoadedPosts((previousPosts) => [post, ...previousPosts]);
          }
        }
      };

      setSocketConnected(true);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loadedPosts]);

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
