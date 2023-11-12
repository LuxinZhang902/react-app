import Button from "./components/Button";

function App() {
  let items = ["New York", "San Franscisco", "Tokyo", "London", "Paris"]; //Static value: no need of using {} in heading part

  const handleSelectItem = (item: string) => {
    console.log(item);
  };
  return (
    <div>
      <Button onClick={() => console.log("Click")}>My Cutest Button</Button>
    </div>
  );
}

export default App;
