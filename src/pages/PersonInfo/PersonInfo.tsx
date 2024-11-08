import personImg from "../../Assets/Portrait.png";
import "./styled.css";
import "../../index.css"
function PersonInfo() {
  return (
    <div className="personInfoContainer">
      <div>
        <div></div>
        <img src={personImg} alt="" id="personImg" />
        <div></div>
      </div>
      <div className="rightSpan">
        I’ve made dozens of public speeches at formal events with  the
        Presidents of Eastern European countries, the governments of the UAE,
        Armenia, and entrepreneurs from the Forbes list.
      </div>
    </div>
  );
}

export default PersonInfo;
