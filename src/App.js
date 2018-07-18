import Chart from 'chart.js';
import React, { Component } from 'react';
import ReactChartkick, { LineChart } from 'react-chartkick';
import Header from './components/Header';
import Number from './components/Number';
ReactChartkick.addAdapter(Chart);
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

    // calculate our graphs
    const eggCountGraph = [[0, currentEggs], [timeLeft / 2, (endingEggCount - currentEggs) / 4 + currentEggs], [timeLeft, endingEggCount]];
    const populationGraph = [[0, currentPopulation], [timeLeft, endingPopulation]];
    const eggRateGraph = [[0, eggLayingRate], [timeLeft, endingEggRate]];

    return (
      <div className="container mx-auto">

        <Header />

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

          <div className="flex flex-col w-full xm:w-full md:-w-full lg:w-1/2 xl:w-1/2">
            <div className="flex-1 bg-blue-lightest border-t-4 border-blue rounded-b text-blue-darkest px-4 py-3 m-2 shadow">
              <p className="font-bold mb-2">Ending Egg Count - <Number value={endingEggCount} /></p>
              <LineChart height="100px" data={eggCountGraph} ytitle="eggs" thousands="," />
            </div>
            <div className="flex-1 bg-teal-lightest border-t-4 border-teal rounded-b text-teal-darkest px-4 py-3 m-2 shadow">
              <p className="font-bold mb-2">Ending Population - <Number value={endingPopulation} /></p>
              <LineChart height="100px" data={populationGraph} ytitle="population" thousands="," />
            </div>
            <div className="flex-1 bg-green-lightest border-t-4 border-green rounded-b text-green-darkest px-4 p-3 m-2 shadow">
              <p className="font-bold mb-2">Ending Egg Rate - <Number value={endingEggRate} /></p>
              <LineChart height="100px" data={eggRateGraph} ytitle="laying rate" thousands="," />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
