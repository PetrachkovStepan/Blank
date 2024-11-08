import Header from "../../Components/Header/Header";
import "./styled.css";
import "../../index.css";
import "../../styles/buttons.css";

function Home() {
  return (
    <div className="homeContainer">
      <Header />
      <div className="contentContainer">
        <span className="textBig">
          We are European PR agency on a mission to scale your business and grow
          your revenue
        </span>
        <span>Relations that grow your business</span>
        <div className="buttonContainer">
          <button className="coloredButton">CONTACT US</button>
          <button className="defaultButton">CASE STUDY</button>
        </div>
      </div>
    </div>
  );
}

export default Home;
