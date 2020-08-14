import React from "react";
import "../Styles/MyBlogs.css";

export default function MyBlogs() {
  function MyBlogCard() {
    return (
      <div className="BlogTile">
        <div className="BlogTitle">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          eu ex ac eros porta ultricies at volutpat eros. Nam efficitur tempor
        </div>
        <div className="BlogDate">20-10-2001</div>
      </div>
    );
  }

  return (
    <div className="MyBlogs">
      <div className="Heading">Blogs</div>
      <div className="MyBlogsContent">
        <MyBlogCard />
        <MyBlogCard />
        <MyBlogCard />
        <MyBlogCard />
        <MyBlogCard />
        <MyBlogCard />
        <MyBlogCard />
        <MyBlogCard />
        <MyBlogCard />
        <MyBlogCard />
      </div>
    </div>
  );
}
