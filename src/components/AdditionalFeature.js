import React from 'react';
import { connect } from "react-redux";
import { addAction } from "./actions/optionsActions";

const AdditionalFeature = props => {
  // console.log("AF ", props);
  return (
    <li>
      <button onClick={() => props.addAction(props.feature)} className="button">Add</button>
      {props.feature.name} (+{props.feature.price})
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
  {addAction}
)(AdditionalFeature);


{/* Add an onClick that will let you add a feature to your car */ }