function ListGroup() {
  const items = [
    "New York",
    "San Francisco",
    "Tokyo",
    "Delhi",
    "London",
    "Paris",
    "Kolkata",
  ];

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
