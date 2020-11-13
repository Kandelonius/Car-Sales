import React from 'react';
import { connect } from "react-redux";
import { addAction } from "./actions/optionsActions";

const AdditionalFeature = state => {
  // console.log("AF ", props);
  return (
    <li>
      <button onClick={() => state.addAction(state.feature)} className="button">Add</button>
      {state.feature.name} (+{state.feature.price})
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