import { useState } from "react";

interface Props {
  items: string[];
  heading: string;
  onSelectedItem: (item: string) => void;
}

function ListGroup({items, heading, onSelectedItem }: Props) {

  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      <h1>{heading}</h1>
      {items.length === 0 && <p>Not found</p> }
      <ul className="list-group">
        {items.map((item, index) => ( <li 
            className={selectedIndex === index ? 'list-group-item active' : 'list-group-item'} 
            key={item}
            onClick={() => { setSelectedIndex(index); onSelectedItem(item); }}
            
            > {item}
          </li> ))}
        <li className="list-group-item">An item</li>
        <li className="list-group-item">A second item</li>
        <li className="list-group-item">A third item</li>
        <li className="list-group-item">A fourth item</li>
        <li className="list-group-item">And a fifth one</li>
      </ul>
    </>
  );
}

export default ListGroup;