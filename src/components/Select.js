import React from 'react';

const Select = (props) => (
  <React.Fragment>
    <select
      className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight"
      {...props}
    >
      {props.children}
    </select>
    <div className="pointer-events-none absolute pin-y pin-r flex items-center px-2 text-grey-darker">
      <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
      </svg>
    </div>
  </React.Fragment>
);

export default Select;
