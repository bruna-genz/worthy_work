import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { BASE_URL } from '../constants/api';
import Job from '../components/Job';
import { fetchJobsSucceeded, fetchJobsFailed } from '../actions';
import styles from '../styles/JobsList.module.css';

const mapStateToProps = state => ({
  data: state.data,
});

const mapDispatchToProps = dispatch => ({
  handleSuccess: jobs => {
    dispatch(fetchJobsSucceeded(jobs));
  },
  handleError: error => {
    dispatch(fetchJobsFailed(error));
  },
});

const formatedData = jobs => jobs.map(job => ({
  id: job.id,
  title: job.fields.title,
  company: {
    ...job.fields.source[0],
    country: job.fields.country ? job.fields.country[0].name : 'remote',
  },
  date: {
    created: job.fields.date.created,
    closing: job.fields.date.closing,
  },
  url: job.fields.url,
}));

class JobsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      jobs: [],
    };
    this.fetchJobs = this.fetchJobs.bind(this);
  }

  componentDidMount() {
    this.fetchJobs();
  }

  async fetchJobs() {
    const { handleSuccess, handleError } = this.props;
    try {
      this.rawResult = await fetch(BASE_URL);
      this.result = await this.rawResult.json();

      this.setState({
        jobs: formatedData(this.result.data),
      });

      const { jobs } = this.state;
      handleSuccess(jobs);
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error);
      handleError(error);
    }
  }

  render() {
    const { data } = this.props;
    return (
      <div className={styles.JobsList}>
        { data.error
          ? <h2>Sorry, something went wrong.</h2>
          : data.jobs.map(job => (<Job key={job.id} job={job} />))}
      </div>
    );
  }
}

JobsList.propTypes = {
  handleSuccess: PropTypes.func.isRequired,
  handleError: PropTypes.func.isRequired,
  data: PropTypes.instanceOf(Object).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(JobsList);
