import React, { Component } from 'react';
import { connect } from 'react-redux';
import BASE_URL from '../constants/api';
import Job from '../components/Job';
import { fetchJobsSucceeded, fetchJobsFailed } from '../actions';

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

class JobsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      jobs: [],
    };
    this.fetchDrinks = this.fetchDrinks.bind(this);
  }

  componentDidMount() {
    this.fetchDrinks();
  }

  async fetchDrinks() {
    const { handleSuccess, handleError } = this.props;
    try {
      this.rawData = await fetch(BASE_URL);
      this.data = await this.rawData.json();

      this.setState({
        jobs: this.data.data,
      });

      const { jobs } = this.state;
      handleSuccess(jobs);
    } catch (error) {
      console.log(error);
      handleError(error);
    }
  }

  render() {
    const { data } = this.props;
    return (
      <div className="JobsList">
        { data.error
          ? <h2>Sorry, something went wrong.</h2>
          : data.jobs.map(job => (<Job job={job} />))}
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(JobsList);
