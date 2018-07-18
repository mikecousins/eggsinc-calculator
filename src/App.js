import React, { Component } from 'react';
import './App.css';
import Number from './components/Number';

class App extends Component {
  state = {
      currentPopulation: 0,
      currentPopulationUnit: '',
      currentEggs: 0,
      currentEggsUnit: '',
      timeLeft: 0,
      intHatcheryRate: 0,
      eggLayingRate: 0,
      eggLayingRateUnit: '',
      calmResearch: 200,
    };

  convertNumber = (number, unit) => {
    const float = parseFloat(number);
    switch (unit) {
      default:
      case '':
        return float;
      case 'k':
        return float * 1000;
      case 'M':
        return float * 1000000;
      case 'B':
        return float * 1000000000;
      case 'T':
        return float * 1000000000000;
    }
  }

  render() {
    // get our inputs
    const currentPopulation = this.convertNumber(this.state.currentPopulation, this.state.currentPopulationUnit);
    const currentEggs = this.convertNumber(this.state.currentEggs, this.state.currentEggsUnit);
    const timeLeft = this.convertNumber(this.state.timeLeft, '');
    const intHatcheryRate = this.convertNumber(this.state.intHatcheryRate, '');
    const eggLayingRate = this.convertNumber(this.state.eggLayingRate, this.state.eggLayingRateUnit);
    const calmResearch = this.convertNumber(this.state.calmResearch, '') / 100 + 1;

    // calculate our results
    let endingPopulation = currentPopulation + (timeLeft * 60 * intHatcheryRate * 4 * calmResearch);
    const eggLayingRatePerChicken = eggLayingRate / currentPopulation;
    const endingEggCount = currentEggs + ((currentPopulation + endingPopulation) / 2 * timeLeft * 60 * eggLayingRatePerChicken);
    const endingEggRate = endingPopulation * eggLayingRatePerChicken;

    return (
      <div className="container mx-auto">

        <nav className="flex items-center justify-between flex-wrap bg-blue p-6 shadow-lg">
          <div className="flex items-center flex-no-shrink text-white mr-6">
            <svg className="fill-current h-8 w-8 mr-2" width="54" height="54" viewBox="0 0 54 54" xmlns="http://www.w3.org/2000/svg"><path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z"/></svg>
            <span className="font-semibold text-xl tracking-tight">Egg, Inc - Contract Calculator</span>
          </div>
        </nav>

        <div className="flex flex-wrap mb-4 shadow-lg">

          <div className="w-full xm:w-full md:-w-full lg:w-1/2 xl:w-1/2 px-4 pt-4">
            <form className="w-full">
              <div className="flex flex-wrap mb-4">
                <label className="block text-grey-darker text-sm font-bold mb-2 w-full">Current Population</label>
                <div className="w-3/4">
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight"
                    type="text"
                    value={this.state.currentPopulation}
                    onChange={e => this.setState({ currentPopulation: e.target.value })}
                  />
                </div>
                <div className="w-1/4 inline-block relative">
                  <select
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight"
                    value={this.state.currentPopulationUnit}
                    onChange={e => this.setState({ currentPopulationUnit: e.target.value })}
                  >
                    <option></option>
                    <option>k</option>
                    <option>M</option>
                    <option>B</option>
                  </select>
                  <div className="pointer-events-none absolute pin-y pin-r flex items-center px-2 text-grey-darker">
                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
                    </svg>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap mb-4">
                <label className="block text-grey-darker text-sm font-bold mb-2 w-full">Current Eggs</label>
                <div className="w-3/4">
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight"
                    type="text"
                    value={this.state.currentEggs}
                    onChange={e => this.setState({ currentEggs: e.target.value })}
                  />
                </div>
                <div className="w-1/4 inline-block relative">
                  <select
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight"
                    value={this.state.currentEggsUnit}
                    onChange={e => this.setState({ currentEggsUnit: e.target.value })}
                  >
                    <option></option>
                    <option>k</option>
                    <option>M</option>
                    <option>B</option>
                    <option>T</option>
                  </select>
                  <div className="pointer-events-none absolute pin-y pin-r flex items-center px-2 text-grey-darker">
                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                  </div>
                </div>
              </div>

              <div className="mb-4">
                <label className="block text-grey-darker text-sm font-bold mb-2">Time Left (hours)</label>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight" type="text" value={this.state.timeLeft} onChange={e => this.setState({ timeLeft: e.target.value })} />
              </div>

              <div className="flex flex-wrap mb-4">
                <label className="block text-grey-darker text-sm font-bold mb-2 w-full">Egg Laying Rate (eggs/minute)</label>
                <div className="w-3/4">
                  <input className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight" type="text" value={this.state.eggLayingRate} onChange={e => this.setState({ eggLayingRate: e.target.value })} />
                </div>
                <div className="w-1/4 inline-block relative">
                  <select
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight"
                    value={this.state.eggLayingRateUnit}
                    onChange={e => this.setState({ eggLayingRateUnit: e.target.value })}
                  >
                    <option></option>
                    <option>k</option>
                    <option>M</option>
                    <option>B</option>
                  </select>
                  <div className="pointer-events-none absolute pin-y pin-r flex items-center px-2 text-grey-darker">
                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                  </div>
                </div>
              </div>

              <div className="mb-4">
                <label className="block text-grey-darker text-sm font-bold mb-2 w-full">Int Hatchery Rate (chickens/min/hab)</label>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight" type="text" value={this.state.intHatcheryRate} onChange={e => this.setState({ intHatcheryRate: e.target.value })} />
              </div>

              <div className="mb-4">
                <label className="block text-grey-darker text-sm font-bold mb-2 w-full">Epic Internal Hatchery Calm Research (%)</label>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight" type="text" value={this.state.calmResearch} onChange={e => this.setState({ calmResearch: e.target.value })} />
              </div>

            </form>
          </div>

          <div className="w-full xm:w-full md:-w-full lg:w-1/2 xl:w-1/2">
            <div className="bg-blue-lightest border-t-4 border-blue rounded-b text-blue-darkest px-4 py-3 shadow-md m-4" role="alert">
              <div className="flex">
                <div className="py-1">
                  <svg className="fill-current h-6 w-6 text-blue mr-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z"/></svg>
                </div>
                <div>
                  <p className="font-bold">Ending Egg Count - <Number value={endingEggCount} /></p>
                  <p className="text-sm">Ending Population - <Number value={endingPopulation} /></p>
                  <p className="text-sm">Ending Egg Rate - <Number value={endingEggRate} /></p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    );
  }
}

export default App;
