import { Fragment } from "react";

function ListGroup() {
  let items = ["New York", "San Franscisco", "Tokyo", "London", "Paris"];
  items = [];
  //   if (items.length == 0)
  //     return (
  //       <>
  //         <h1>
  //           <p>No item found</p>
  //         </h1>
  //       </>
  //     );

  //In React, a component can not return more than one element
  //In jsx, we can only use HTML elements or other react components
  //No if statement inside of this part
  return (
    <Fragment>
      <h1>List</h1>
      {items.length === 0 ? <p>No item found</p> : null}
      <ul className="list-group">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </Fragment>
  );
}

export default ListGroup;
