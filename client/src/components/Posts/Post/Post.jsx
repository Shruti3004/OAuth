import React from "react";
import moment from "moment";
import { useDispatch } from "react-redux";
import { deletePost } from "../../../actions/posts";

function Post({ post, setCurrentId }) {
  const dispatch = useDispatch();
  return (
    <div className="col-lg-3 col-md-3 col-sm-12 col-12 mb-4">
      <div className="card h-100" style={{ background: "transparent" }}>
        <ul className="list-group">
          <li className="list-group-item">{post.creator}</li>
          <li className="list-group-item">
            {moment(post.createdAt).fromNow()}
          </li>
          <li className="list-group-item">{post.title}</li>
        </ul>
        <button
          className="btn btn-primary"
          onClick={() => setCurrentId(post._id)}
        >
          Edit
        </button>
        <button
          className="btn btn-danger"
          onClick={() => dispatch(deletePost(post._id))}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default Post;
