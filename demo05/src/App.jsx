import { useEffect, useState } from 'react'

function App() {
  const [responses, setResponses] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setResponses(data));
  }, []);

  return (
    <>
      <h2>its a custom hook</h2>
      {responses.map((res) => {
        return (
          <h2 key={res.id}>
            {res.username}, {res.name}
          </h2>
        );
      }

      )}
    </>
  )
}

export default App
