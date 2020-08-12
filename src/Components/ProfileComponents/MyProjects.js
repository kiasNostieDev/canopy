import React from "react";
import "../Styles/MyProjects.css";

export default function MyProjects() {
  function MyProjectCard() {
    return (
      <div className="MyProjectCard">
        <div className="MyProjectTitle">
          <div className='MyProjectText'>
            RumourLorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eu ex ac eros porta ultricies at volutpat eros. Nam efficitur tempor risus, vitae iaculis neque placerat at. Cras at dictum erat. In nisi felis, vestibulum in nunc ut, fermentum blandit arcu. Nunc non metus in leo fermentum rutrum vel a ante. Vivamus a nisi sit amet turpis luctus porta eget tempus nibh. Ut id dapibus dui. Nunc massa metus, congue vel nunc non, ultrices vulputate magna
          </div>
        </div>
        <div className="IntoArrow">
          <div className="Arrow">
            <span class="material-icons">arrow_right_alt</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="MyProjects">
      <div className="Heading">Works...</div>
      <div className="MyProjectContent">
        {/* pass an prop to do onclick, when clicked deal with the passed prop........ like if openin the needed project */}
        <MyProjectCard/>
        <MyProjectCard/>
        <MyProjectCard />
        <MyProjectCard />
        <MyProjectCard />
        <MyProjectCard />
        <MyProjectCard />
        <MyProjectCard />
        <MyProjectCard />
        <MyProjectCard />
        <MyProjectCard />
        <MyProjectCard />
        <MyProjectCard />
        <MyProjectCard />
        <MyProjectCard />
        <MyProjectCard />
        <MyProjectCard />
        <MyProjectCard />
      </div>
    </div>
  );
}
