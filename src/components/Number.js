import PropTypes from 'prop-types';
import React from 'react';

const Number = (props) => {
  const { value } = props;
  const trillion = 1000000000000;
  const billion = 1000000000;
  const million = 1000000;
  if (value / trillion > 1) {
    return <React.Fragment>{`${value / trillion}T`}</React.Fragment>;
  } else if (value / billion > 1) {
    return <React.Fragment>{`${value / billion}B`}</React.Fragment>;
  } else if (value / million > 1) {
    return <React.Fragment>{`${value / million}M`}</React.Fragment>;
  } else {
    return <React.Fragment>{value}</React.Fragment>;
  }
}

Number.propTypes = {
  value: PropTypes.number.isRequired,
};

export default Number;
