import './css/App.css';
import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";
import RouterComponent from './components/router';

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <RouterComponent />
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
