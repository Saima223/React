import { useState, useEffect } from "react";
import User from "./User";

function App() {
  const [name, setName] = useState("Loading...");
  const [count, setCount] = useState(0);

  // 1️⃣ Runs on EVERY render
  useEffect(() => {
    console.log("Runs on every render");
  });

  // 2️⃣ Runs ONLY once (API call)
  useEffect(() => {
    console.log("Runs only once");

    fetch("https://jsonplaceholder.typicode.com/users/1")
      .then((res) => res.json())
      .then((data) => {
        setName(data.name);
      });
  }, []);

  // 3️⃣ Runs when count changes
  useEffect(() => {
    console.log("Count changed:", count);
  }, [count]);

  return (
    <div>
      <h1>useEffect Practice</h1>

      <button onClick={() => setCount(count + 1)}>
        Count: {count}
      </button>

      {/* Props */}
      <User username={name} />
    </div>
  );
}

export default App;