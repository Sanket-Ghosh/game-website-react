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

  if (items.length === 0) {
    return <p>No Items Found</p>;
  }
  return (
    <>
      <h1>Header</h1>
      <ul className="list-group">
        {items.map((items) => (
          <li key={items}>{items}</li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
