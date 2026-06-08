import { useState } from 'react'

function App() {

  const name = "saima";
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  return (
    <>
    <p>Created by {name}</p>
    <p>Copy Right {year}</p>
    </>
  )
}

export default App
