import React, { useState, useEffect } from "react";
import { posts } from "aleph-js"; //Gives me Dummy data to use
import Post from "./Post";

function Posts(props) {
  const [loadedPosts, setLoadedPosts] = useState([]);

  let loadPosts = async () => {
    const response = await posts.get_posts("chat", {
      refs: ["hall"]
    });
    setLoadedPosts(response.posts);
  };

  useEffect(() => {
    loadPosts();
  }, []);

  return (
    <div className="posts">
      {loadedPosts.map((post) => (
        <Post
          key={post.item_hash}
          post={post}
          truncateAddress={props.truncateAddress}
        />
      ))}
    </div>
  );
}

export default Posts;
