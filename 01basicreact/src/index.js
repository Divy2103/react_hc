import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // we also run without StrictMode ( strict mode is for development only )
  <React.StrictMode> 
   <App />
  {/* App()   // We can also exicute the method like this */}
  </React.StrictMode>
);
