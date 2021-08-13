import axios from "axios";
import React from "react";
const URL = "https://jsonplaceholder.typicode.com/comments";

function axiosUtility() {
  //Incomplete
  const instance = axios.create({
    baseURL: URL,
    params: { postId: 123 },
  });
}

export default axiosUtility;
