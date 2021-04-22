import React, { useState } from "react";
import { useEffect } from "react";
import FileBase from "react-file-base64";
import { useDispatch, useSelector } from "react-redux";
import { createPost, updatePost } from "../../actions/posts";

function Form({ id, setCurrentId }) {
  const initialState = {
    creator: "",
    title: "",
    message: "",
    tags: "",
    selectedFile: "",
  };
  const [postData, setPostData] = useState(initialState);
  const updatedPost = useSelector((state) =>
    id ? state.posts.find((post) => post._id === id) : null
  );
  const dispatch = useDispatch();

  useEffect(() => {
    if (updatedPost) setPostData(updatedPost);
  }, [updatedPost]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (id) {
      dispatch(updatePost(id, postData));
    } else {
      dispatch(createPost(postData));
    }
    setCurrentId(null);
    setPostData(initialState);
  };

  return (
    <div className="container">
      <h1>Form</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter Creator"
          className="form-control mt-4"
          value={postData.creator}
          onChange={(e) =>
            setPostData({ ...postData, creator: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="Enter title"
          className="form-control mt-4"
          value={postData.title}
          onChange={(e) => setPostData({ ...postData, title: e.target.value })}
        />
        <input
          type="text"
          placeholder="Enter message"
          className="form-control mt-4"
          value={postData.message}
          onChange={(e) =>
            setPostData({ ...postData, message: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="Enter tags"
          className="form-control mt-4"
          value={postData.tags}
          onChange={(e) => setPostData({ ...postData, tags: e.target.value.split(',') })}
        />
        <div className="mt-4">
          <FileBase
            type="file"
            multiple={false}
            onDone={({ base64 }) =>
              setPostData({ ...postData, selectedFile: base64 })
            }
          />
        </div>
        <button className="btn mt-4 btn-primary" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Form;
