import React from 'react';

import './button.css';

const DivideByTen = (props) => {
  return (
      <button className="divide" onClick={props.divide}>/10</button>
  )
}

export default DivideByTen;
