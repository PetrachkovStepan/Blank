import AdvantagesList from "../../Components/Lists/AdvantagesList/AdvantagesList";
import LinkList from "../../Components/Lists/LinksList/LinkList";
import { ADVANTAGES_LIST_INFO, LINK_LIST_INFO } from "../../constants/listInfo";
import "./styled.css";

function OurServices() {
  return (
    <div className="ourServicesContainer">
      <span>OUR SERVICES</span>
      <div className="listsContainer">
        <LinkList items={LINK_LIST_INFO} />
        <AdvantagesList
          items={ADVANTAGES_LIST_INFO}
        />
      </div>
    </div>
  );
}

export default OurServices;
