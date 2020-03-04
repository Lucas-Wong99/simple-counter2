import React from 'react';

import './button.css';

const PlusFive = (props) => {
  return (
      <button className="plusfive" onClick={props.plusFive}>+5</button>
  )
}

export default PlusFive;
