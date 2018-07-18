import Chart from 'chart.js';
import PropTypes from 'prop-types';
import React from 'react';
import ReactChartkick, { LineChart } from 'react-chartkick';
import { convertNumberToDisplayString } from '../Utilities';
import Number from './Number';

ReactChartkick.addAdapter(Chart);

const Result = (props) => (
  <React.Fragment>
    <p className="font-bold mb-2">{props.title} - <Number value={props.value} /></p>
      <LineChart
        height="100px"
        data={props.data}
        library={{
          scales: {
            yAxes: [{
              ticks: {
                callback: (value) => {
                  return convertNumberToDisplayString(value);
                }
              }
            }]
          }
        }}
      />
  </React.Fragment>
);

Result.propTypes = {
  title: PropTypes.string,
  value: PropTypes.number,
  data: PropTypes.array,
};

export default Result;
