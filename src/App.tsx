import ListGroup from "./components/ListGroup";

function App() {
  let items = ["New York", "San Franscisco", "Tokyo", "London", "Paris"]; //Static value: no need of using {} in heading part

  const handleSelectItem = (item: string) => {
    console.log(item);
  };
  return (
    <div>
      <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectItem}
      />
    </div>
  );
}

export default App;
