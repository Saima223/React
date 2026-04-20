import { useState} from 'react';
import Greeting from './Greeting';
import { UserContext } from './context';

// Main App
export default function App() {
const [user] = useState('Riya'); //chnage here to add more
const [city] = useState ("Mumbai");

  return (
    <UserContext.Provider value={{user, city}}> {/**change here */}
      <Greeting /> {/**call here */}
    </UserContext.Provider>
  );
}