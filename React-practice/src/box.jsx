import React from 'react';
import './App.css';

const Box = (props) => {
  // console.log(props);
  return (
    <div className="box">
      I'm a box
      <p>Cohort {props.cohortNumber} Is Awesome!</p>
      <button>Click Me</button>
    </div>
  );
};

export default Box;
