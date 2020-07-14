import React, { useState } from "react";
import "../Styles/SideBar.css";
import Profile from "../Profile";

export default function SideBar() {
  const Title = "canopy";

  const TabTexts = ["News", "Global Discussions", "Topics", "Public Projects","Profile"];

  function Line() {
    return (
      <div className="LineSide">
        <svg height="10px" width="300px">
          <line
            x1="20"
            y1="0"
            x2="300"
            y2="0"
            style={{ stroke: "#fff", strokeWidth: "2" }}
          />
        </svg>
      </div>
    );
  }

  function SideTab(props) {
    return (
      <div className="SideTab">
        <div className="TabText">
          {props.text}
        </div>
        <div
          className="SelectedRound"
        ></div>
      </div>
    );
  }

  return (
    <div className="SideBar">
      <div className="TitleBar">{Title}</div>
      <div className="ProfileSide"></div>
      <Line />
      <SideTab text={TabTexts[0]}/>
      <SideTab text={TabTexts[1]}/>
      <Line />
      <SideTab text={TabTexts[2]}/>
      <SideTab text={TabTexts[3]}/>
    </div>
  );
}

export function MainPage(){
  return <Profile />
}