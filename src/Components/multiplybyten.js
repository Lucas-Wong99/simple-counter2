import React from 'react';

import './button.css';

const MultiplyByTen = (props) => {
  return (
      <button className="multiply" onClick={props.multiply}>x10</button>
  )
}

export default MultiplyByTen;
