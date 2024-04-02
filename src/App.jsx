import './App.css';
import { useState } from 'react';
import { puppyList } from './data.js';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  const [featPupId, setFeatPupId] = useState(null);
  const [puppies, setPuppies] = useState(puppyList);
  const featuredPup = puppies.find((pup) => pup.id === featPupId);
  console.log(featuredPup);

  return (
    <>
      <div>
        {puppies.map((puppy) => (
          <p onClick={() => setFeatPupId(puppy.id)} key={puppy.id}>{puppy.name}</p>
        ))}
        {featPupId && <div>
  {puppies.map((puppy) => (
    <p onClick={() => setFeatPupId(puppy.id)} key={puppy.id}>{puppy.name}</p>
  ))}
  {featPupId && (
    <div>
      <h2>{featuredPup.name}</h2>
      <ul>
        <li>Age: {featuredPup.age}</li>
        <li>Email: {featuredPup.email}</li>
        {/* Add other properties as needed */}
      </ul>
    </div>
  )}
</div>}
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
