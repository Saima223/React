function App() {
  const name = "John";
  const age = 32;

  return (
    <>
      {/* Rule 1: Single parent element */}
      <h1 className="title">Hello {name}</h1>

      {/* Rule 2: className instead of class */}
      <p>Age: {age}</p>

      {/* Rule 3: JS inside {} */}
      <p>{age >= 18 ? "Adult" : "Minor"}</p>

      {/* Rule 4: Use ternary instead of if/else */}
    </>
  );
}

export default App;