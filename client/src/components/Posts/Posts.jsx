import React from "react";
import { useSelector } from "react-redux";
import Post from "./Post/Post";

function Posts({ setCurrentId }) {
  const posts = useSelector((state) => state.posts);
  console.log(posts);
  return (
    <div className="container">
      <h1>Posts</h1>
      <div className="row">      
      {posts.length ? (
        <>
          {posts.map((post) => {
            return (
              (
              <Post key={post.id} post={post} setCurrentId={setCurrentId}  />
              )
            );
          })}
        </>
      ) : (
        ""
      )}
      </div>      
    </div>
  );
}

export default Posts;
