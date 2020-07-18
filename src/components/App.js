import React from 'react';
import { Route, Switch } from 'react-router-dom';
import '../styles/App.css';
import Navbar from './Navbar';
import Presentation from './Presentation';
import JobsList from '../containers/JobsList';
import JobPage from './JobPage';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Presentation />
      <Switch>
        <Route path="/" component={JobsList} exact />
        <Route path="/job/:jobId" component={JobPage} />
        <Route component={Error} />
      </Switch>
    </div>
  );
}

export default App;
