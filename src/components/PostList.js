import React from "react";
import { posts } from "../default.js";
import PostItem from "./PostItem";

import "./PostList.css";

const PostList = () => {
  return (
    <main class="main">
      <div class="container-fluid">
        <div className="post-list">
          <div className="row">
            {posts.map((item, key) => {
              return <PostItem key={key} item={item} index={key} />;
            })}
          </div>
        </div>
      </div>
    </main>
  );
};

export default PostList;
