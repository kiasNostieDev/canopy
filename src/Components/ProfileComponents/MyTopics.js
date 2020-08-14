import React from "react";
import "../Styles/MyTopics.css";

export default function MyTopics() {
  function MyTopicCard() {
    return (
      <div className="FragmentLayer">
        <div className="MyTopicCard">
          <text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eu ex ac eros porta ultricies at volutpat eros. Nam efficitur tempor risus, vitae iaculis neque placerat at. Cras at dictum erat. In nisi felis, vestibulum in nunc ut, fermentum blandit arcu. Nunc non metus in leo fermentum rutrum vel a ante. Vivamus a nisi sit amet turpis luctus porta eget tempus nibh. Ut id dapibus dui. Nunc massa metus, congue vel nunc non, ultrices vulputate magna
          </text>
        </div>
        <div className="Show">
          <span class="material-icons">arrow_right_alt</span>
        </div>
      </div>
    );
  }

  return (
    <div className="MyTopics">
      <div className="Heading">Topics</div>
      <div className="MyTopicContent">
        <MyTopicCard />
        <MyTopicCard />
        <MyTopicCard />
        <MyTopicCard />
        <MyTopicCard />
        <MyTopicCard />
        <MyTopicCard />
        <MyTopicCard />
        <MyTopicCard />
        <MyTopicCard />
        <MyTopicCard />
        <MyTopicCard />
        <MyTopicCard />
        <MyTopicCard />
        <MyTopicCard />
        <MyTopicCard />
        <MyTopicCard />
        <MyTopicCard />
        <MyTopicCard />
      </div>
    </div>
  );
}
