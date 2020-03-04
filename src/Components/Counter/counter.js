import React from 'react';

import './counter.css';

const Counter = (props) => {
  return (
    <div className="counter">
      <h1 className="header">
        Your count is at: {props.count}
      </h1>
    </div>
  )
}

export default Counter;
