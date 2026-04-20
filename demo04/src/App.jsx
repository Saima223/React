import { useRef } from "react"

function App() {
  const inputRef = useRef(null);

  function handleClick(){
    inputRef.current.focus();
  }

  return (
   <>
   <input ref={inputRef}></input>
   <button onClick={handleClick}>focus on the input</button>
   </>
   
  )
}

export default App
