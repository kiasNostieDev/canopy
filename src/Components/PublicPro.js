import React from "react";
import "./Styles/PublicPro.css";

export default function PublicPro() {
  function Tags() {
    return (
      <div className="Tags">
        <div className="TagPro">Kotlin</div>
        <div className="TagPro">Java</div>
      </div>
    );
  }

  function ListProTile() {
    return (
      <div className="ListProTile">
        <div className="ProTitle">
          <div>Holdup</div>
        </div>
        <div className="ProAuthor">
          <div className="ProLead">Lead: WizKalifa</div>
        </div>
        <div className="ProFollow">
        </div>
      </div>
    );
  }

  function ProFollowing() {
    return (
      <div className="ProFollowing">
        <div className="ProFollowingHeading">Watching Projects</div>
        <div className="ProFollowingList">
          <div className="ListItemPro">hash</div>
          <div className="ListItemPro">Baby I am preying on you tonight</div>
          <div className="ListItemPro">Hunt you down eat you alvie</div>
          <div className="ListItemPro">Just like animasl</div>
          <div className="ListItemPro">Yeah I did something bad</div>
          <div className="ListItemPro">Then whyd is it feel good</div>
          <div className="ListItemPro">Dont Blame me love made me craxy</div>
        </div>
      </div>
    );
  }

  function ListTileProject() {
    return (null);
  }

  return (
    <div className="PublicProjects">
      <div className="ListPro">
        <div className="ListProHeading">Project Forum</div>
        <div className="ListProPortion">
          <ListProTile/>
        </div>
      </div>
      <div className="CustomPro">
        <ProFollowing />
      </div>
    </div>
  );
}
