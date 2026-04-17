import { useState, createContext, useContext } from "react";
import {UserContext} from "./App";

// Greeting component
function Greeting() {
  const data = useContext(UserContext)
  return (
    <>
      <h2>Greeting {data.name}</h2>
      <p>Greeting {data.city}</p>
    </>
  );
}

export default Greeting;