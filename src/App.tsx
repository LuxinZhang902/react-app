import Alert from "./components/Alert";
import Button from "./components/Button";
import { useState } from "react";

function App() {
  let items = ["New York", "San Franscisco", "Tokyo", "London", "Paris"]; //Static value: no need of using {} in heading part

  //hook
  const [alertVisible, setAlertVisiblity] = useState(false);

  const handleSelectItem = (item: string) => {
    console.log(item);
  };
  return (
    <div>
      {alertVisible && (
        <Alert onClose={() => setAlertVisiblity(false)}>My alert</Alert>
      )}
      <Button onClick={() => setAlertVisiblity(true)}>My Cutie Button</Button>
    </div>
  );
}

export default App;
