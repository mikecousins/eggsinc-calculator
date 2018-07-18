import { Formik } from 'formik';
import { Persist } from 'formik-persist';
import React from 'react';
import Header from './components/Header';
import Label from './components/Label';
import Result from './components/Result';
import Select from './components/Select';
import TextInput from './components/TextInput';
import { convertNumberToRaw } from './Utilities';

const App = () => (
  <div className="container mx-auto">
    <Header />
    <Formik
      initialValues={{
        currentPopulation: 0,
        currentPopulationUnit: '',
        currentEggs: 0,
        currentEggsUnit: '',
        timeLeft: 0,
        intHatcheryRate: 0,
        eggLayingRate: 0,
        eggLayingRateUnit: '',
        calmResearch: 200,
      }}
      validate={(values) => {
        const errors = {};
        return errors;
      }}
      render={({
        values,
        handleChange,
        setFieldValue,
      }) => {
        // get our inputs
        const currentPopulation = convertNumberToRaw(values.currentPopulation, values.currentPopulationUnit);
        const currentEggs = convertNumberToRaw(values.currentEggs, values.currentEggsUnit);
        const timeLeft = convertNumberToRaw(values.timeLeft, '');
        const intHatcheryRate = convertNumberToRaw(values.intHatcheryRate, '');
        const eggLayingRate = convertNumberToRaw(values.eggLayingRate, values.eggLayingRateUnit);
        const calmResearch = convertNumberToRaw(values.calmResearch, '') / 100 + 1;

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
          <div className="flex flex-wrap mb-4 shadow-lg">
            <Persist name="egg-inc" />
            <div className="w-full xm:w-full md:-w-full lg:w-1/2 xl:w-1/2 px-4 pt-4">
              <form className="w-full">
                <div className="flex flex-wrap mb-4">
                  <Label>Current Population</Label>
                  <div className="w-3/4">
                    <TextInput name="currentPopulation" value={values.currentPopulation} onChange={handleChange} />
                  </div>
                  <div className="w-1/4 inline-block relative">
                    <Select
                      name="currentPopulationUnit"
                      value={values.currentPopulationUnit}
                      onChange={handleChange}
                    >
                      <option></option>
                      <option>k</option>
                      <option>M</option>
                      <option>B</option>
                    </Select>
                  </div>
                </div>

                <div className="flex flex-wrap mb-4">
                  <Label>Current Eggs</Label>
                  <div className="w-3/4">
                    <TextInput name="currentEggs" value={values.currentEggs} onChange={handleChange} />
                  </div>
                  <div className="w-1/4 inline-block relative">
                    <Select
                      name="currentEggsUnit"
                      value={values.currentEggsUnit}
                      onChange={handleChange}
                    >
                      <option></option>
                      <option>k</option>
                      <option>M</option>
                      <option>B</option>
                      <option>T</option>
                    </Select>
                  </div>
                </div>

                <div className="mb-4">
                  <Label>Time Left (hours)</Label>
                  <TextInput name="timeLeft" value={values.timeLeft} onChange={handleChange} />
                </div>

                <div className="flex flex-wrap mb-4">
                  <Label>Egg Laying Rate (eggs/minute)</Label>
                  <div className="w-3/4">
                    <TextInput name="eggLayingRate" value={values.eggLayingRate} onChange={handleChange} />
                  </div>
                  <div className="w-1/4 inline-block relative">
                    <Select
                      name="eggLayingRateUnit"
                      value={values.eggLayingRateUnit}
                      onChange={handleChange}
                    >
                      <option></option>
                      <option>k</option>
                      <option>M</option>
                      <option>B</option>
                    </Select>
                  </div>
                </div>

                <div className="mb-4">
                  <Label>Int Hatchery Rate (chickens/min/hab)</Label>
                  <TextInput name="intHatcheryRate" value={values.intHatcheryRate} onChange={handleChange} />
                </div>

                <div className="mb-4">
                  <Label>Epic Internal Hatchery Calm Research (%)</Label>
                  <TextInput name="calmResearch" value={values.calmResearch} onChange={handleChange} />
                </div>

              </form>
            </div>

            <div className="flex flex-col w-full xm:w-full md:-w-full lg:w-1/2 xl:w-1/2">
              <div className="flex-1 bg-blue-lightest border-t-4 border-blue rounded-b text-blue-darkest px-4 py-3 m-2 shadow">
                <Result title="Ending Egg Count" value={endingEggCount} data={eggCountGraph} />
              </div>
              <div className="flex-1 bg-teal-lightest border-t-4 border-teal rounded-b text-teal-darkest px-4 py-3 m-2 shadow">
                <Result title="Ending Population" value={endingPopulation} data={populationGraph} />
              </div>
              <div className="flex-1 bg-green-lightest border-t-4 border-green rounded-b text-green-darkest px-4 p-3 m-2 shadow">
                <Result title="Ending Egg Rate" value={endingEggRate} data={eggRateGraph} />
              </div>
            </div>
          </div>
      );}}
    />
  </div>
);

export default App;
