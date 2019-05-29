import React from 'react';

const Label = (props) => (
  <label className="block text-gray-600 text-base font-bold mb-2 w-full" {...props}>
    {props.children}
  </label>
);

export default Label;