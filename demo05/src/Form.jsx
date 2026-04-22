import useFormInput from './costumhooks/useFormInput.js';
import useFetch from './costumhooks/useFetch.js'

export default function Form() {
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
