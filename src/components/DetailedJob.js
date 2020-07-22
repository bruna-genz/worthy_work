/* eslint-disable react/jsx-no-target-blank */
import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';
import { Link, BrowserRouter } from 'react-router-dom';
import styles from '../assets/styles/DetailedJob.module.css';

const DetailedJob = ({ job }) => {
  const dateCreated = job.date ? job.date.created : '2020-07-20T20:04:22+00:00';
  const dateClosing = job.date ? job.date.closing : '2020-07-20T20:04:22+00:00';
  const formatedLocation = job.city === 'remote' ? 'Remote' : `${job.city}, ${job.country}`;

  return (
    <div className={styles.DetailedJob}>
      <BrowserRouter>
        <Link to="/" className={styles.button}>Back</Link>
      </BrowserRouter>
      <div className={styles.header}>
        <h1>{job.title}</h1>
        <div className={styles['header-small']}>
          <p>
            <span className={styles['sub-title']}>{'Company: '}</span>
            {job.company}
          </p>
          <p className={styles['side-borders']}>
            <span className={styles['sub-title']}>{'Created: '}</span>
            <Moment fromNow>{dateCreated}</Moment>
          </p>
          <p>
            <span className={styles['sub-title']}>{'Closing date: '}</span>
            <Moment format="DD MMM YYYY">{dateClosing}</Moment>
          </p>
        </div>
      </div>
      <div className={styles.body}>
        <div className={styles['body-left']}>
          <p>{job.description}</p>
          <h2>How to apply</h2>
          <p>{job.apply}</p>
          <BrowserRouter>
            <Link to="/" className={styles.button}>Back</Link>
          </BrowserRouter>
        </div>
        <ul className={styles['body-right']}>
          <li className={styles['info-item']}>
            <h4>Location</h4>
            <p>{formatedLocation}</p>
          </li>
          <li className={styles['info-item']}>
            <h4>Type</h4>
            <p>{job.type}</p>
          </li>
          <li className={styles['info-item']}>
            <h4>Career category</h4>
            <p>{job.careerCategory}</p>
          </li>
          <li className={styles['info-item']}>
            <h4>Years of experience</h4>
            <p>{job.experience}</p>
          </li>
          <a className={styles.button} href={job.url} target="_blank">See original</a>
        </ul>
      </div>
    </div>
  );
};

DetailedJob.propTypes = {
  job: PropTypes.instanceOf(Object).isRequired,
};

export default DetailedJob;
