import { useState, useEffect } from "react";
import Userss from "./Userss";

function App() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState(" ");
  const [text, setText] = useState("change this txt");
  const [username, setUsername] = useState();

  //1. without dependency and with empty array
  useEffect(() => {
    document.title = `${count} new msg!`
  }) //remove empty array

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users/1")
      .then((res) => res.json())
      .then((data) => { setUsername(data.username) })
  })
  return (
    <div>
      <h1>props via components Userss</h1>
      <Userss
        image="https://i.pravatar.cc/150?img=2"
        job={"Frontend"}
        name="xyz"
        age={12} />
      <Userss
        image="https://i.pravatar.cc/150?img=1"
        job="frontend developer"
        name="abc"
        age={40} />
      <h1>useEffect</h1>

      {/* using useState to change the text*/}
      <button onClick={(e) => setText("hey there")}>
        text: {text}
      </button>
      {"  "}
      <button onClick={() => setCount(count + 1)}>+ {count}</button>
      {" "}

      <input
        value={name}
        type="text"
        onChange={(e) => setName(e.target.value)}
        placeholder="type your name"
      />
      {"   "}
      <h1>welcome {name}</h1>
    </div>
  );
}

export default App;