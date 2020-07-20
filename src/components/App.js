import React from 'react';
import { Route, Switch } from 'react-router-dom';
import styles from '../assets/styles/App.module.css';
import Navbar from './Navbar';
import JobsList from '../containers/JobsList';
import JobPage from '../containers/JobPage';

function App() {
  return (
    <div className={styles.App}>
      <Navbar />
      <Switch>
        <Route path="/" component={JobsList} exact />
        <Route path="/job/:jobId" component={JobPage} />
        <Route component={Error} />
      </Switch>
    </div>
  );
}

export default App;
