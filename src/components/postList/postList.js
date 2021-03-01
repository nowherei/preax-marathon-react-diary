import React from "react";
import PostListItem from "../postListItem/postListItem";
import "./postList.css";
import { formatDate } from "../../helper.js";

function PostList({ posts }) {
  return (
    <>
      <div className="post-list">
        {posts.map((item, key) => {
          const { title, description, date, mood, img } = item;
          return (
            <PostListItem
              key={key}
              imgSmile={mood}
              title={title}
              date={formatDate(date)}
              descr={description}
              img={img.src.medium}
            />
          );
        })}
      </div>
    </>
  );
}

export default PostList;
