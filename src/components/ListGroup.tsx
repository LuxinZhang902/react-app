import { Fragment } from "react";
import { MouseEvent } from "react";

function ListGroup() {
  let items = ["New York", "San Franscisco", "Tokyo", "London", "Paris"];

  //An event handler: calling this function would be later at the run time
  const handleClick = (event: MouseEvent) => console.log(event);

  //In React, a component can not return more than one element
  //In jsx, we can only use HTML elements or other react components
  //No if statement inside of this part
  return (
    <Fragment>
      <h1>List</h1>
      {/* {items.length === 0 ? <p>No item found</p> : null} */}
      {items.length === 0 && <p>No item found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li className="list-group-item" key={item} onClick={handleClick}>
            {item}
          </li>
        ))}
      </ul>
    </Fragment>
  );
}

export default ListGroup;
