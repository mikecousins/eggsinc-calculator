import React, { Component } from 'react';
import './App.css';
import logo from './logo.svg';

class App extends Component {
  state = {
      currentChickens: 0,
      currentEggs: 0,
      timeLeft: 0,
      intHatcheryRate: 0,
      eggLayingRate: 0,
    };

  render() {
    let endingPopulation = this.state.currentChickens + (this.state.timeLeft * 60 * this.state.intHatcheryRate * 4 * 3);
    let endingEggCount = this.state.currentEggs + ((this.state.currentChickens + endingPopulation) / 2 * this.state.timeLeft * 60 * this.state.eggLayingRate)
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Eggs Inc Contract Calculator</h1>
        </header>
        <p className="App-intro">
          <label>Current Chickens</label>
          <input type="text" value={this.state.currentChickens} onChange={e => this.setState({ currentChickens: e.target.value })} />
          <br />
          <label>Current Eggs</label>
          <input type="text" value={this.state.currentEggs} onChange={e => this.setState({ currentEggs: e.target.value })} />
          <br />
          <label>Time Left</label>
          <input type="text" value={this.state.timeLeft} onChange={e => this.setState({ timeLeft: e.target.value })} />
          <br />
          <label>Int Hatchery Rate</label>
          <input type="text" value={this.state.intHatcheryRate} onChange={e => this.setState({ intHatcheryRate: e.target.value })} />
          <br />
          <label>Egg Laying Rate</label>
          <input type="text" value={this.state.eggLayingRate} onChange={e => this.setState({ eggLayingRate: e.target.value })} />
          <br />
          <h3>Ending Chicken Count - {new Intl.NumberFormat().format(endingPopulation)}</h3>
          <h3>Ending Egg Count - {new Intl.NumberFormat().format(endingEggCount)}</h3>
        </p>
      </div>
    );
  }
}

export default App;
