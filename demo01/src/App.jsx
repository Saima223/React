import { useState } from "react";

function App() {
  const [text, setText] = useState("");
  const [count, setCount] = useState(0);

  return (
    <div>
      <input onChange={(e) => setText(e.target.value)} />

      <h2>{text}</h2>

      <h1>{count}</h1>

      <button onClick={() => setCount(count + 1)}>
        Increase
      </button>
    </div>
  );
}

export default App;