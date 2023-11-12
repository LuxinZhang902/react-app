import { Fragment } from "react";

function ListGroup() {
  let items = ["New York", "San Franscisco", "Tokyo", "London", "Paris"];

  //In React, a component can not return more than one element
  //In jsx, we can only use HTML elements or other react components
  //No if statement inside of this part
  return (
    <Fragment>
      <h1>List</h1>
      {/* {items.length === 0 ? <p>No item found</p> : null} */}
      {items.length === 0 && <p>No item found</p>}
      <ul className="list-group">
        {items.map((item) => (
          <li
            className="list-group-item"
            key={item}
            onClick={() => console.log(item)}
          >
            {item}
          </li>
        ))}
      </ul>
    </Fragment>
  );
}

export default ListGroup;
