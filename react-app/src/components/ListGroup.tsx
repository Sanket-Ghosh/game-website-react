// import { MouseEvent } from "react";

import { useState } from "react";

// In React We use Props when we need to pass data Dynamically.
// We need to define the object of the input data i.e. Interface in TypeScript
// { items: [], heading: String }
interface Props {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}

function ListGroup({ items, heading, onSelectItem }: Props) {
  //   Using a constant variable
  //   const message = items.length === 0 && <p>No items Found</p>;

  // Using a function
  //   const getMessage = () => {
  //     return items.length === 0 && <p>No item Found - Calling from function</p>;
  //   };

  //   In case of handling events instead of writing the logic directly into jsx markup we should use separete function like this below

  //   Event Handler
  //   const handleClick = (event: MouseEvent) => {
  //     console.log(event);
  //   };

  //   State Management
  //   let selectedIndex = 0;

  //   Hook ( STATE HOOK)
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      <h1>{heading}</h1>
      {items.length === 0 && <p>No item Found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
