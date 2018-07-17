import React, { Component } from 'react';
import './App.css';
import Number from './components/Number';

class App extends Component {
  state = {
      currentChickens: 0,
      currentEggs: 0,
      timeLeft: 0,
      intHatcheryRate: 0,
      eggLayingRate: 0,
    };

  render() {
    let endingPopulation = parseInt(this.state.currentChickens, 10) + (parseInt(this.state.timeLeft, 10) * 60 * parseInt(this.state.intHatcheryRate, 10) * 4 * 3);
    const eggLayingRatePerChicken = this.state.eggLayingRate / this.state.currentChickens;
    let endingEggCount = parseInt(this.state.currentEggs, 10) + ((parseInt(this.state.currentChickens, 10) + endingPopulation) / 2 * parseInt(this.state.timeLeft, 10) * 60 * eggLayingRatePerChicken);
    return (
      <div className="container mx-auto">
        <nav className="flex items-center justify-between flex-wrap bg-teal p-6">
          <div className="flex items-center flex-no-shrink text-white mr-6">
            <svg className="fill-current h-8 w-8 mr-2" width="54" height="54" viewBox="0 0 54 54" xmlns="http://www.w3.org/2000/svg"><path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z"/></svg>
            <span className="font-semibold text-xl tracking-tight">Eggs Inc - Contract Calculator</span>
          </div>
        </nav>
        <div>
          <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <div class="bg-teal-lightest border-t-4 border-teal rounded-b text-teal-darkest px-4 py-3 shadow-md" role="alert">
              <div class="flex">
                <div class="py-1"><svg class="fill-current h-6 w-6 text-teal mr-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z"/></svg></div>
                <div>
                  <p class="font-bold">Ending Egg Count - <Number value={endingEggCount} /></p>
                  <p class="text-sm">Ending Chicken Count - <Number value={endingPopulation} /></p>
                </div>
              </div>
            </div>
            <div className="mb-4 mt-4">
              <label className="block text-grey-darker text-sm font-bold mb-2 flex flex-wrap items-stretch w-full relative">Current Chickens</label>
              <div className="flex flex-wrap items-stretch w-full mb-4 relative">
                <input className="shadow  text-grey-darker flex-shrink flex-grow flex-auto leading-normal w-px flex-1 border h-10 border-grey-light rounded rounded-l-none px-3 relative" type="text" value={this.state.currentChickens} onChange={e => this.setState({ currentChickens: e.target.value })} />
                <div class="flex -mr-px">
                  <select class="flex items-center leading-normal bg-grey-lighter rounded rounded-l-none border border-l-0 border-grey-light px-3 whitespace-no-wrap text-grey-dark text-sm">
                    <option>B</option>
                    <option>M</option>
                </select>
                </div>
              </div>
            </div>
            <div className="mb-4">
              <label className="block text-grey-darker text-sm font-bold mb-2">Current Eggs</label>
              <input className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight" type="text" value={this.state.currentEggs} onChange={e => this.setState({ currentEggs: e.target.value })} />
            </div>
            <div className="mb-4">
              <label className="block text-grey-darker text-sm font-bold mb-2">Time Left (hours)</label>
              <input className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight" type="text" value={this.state.timeLeft} onChange={e => this.setState({ timeLeft: e.target.value })} />
            </div>
            <div className="mb-4">
              <label className="block text-grey-darker text-sm font-bold mb-2">Int Hatchery Rate (chickens/min/hab)</label>
              <input className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight" type="text" value={this.state.intHatcheryRate} onChange={e => this.setState({ intHatcheryRate: e.target.value })} />
            </div>
            <div className="mb-4">
              <label className="block text-grey-darker text-sm font-bold mb-2">Egg Laying Rate (eggs/minute)</label>
              <input className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight" type="text" value={this.state.eggLayingRate} onChange={e => this.setState({ eggLayingRate: e.target.value })} />
            </div>
        </form>

        </div>
      </div>
    );
  }
}

export default App;
