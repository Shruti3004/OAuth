import React, { useEffect, useState } from "react";
import Posts from "../Posts/Posts";
import Form from "../Form/Form";
import { useDispatch } from "react-redux";
import { getPosts } from "../../actions/posts";

function Home() {
  const dispatch = useDispatch();
  const [currentId, setCurrentId] = useState("");
  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-8 col-md-6 col-sm-12 col-12">
          <Posts setCurrentId={setCurrentId} />
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12 col-12">
          <Form id={currentId} setCurrentId={setCurrentId} />
        </div>
      </div>
    </div>
  );
}

export default Home;
