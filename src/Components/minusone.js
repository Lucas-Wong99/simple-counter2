import React from 'react';

import './button.css';

const MinusOne = (props) => {
  return (
      <button className="minusone" onClick={props.minusOne}>-</button>
  )
}

export default MinusOne;
