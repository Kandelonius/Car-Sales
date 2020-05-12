import React from 'react';

const AdditionalFeature = props => {
  console.log("AF ", props);
  return (
    <li>
      <button onClick={props.feature.addAction} className="button">Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

export default AdditionalFeature;

{/* Add an onClick that will let you add a feature to your car */ }