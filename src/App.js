import React, { Component } from 'react';
import { connect } from 'react-redux';
import { increment } from './actions/counter'
import logo from './logo.svg';
import './App.css';

class App extends Component {

  handleClick = () => {
    this.props.increment()
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <h1>{ this.props.counter } </h1>
        <button onClick={this.handleClick}>+</button> 
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    counter: state.counter
  }
}

export default connect(mapStateToProps, { increment })(App)
