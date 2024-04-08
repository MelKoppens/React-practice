/* eslint-disable react/prop-types */
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Box } from './box';

function App() {
  // console.log("This is the app component");
  const [count, setCount] = useState(0);
  const  [cohorts, setCohorts] = useState([62, 63, 64]);

  const handleClick = () => {
    console.log("I've been clicked");
    setCohorts([64]);
  };

  const handleAddCohort = () => {
    const lastCohort = cohorts[cohorts.length - 1];
    setCohorts(cohorts.concat(lastCohort + 1));
    console.log('added new cohort: ', lastCohort + 1);
  };

  const boxes = [];

  // create a Box component for each element in cohorts
  for (let i = 0; i < cohorts.length; i++) {
    boxes.push(<Box cohortNumber={cohorts[i]} />);
  }

  return (
    <>
      {boxes}
      <button onClick={handleAddCohort}>Add new cohort</button>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>React Practice</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
