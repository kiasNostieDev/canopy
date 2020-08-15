import React, { useState, useEffect } from "react";
import "./Styles/Global.css";
import { useRef } from "react";

export default function Global() {
  const [OpinionData, setOpinionData] = useState([]);
  const currentOpinon = useRef();

  function handleOpinionSend(event) {
    const opinion = currentOpinon.current.value;
    currentOpinon.current.value = null;
    console.log(opinion);
    setOpinionData((lastData) => {
      return [...lastData, { name: "You", op: opinion }];
    });
  }

  function handleEnter(event) {
    console.log("holae");
    if (event.keyCode === "13") handleOpinionSend();
  }

  useEffect(() => {
    document.addEventListener("keydown", handleEnter, false);
  });

  function SingleTonOpinion(props) {
    return (
      <div>
        {props.opinionLink.map((data) => {
          return (
            <div className="OpinionTile">
              <div className="OpinionTileHead">{data.name}</div>
              <div className="ActualOpinion">{data.op}</div>
            </div>
          );
        })}
        {/* <div className="OpinionTileHead">{props.opinionLink.name}</div>
            <div className="ActualOpinion">{props.opinionLink.op}</div> */}
      </div>
    );
  }

  return (
    <div className="Global">
      <div className="GlobalTitle">GlobalDiscussion</div>
      <div className="GlobalOpinion">
        <div className="OpinionBox">
          <input
            placeholder="-->   Give out your opinions, ideas and information if you've got"
            ref={currentOpinon}
          ></input>
          <div className="OpinionSend">
            <button className="OpinionButton" onClick={handleOpinionSend}>
              Send
            </button>
          </div>
        </div>
      </div>
      <div className="GlobalTalks">
        <SingleTonOpinion opinionLink={OpinionData} />
      </div>
    </div>
  );
}
