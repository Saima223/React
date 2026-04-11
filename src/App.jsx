import ProfileCard from "./ProfileCard";
import { useState } from "react";

function App() {
  const [age, setAge] = useState(15);
  const [text, setText] = useState("hey");
  return (
    <div>
      <button onClick={() => setText (text => "Changed")}>change text
      </button>
      <h1>{text}</h1>

      <ProfileCard name = "xyz" age ={age}/>
      
      <button onClick={() => setAge (age => age +1)}>
        Increase age
      </button>
      <ProfileCard
        name="John"
        age={24}
        job="Developer"
        image="https://i.pravatar.cc/150?img=1"
      />
      <ProfileCard
        name="Joy"
        age={23}
        job="Frontend Developer"
        image="https://i.pravatar.cc/150?img=2"
      />
      <ProfileCard
        name="Saksham"
        age={24}
        job="Developer"
        image="https://i.pravatar.cc/150?img=1"
      />
      <ProfileCard
        name="nidhi"
        age={23}
        job="Frontend Developer"
        image="https://i.pravatar.cc/150?img=2"
      />
    </div>
  );
}

export default App;