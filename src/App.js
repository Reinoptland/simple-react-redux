import React, { Component } from 'react';
import { connect } from 'react-redux';
import { increment } from './actions/counter'
import { toggle } from './actions/lightswitch'
import logo from './logo.svg';
import './App.css';

class App extends Component {

  incrementCounter = () => {
    this.props.increment()
  }

  toggleLightSwitch = () => {
    console.log('CHECK YOURSELF <MAN')
    this.props.toggle()
  }

  render() {
    console.log(this.props)
    const { lightswitch } = this.props
    
    const background = lightswitch ? 'yellow' : 'black';

    return (
      <div className="App" style={{backgroundColor: background} }>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <h1>{ this.props.counter } </h1>
        <button onClick={this.incrementCounter}>+</button> 
        <button onClick={this.toggleLightSwitch}>LIGHT!</button> 
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    counter: state.counter,
    lightswitch: state.lightswitch
  }
}

export default connect(mapStateToProps, { increment, toggle })(App)
