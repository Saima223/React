import { useState } from 'react'
import "./style.css";

function App() {
  const isLoggedIn = false;
  const isActive = true;

  return (
    <>
<p style={{ backgroundColor: 'yellow', fontSize: 18, marginTop: 10 }}>
  Styled paragraph
</p>
    <button className={isLoggedIn ? "btn success" : "btn danger"}>
      Login Status
    </button>

<div className="note active highlighted">Hi</div>

<div className={isActive ? "note active" : "note"}>Hi</div>
    </>
  );
}

export default App
