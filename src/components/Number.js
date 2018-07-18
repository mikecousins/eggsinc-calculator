import PropTypes from 'prop-types';
import React from 'react';
import { convertNumberToDisplayString } from '../Utilities';

const Number = (props) => {
  const { value } = props;
    return <React.Fragment>{convertNumberToDisplayString(value)}</React.Fragment>;
}

Number.propTypes = {
  value: PropTypes.number.isRequired,
};

export default Number;
