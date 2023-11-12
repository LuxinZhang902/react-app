import Alert from "./components/Alert";

function App() {
  let items = ["New York", "San Franscisco", "Tokyo", "London", "Paris"]; //Static value: no need of using {} in heading part

  const handleSelectItem = (item: string) => {
    console.log(item);
  };
  return (
    <div>
      <Alert>
        Hello <span>World</span>
      </Alert>
    </div>
  );
}

export default App;
