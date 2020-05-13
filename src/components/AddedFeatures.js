import React from 'react';
import AddedFeature from './AddedFeature';
import { connect } from "react-redux";
// import { addAction } from "./actions/optionsActions";

const AddedFeatures = state => {
  console.log('feature',state);
  return (
    <div className="content">
      <h6>Added features:</h6>
      {state.car.features.length ? (
        <ol type="1">
          {state.car.features.map(item => (
            <AddedFeature key={item.id} feature={item} />
          ))}
        </ol>
      ) : (
          <p>You can purchase items from the store.</p>
        )}
    </div>
  );
};

const mapStateToProps = state => {
  console.log('sssssss', state);
  return {
    car: state.car,
  }
};

export default connect(
  mapStateToProps,
  {}
)(AddedFeatures);
// export default AddedFeatures;
