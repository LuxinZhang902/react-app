import { Fragment, useState } from "react";

function ListGroup() {
  let items = ["New York", "San Franscisco", "Tokyo", "London", "Paris"];
  //Hook
  const [selectedIndex, setSelectIndex] = useState(-1);

  //In React, a component can not return more than one element
  //In jsx, we can only use HTML elements or other react components
  //No if statement inside of this part
  return (
    <Fragment>
      <h1>List</h1>
      {items.length === 0 && <p>No item found</p>}
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
              setSelectIndex(index);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </Fragment>
  );
}

export default ListGroup;
