import React, { useEffect, useState } from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import Form from "./form";

function CircularProgressBar() {
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      if (percentage < 100) {
        setPercentage(percentage + 1);
      }
    }, 50);
  }, [percentage]);

  return (
    <div style={{textAlign:"center"}}>
      <h1>Dashboard</h1>
      <div style={{ width: 200, marginLeft: 670, marginTop: 50}}>
        <CircularProgressbar value={percentage} text={`${percentage}%`} className='progress'/>
      </div>
      <div>
            <button type="submit" className = 'continue-button'>Retake Form</button>
      </div>
      
    </div>
  );
}
export default CircularProgressBar;