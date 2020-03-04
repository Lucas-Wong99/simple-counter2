import React from 'react';

import './App.css';

import Counter from '../Counter/counter';
import PlusOne from '../plusone';
import PlusFive from '../plusfive';
import MinusOne from '../minusone';
import MinusFive from '../minusfive';
import MultiplyByTen from '../multiplybyten';
import DivideByTen from '../dividebyten';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0
    }

    this.plusOne = this.plusOne.bind(this);
    this.plusFive = this.plusFive.bind(this);
    this.minusOne = this.minusOne.bind(this);
    this.minusFive = this.minusFive.bind(this);
    this.multiply = this.multiply.bind(this);
    this.divide = this.divide.bind(this);
  }

  plusOne() {
    this.setState({
      count: this.state.count + 1
    })
  }

  plusFive() {
    this.setState({
      count: this.state.count + 5
    })
  }

  minusOne() {
    this.setState({
      count:this.state.count - 1
    })
  }

  minusFive() {
    this.setState({
      count: this.state.count - 5
    })
  }

  multiply() {
    this.setState({
      count: this.state.count * 10
    })
  }

  divide() {
    this.setState({
      count: this.state.count / 10
    })
  }

  render() {
    return (
      <div className="counter">
        <Counter count={this.state.count}/>
        <div className="addandsubtract">
          <PlusFive plusFive={this.plusFive}/>
          <PlusOne plusOne={this.plusOne}/>
          <MinusOne minusOne={this.minusOne}/>
          <MinusFive minusFive={this.minusFive}/>
        </div>
        <div className="multanddiv">
          <MultiplyByTen multiply={this.multiply}/>
          <DivideByTen divide={this.divide}/>
        </div>
      </div>
    )
  }
}

export default App;
