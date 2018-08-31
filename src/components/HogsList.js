import React from 'react';
import HogCard from './HogCard.js';

const HogsList = props => {
  // console.log("props are", props);
  // console.log("--------");
  let hogs = props.hogs.map(hog => {
    return <HogCard key={hog.name} hog={hog} />
  })
  return (
    <div className="ui grid container">
      {hogs}
    </div>
  )
}

export default HogsList;
