import React from 'react';
import { connect } from "react-redux";
import { removeAction } from "./actions/optionsActions";

const AddedFeature = state => {
  console.log('ffff', state)
  return (
    <li>
      <button onClick={() => state.removeAction(state.feature)} className="button">X</button>
      {state.feature.name}
    </li>
  );
};
const mapStateToProps = state => {
  // console.log(state);
  return {
    additionalFeatures: state.additionalFeatures,
  }
};

export default connect(
  mapStateToProps,
  {removeAction}
  )(AddedFeature);
  
  {/* Add an onClick to run a function to remove a feature */}