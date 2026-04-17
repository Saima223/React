import { useState, createContext} from 'react';
import Greeting from './Greeting';

// Create context
export const UserContext = createContext(null);

// Main App
export default function App() {
const [user] = useState('Riya'); //chnage here to add more
const [name] = useState('yay');
const [age] = useState(15);
const [city] = useState("mumbai");

  return (
    <UserContext.Provider value={{user, name, age, city}}> {/**change here */}
      <Greeting /> {/**call here */}
      <Greeting />
      <Greeting />
    </UserContext.Provider>
  );
}