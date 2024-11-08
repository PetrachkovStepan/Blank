import "./styled.css";
import "../../styles/buttons.css";
import "../../styles/inputs.css"
function ContactUs() {
  return (
    <div className="contactsContainer">
      <div className="contactsinfoContainer">
        <div className="contactsPresInfoContainer">
          <span>Let us grow it for you exponentially</span>
          <div id="line"/>
          <span>
            You know that your technology and product offerings are better than
            the competition, perhaps even game changing.
          </span>
          <span>
            We are an integrated communications consultancy that helps
            technology companies resolve their issues and boost the revenue via
            communication.
          </span>
        </div>
        <div className="interactiveContainer">
          <div className="inputsContainer">
            <input placeholder="Name" />
            <input placeholder="Your email" />
          </div>
          <textarea placeholder="Write something" />
          <button className="coloredButton">SEND</button>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
