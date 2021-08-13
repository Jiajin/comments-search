import axios from "axios";
import React, { useState } from "react";
import "./CommentSearcher.css";
import Loader from "./Loader";
const URL = "https://jsonplaceholder.typicode.com/comments";

function CommentSearcher() {
  const [userInput, setUserInput] = useState("");
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  function handleChange(event) {
    event.preventDefault();
    setUserInput(event.target.value);
  }
  async function submitHandler() {
    setIsLoading(true);
    try {
      let axiosResp = await axios(`${URL}?postId=${userInput}`);
      console.log(axiosResp);
      setIsLoading(false);
      setComments(axiosResp.data);
    } catch (error) {
      console.log("ERROR: " + error.message);
      setIsLoading(false);
    }
    // axios(`${URL}?postId=${userInput}`).then((res) => {
    //   console.log(res.data);
    //   setIsLoading(false);
    //   setComments(res.data);
    // });
  }

  return (
    <div>
      <input
        type="text"
        label="postid"
        value={userInput}
        onChange={handleChange}
      ></input>
      <button onClick={submitHandler}>Submit</button>
      {/* <CommentDetails data={comments}></CommentDetails> */}

      {/* <div>Comment: {comments.map((comment) => comment.body)}</div>
      <br></br>
      <div>Name: {comments.map((comment) => comment.name)}</div> */}

      {isLoading ? (
        <Loader></Loader>
      ) : comments.length === 0 ? (
        <div>No comments available for postid: {userInput} </div>
      ) : (
        comments.map(({ name, body }) => (
          <div className="comment">
            <div>Author: {name}</div>
            <div>Comment: {body}</div>
          </div>
        ))
      )}
    </div>
  );
}

export default CommentSearcher;
