import WhatWeDoList from "../../Components/Lists/WhatWeDoList/WhatWeDoList";
import "./styled.css";
import "../../index.css"

function WhatWeDo() {
  return (
    <div className="homeContainer">
      <div className="contentContainer">
        <span>WHAT WE DO</span>
        <div className="info">
          <span id="focusGoals" >Without focus on PR goals, You’ll get communications that level up your business</span>
          <div className="line"></div>
          <WhatWeDoList items={["New market entry", "Sales funnel improvement", "Sales Increase", "Higher ranking  on Google"]}/>
        </div>
      </div>
    </div>
  );
}

export default WhatWeDo;
