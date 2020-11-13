import React, { useState } from "react";
import Axios from "axios";
import "../App.css";

function CreatePost() {
  const [username, setUserName] = useState("");
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [file, setFile] = useState("");
  const submitPost = () => {
    Axios.post("http://localhost:3001/api/create", {
      username: username,
      title: title,
      text: text,
    });
  };

  // const changeFile = (e) => {
  //   console.log(e.target.files[0]);
  //   setFile(...file, e.target.files[0]);
  //   console.log(file);
  // };
  return (
    <div className="CreatePost">
      <div className="uploadPost">
        <label htmlFor="">UserName</label>
        <input
          type="text"
          name=""
          onChange={(e) => setUserName(e.target.value)}
        />
        <label htmlFor="">Title</label>
        <input type="text" name="" onChange={(e) => setTitle(e.target.value)} />
        <label htmlFor="">Post Text</label>
        <textarea
          name=""
          cols="30"
          rows="10"
          onChange={(e) => setText(e.target.value)}
        ></textarea>

        <button onClick={submitPost}>Submit Post</button>
      </div>
    </div>
  );
}

export default CreatePost;
