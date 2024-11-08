import "./styled.css";

function AdvantagesList({
  items,
}: {
  items: { head: string; text: string }[];
}) {
  return (
    <div className="advListContainer">
      {items.map((item) => (
        <div className="advContainer" key={items.indexOf(item) + "2"}>
          <span>{item.head}</span>
          <span>{item.text}</span>
        </div>
      ))}
    </div>
  );
}

export default AdvantagesList;
