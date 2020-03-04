import React from 'react';

import './button.css';

const PlusOne = (props) => {
  return (
      <button className="plusone" onClick={props.plusOne}>+</button>
  )
}

export default PlusOne;
