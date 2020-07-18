import React from 'react';

const JobPage = ({ match }) => (
  // <h1>I am a job page</h1>
  <code>{match.params.jobId}</code>
);

export default JobPage;
