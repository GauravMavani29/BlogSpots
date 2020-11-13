import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Axios from "axios";
function MainPage() {
  const [postList, setPostList] = useState([]);
  let history = useHistory();
  useEffect(() => {
    Axios.get("http://localhost:3001/api/get").then((data) => {
      console.log(postList);
      setPostList(data.data);
    });
  }, []);
  console.log(postList);
  return (
    <div className="MainPage">
      <div className="PostContainer">
        {postList.map((val, key) => {
          return (
            <div
              className="Post"
              key={key}
              onClick={() => {
                history.push(`/post/${val.id}`);
              }}
            >
              <h1>{val.title}</h1>
              <p>
                {val.post_text.length > 500
                  ? val.post_text.substring(0, 500) + " ...."
                  : val.post_text}
              </p>
              <h4>{val.user_name}</h4>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default MainPage;
