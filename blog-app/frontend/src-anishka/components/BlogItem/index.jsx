import React from "react";
import { useNavigate } from "react-router-dom";

import BlogItemText from "../BlogItemText";
import EditButtons from "../EditButtons";

import "../../App.css";
import "./index.css";

export default function BlogItem({
  index,
  blogPost,
  onBlogEdit,
  onBlogDelete,
  imageOrientation,
}) 
{
  const navigate = useNavigate();
  const navigateToBlog = () => {
    if (!onBlogEdit && !onBlogDelete) {
      navigate(`/blog/${blogPost.id}`);
    }
  };

  const EditButtonsContainer = () => {
    return (
      <EditButtons
        onEdit={() => onBlogEdit(blogPost)}
        onDelete={() => onBlogDelete(blogPost)}
      />
    );
  };
  

  if (imageOrientation === "top") {
    return (
      <div key={index} className="card-1" onClick={navigateToBlog}>
      <img src={blogPost.image} className="card-img-top" alt="..." />
        <div className="card-text-bottom">
          <BlogItemText blogPost={blogPost} headerFontSize="20px" />
          {onBlogEdit && onBlogDelete ? <EditButtonsContainer /> : null}
        </div>
      </div>
    );
  } else {
    return (
      <div
        key={index}
        className="card-2"
        onClick={navigateToBlog}
      >
        <img src={blogPost.image} className="card-img-left" alt="..." />
        <div style={{ position: "relative" }} className="card-text-right">
          <BlogItemText blogPost={blogPost} headerFontSize="20px" />
          {onBlogEdit && onBlogDelete ? <EditButtonsContainer /> : null}
        </div>
      </div>
    );
  }
}