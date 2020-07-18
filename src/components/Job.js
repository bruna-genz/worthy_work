import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Job = ({ job }) => (
  <div className="Job">
    <Link to={`/job/${job.id}`}>{job.title}</Link>
    <div className="company-info">
      <p>{job.company.name}</p>
      <p>{job.company.country}</p>
    </div>
  </div>
);

Job.propTypes = {
  job: PropTypes.instanceOf(Object).isRequired,
};

export default Job;
