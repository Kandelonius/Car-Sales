import React from 'react';
import { connect } from "react-redux";
import { removeAction } from "./actions/optionsActions";

const Header = state => {
  return (
    <>
      <figure className="image is-128x128">
        <img src={state.car.image} alt={state.car.name} />
      </figure>
      <h2>{state.car.name}</h2>
      <p>Amount: ${state.car.price}</p>
    </>
  );
};

const mapStateToProps = state => {
  console.log('head', state);
  return {
    car: state.car,
  }
};

export default connect(
  mapStateToProps,
  {removeAction}
)(Header);
