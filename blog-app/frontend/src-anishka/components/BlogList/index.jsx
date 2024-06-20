import React from "react";
import PropTypes from "prop-types";

import BlogItem from "../BlogItem";
import "./index.css"

export default function BlogList({ blogPosts,onBlogEdit,onBlogDelete }) {
  if (!blogPosts && !blogPosts?.length) {
    return null;
  }

  // TODO: Styling
  return (
    <div className="d-flex w-100">
      {blogPosts.map((blog, index) => {
        return (
          <BlogItem
            key={index}
            index={index}
            blog={blog}
            setBlog={() => {}}
            imageOrientation={"top"}
            onBlogEdit={onBlogEdit}
            onBlogDelete={onBlogDelete}
          />
        );
      })}
    </div>
  );
}

BlogList.propTypes = {
    blogPosts: PropTypes.array.isRequired,
    onBlogEdit: PropTypes.func.isRequired,
    onBlogDelete: PropTypes.func.isRequired,
};