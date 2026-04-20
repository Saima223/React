import { useState, createContext, useContext } from "react";
import {UserContext} from "./context";

// Greeting component
function Greeting() {
  const data = useContext(UserContext)
  return (
    <>
      <h2>Greeting {data.user}</h2>
      <h2> my city {data.city}</h2>
    </>
  );
}

export default Greeting;