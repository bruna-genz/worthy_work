import React from 'react';
import '../styles/App.css';
import Navbar from './Navbar';
import Presentation from './Presentation';
import JobList from '../containers/JobsList';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Presentation />
      <JobList />
    </div>
  );
}

export default App;
