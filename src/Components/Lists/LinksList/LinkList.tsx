import LinkItem from "./LinkItem";
import "./styled.css";

function LinkList({ items }: { items: string[] }) {
  return (
    <div className="linkListContainer">
      {items.map((item) => (
        <LinkItem  key={items.indexOf(item) + "1"} text={item}></LinkItem>
      ))}
    </div>
  );
}

export default LinkList;
