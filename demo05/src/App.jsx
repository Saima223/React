import React from 'react'
import useFetch from './costumhooks/useFetch';

function App() {
  const data = useFetch("https://jsonplaceholder.typicode.com/users")
  return (
    <>
      <h2>its a custom hook</h2>
      {data.map((res) => {
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
