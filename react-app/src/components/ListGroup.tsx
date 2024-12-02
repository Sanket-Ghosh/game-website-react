function ListGroup() {
  let items = [
    "New York",
    "San Francisco",
    "Tokyo",
    "Delhi",
    "London",
    "Paris",
    "Kolkata",
  ];

  items = [];

  //   Using a constant variable
  //   const message = items.length === 0 && <p>No items Found</p>;

  // Using a function
  //   const getMessage = () => {
  //     return items.length === 0 && <p>No item Found - Calling from function</p>;
  //   };
  return (
    <>
      <h1>List</h1>
      {items.length === 0 && <p>No item Found</p>}
      <ul className="list-group">
        {items.map((items) => (
          <li key={items}>{items}</li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
