import React from 'react';
import { connect } from "react-redux";
import { removeAction } from "./actions/optionsActions";

const AddedFeature = props => {
  return (
    <li>
      <button onClick={() => props.removeAction(props.feature)} className="button">X</button>
      {props.feature.name}
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