import "./styled.css";

function WhatWeDoList({ items }: { items: string[] }) {
  return (
    <div className="listContainer">
      {items.map((item) => (
        <span  key={items.indexOf(item)}>{item}</span>
      ))}
    </div>
  );
}

export default WhatWeDoList;
