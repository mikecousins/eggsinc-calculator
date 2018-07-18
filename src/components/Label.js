import React from 'react';

const Label = (props) => (
  <label className="block text-grey-darker text-base font-bold mb-2 w-full" {...props}>
    {props.children}
  </label>
);

export default Label;