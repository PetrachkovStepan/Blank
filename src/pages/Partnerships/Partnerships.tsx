import img1 from "../../Assets/Logos/image 1.png";
import img2 from "../../Assets/Logos/image 2.png";
import img3 from "../../Assets/Logos/image 3.png";
import img4 from "../../Assets/Logos/image 4.png";
import "./styled.css";
import "../../index.css";

function Partnerships() {
  return (
    <div className="partnersContainer">
      <span className="textBig">We’ve formed trusted partnerships with 50+ clients</span>
      <div className="imageList">
        <img src={img1} alt="" className="companyImg" />
        <img src={img2} alt="" className="companyImg" />
        <img src={img3} alt="" className="companyImg" />
        <img src={img4} alt="" className="companyImg" />
      </div>
    </div>
  );
}

export default Partnerships;
