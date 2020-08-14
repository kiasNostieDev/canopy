import React, { useState } from "react";
import "./App.css";
import "./Components/Styles/SideBar.css";
import Profile from "./Components/Profile";
import PublicPro from "./Components/PublicPro";
import Global from "./Components/Global";

function App() {
  const [Content, setContent] = useState("Profile");
  const Title = "canopy";

  const TabTexts = [
    "News",
    "Global Discussions",
    "Topics",
    "Public Projects",
    "Blogs",
  ];

  function MainContent(props) {
    if (props.val === "Profile") return <Profile />;
    else if (props.val === "Public Projects") return <PublicPro />;
    else if(props.val === 'Global Discussions')return <Global/>
    return <></>;
  }

  function HandleClick(route) {
    setContent(route.toString());
    console.log(Content);
  }

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
      <div
        className="SideTab"
        onClick={() => {
          HandleClick(props.text);
        }}
      >
        <div className="TabText">{props.text}</div>
        <div className="SelectedRound"></div>
      </div>
    );
  }

  return (
    <div className="App">
      <div className="SideBar">
        <div className="SideBar">
          <div className="TitleBar">{Title}</div>
          <div
            className="ProfileSide"
            onClick={() => {
              console.log("chooser");
              HandleClick("Profile");
            }}
          ></div>
          <Line />
          <SideTab text={TabTexts[0]} />
          <SideTab text={TabTexts[1]} />
          <Line />
          <SideTab text={TabTexts[2]} />
          <SideTab text={TabTexts[3]} />
          <SideTab text={TabTexts[4]} />
        </div>
      </div>
      <div className="MainBoard">
        <MainContent val={Content} />
      </div>
    </div>
  );
}

export default App;
