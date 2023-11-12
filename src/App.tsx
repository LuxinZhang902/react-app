import ListGroup from "./components/ListGroup";

function App() {
  let items = ["New York", "San Franscisco", "Tokyo", "London", "Paris"]; //Static value: no need of using {} in heading part

  return (
    <div>
      <ListGroup items={items} heading="Cities" />
    </div>
  );
}

export default App;
