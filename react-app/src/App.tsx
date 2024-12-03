import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";

function App() {
  let items = [
    "New York",
    "San Francisco",
    "Tokyo",
    "Delhi",
    "London",
    "Paris",
    "Kolkata",
  ];

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
