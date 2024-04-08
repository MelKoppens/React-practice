/* eslint-disable react/prop-types */
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import { Box } from './box';

function App() {
  // console.log("This is the app component");
  const [count, setCount] = useState(0);
  const  [cohortNumbers, setCohorts] = useState([62, 63, 64]);

  const handleClick = () => {
    const NewCohortNumbers = cohortNumbers.map((num) => 64);
    console.log("I've been clicked");
    setCohorts(NewCohortNumbers);
  };

  const handleAddCohort = () => {
    const lastCohort = cohortNumbers[cohortNumbers.length - 1];
    setCohorts(cohortNumbers.concat(lastCohort + 1));
    console.log('added new cohort: ', lastCohort + 1);
  };

  const boxes = [];

  // create a Box component for each element in cohorts
  for (let i = 0; i < cohortNumbers.length; i++) {
    boxes.push(
      <Box
        key={crypto.randomUUID()}
        number={cohortNumbers[i]} 
        handleClickMe={handleClick} 
      />
    );
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

const Box = (props) => {
  
  console.log(props);
  return (
    <div className="box">
      <p>Cohort {props.number} Is Awesome!</p>
      <button onClick={props.handleClickMe}>Click Me</button>
    </div>
  );
};

export default App