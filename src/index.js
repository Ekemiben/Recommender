// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import App from './App';
// import { BrowserRouter } from 'react-router-dom';


// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );




// index.js or App.js
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// import AuthProvider from '../src/components/Context/AuthContext';

ReactDOM.render(
  <React.StrictMode>
    {/* <AuthProvider> */}
      <App />
    {/* </AuthProvider> */}
  </React.StrictMode>,
  document.getElementById('root')
);



