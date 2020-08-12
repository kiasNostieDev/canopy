import React, { useState } from "react";
import "./Styles/Profile.css";
import ProfileHome from "./ProfileComponents/ProfileHome";
import MyProjects from "./ProfileComponents/MyProjects";
import MyTopics from "./ProfileComponents/MyTopics";

export default function Profile() {
  const [buttonText, setButtonText] = useState("New Project");
  const [Content, setContent] = useState(ProfileHome);

  function handleClick(route, btnText) {
    setContent(route);
    setButtonText(btnText)
  }

  return (
    <div className="ProfileBox">
      <div className="InnerChoice">
        <div
          className="SideYou"
          onClick={() => {
            handleClick(ProfileHome, 'LogOut');
          }}
        >
          YOU.
        </div>
        <div className="ProfileList">
          <div
            className="ListItem"
            onClick={() => {
              handleClick(MyProjects, 'New Project');
            }}
          >
            my Projects
          </div>
          <div
            className="ListItem"
            onClick={() => {
              handleClick(MyTopics, 'New Topic');
            }}
          >
            my Topics
          </div>
          <div className="ListItem">my Blogs</div>
        </div>
        <div className="NewContent">
          <button>{buttonText}</button>
        </div>
      </div>
      <div className="ProfileMain">{Content}</div>
    </div>
  );
}
