import React from 'react';
import AdditionalFeature from './AdditionalFeature';
import { connect } from "react-redux";

const AdditionalFeatures = state => {
  console.log('comon', state)
  return (
    <div className="content">
      <h4>Additional Features</h4>
      {state.additionalFeatures.length ? (
        <ol type="1">
          {state.additionalFeatures.map(item => (
            <AdditionalFeature key={item.id} feature={item} />
          ))}
        </ol>
      ) : (
          <p>Nice looking car!</p>
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
)(AdditionalFeatures);
// export default AdditionalFeatures;
