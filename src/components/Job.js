import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';
import styles from '../assets/styles/Job.module.css';

const limitJobTitle = (title, limit = 80) => {
  const newTitle = [];
  if (title.length > limit) {
    title.split(' ').reduce((acc, cur) => {
      if (acc + cur.length <= limit) {
        newTitle.push(cur);
      }
      return acc + cur.length;
    }, 0);
    return `${newTitle.join(' ')} ...`;
  }
  return title;
};

const Job = ({ job }) => (
  <div className={styles.Job}>
    <h3 className={styles.title}>{limitJobTitle(job.title)}</h3>
    <div className={styles['company-info']}>
      <ul>
        <li className={styles['info-item']}>
          <h4>Company</h4>
          <p>{job.company.name}</p>
        </li>
        <li className={styles['info-item']}>
          <h4>Country</h4>
          <p>{job.company.country}</p>
        </li>
      </ul>
      <ul>
        <li className={styles['info-item']}>
          <h4>Posted</h4>
          <Moment fromNow>{job.date.created}</Moment>
        </li>
        <li className={styles['info-item']}>
          <h4>Closing date</h4>
          <Moment format="DD MMM YYYY">{job.date.closing}</Moment>
        </li>
      </ul>
    </div>
    <Link className={styles['job-button']} to={`/job/${job.id}`}>view</Link>
  </div>
);

Job.propTypes = {
  job: PropTypes.instanceOf(Object).isRequired,
};

export default Job;
