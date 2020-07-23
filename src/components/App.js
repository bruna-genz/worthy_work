import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import styles from '../assets/styles/App.module.css';
import Navbar from './Navbar';
import JobsList from '../containers/JobsList';
import JobPage from '../containers/JobPage';
import Error from './Error';

function App() {
  return (
    <div className={styles.App}>
      <Navbar />
      <BrowserRouter>
        <Switch>
          <Route path="/" component={JobsList} exact />
          <Route path="/job/:jobId" component={JobPage} />
          <Route render={Error} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
