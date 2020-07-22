import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { BASE_URL } from '../constants/api';
import Job from '../components/Job';
import { fetchJobsSucceeded, fetchJobsFailed, filterCreator } from '../actions';
import styles from '../assets/styles/JobsList.module.css';
import Presentation from '../components/Presentation';
import CountryFilter from '../components/CountryFilter';

const mapStateToProps = state => ({
  data: state.data,
  filter: state.filter,
});

const mapDispatchToProps = dispatch => ({
  handleSuccess: jobs => {
    dispatch(fetchJobsSucceeded(jobs));
  },
  handleError: error => {
    dispatch(fetchJobsFailed(error));
  },
  handleFilterChange: event => {
    dispatch(filterCreator(event.target.value));
  },
});

export const formatedData = jobs => jobs.map(job => ({
  id: job.id,
  title: job.fields.title,
  company: {
    ...job.fields.source[0],
    country: job.fields.country ? job.fields.country[0].name : 'Remote',
  },
  date: {
    created: job.fields.date.created,
    closing: job.fields.date.closing,
  },
  url: job.fields.url,
}));

export const mapCountries = jobs => ['All', ...new Set(jobs.map(job => job.company.country))];

export const renderHelper = (filter, jobs) => (
  filter === 'All' ? jobs : jobs.filter(job => job.company.country === filter)
);

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
    const { data, handleFilterChange, filter } = this.props;
    const countryArray = data.jobs ? mapCountries(data.jobs) : [];
    return (
      <div>
        <div className={styles.header}>
          <Presentation />
          <CountryFilter
            filter={filter}
            countryArray={countryArray}
            handleFilterChange={handleFilterChange}
          />
        </div>
        <div className={styles.JobsList}>
          { data.error
            ? <h2>Sorry, something went wrong.</h2>
            : renderHelper(filter, data.jobs).map(job => (<Job key={job.id} job={job} />))}
        </div>
      </div>
    );
  }
}

JobsList.propTypes = {
  handleSuccess: PropTypes.func.isRequired,
  handleError: PropTypes.func.isRequired,
  handleFilterChange: PropTypes.func.isRequired,
  data: PropTypes.instanceOf(Object).isRequired,
  filter: PropTypes.string.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(JobsList);
