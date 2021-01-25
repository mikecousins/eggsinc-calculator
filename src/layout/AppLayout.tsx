import { FunctionComponent } from 'react';

const AppLayout: FunctionComponent = ({ children }) => (
  <div className="text-gray-800 h-screen mt-4">
    <div className="max-w-7xl mx-auto">
      {children}
    </div>
  </div>
);

export default AppLayout;