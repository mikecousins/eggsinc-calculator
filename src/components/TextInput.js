import React from 'react';

const TextInput = (props) => (
  <input
    type="text"
    className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight"
    {...props}
  />
);

export default TextInput;