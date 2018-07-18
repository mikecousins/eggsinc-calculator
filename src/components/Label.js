import React from 'react';

const Label = (props) => (
  <label className="block text-grey-darker text-sm font-bold mb-2 w-full">
    {props.children}
  </label>
);

export default Label;