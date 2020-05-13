import React from 'react';
import { connect } from "react-redux";
import { removeAction } from "./actions/optionsActions";

const AddedFeature = props => {
  console.log('ffff', props)
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
    state,
  }
};

export default connect(
  mapStateToProps,
  {removeAction}
  )(AddedFeature);
  
  {/* Add an onClick to run a function to remove a feature */}