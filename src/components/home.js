import React from 'react';
import pic from './homeownerpic.png'
const Homepage = () => {
  return (
    <div className="homepage">
      <img src={pic} alt="Pic" className= 'homePic'/>
    </div>
  );
};

export default Homepage;