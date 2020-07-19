import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchDetailsSucceeded, fetchDetailsFailed } from '../actions';
import { DETAIL_URL } from '../constants/api';

const formatData = job => ({
  title: job.fields.title,
  company: {
    ...job.fields.source[0],
    country: job.fields.country ? job.fields.country[0].name : 'remote',
    city: job.fields.city ? job.fields.city[0].name : 'remote',
  },
  type: job.fields.type[0].name,
  careerCategory: job.fields.career_categories[0].name,
  experience: job.fields.experience[0].name,
  date: {
    created: job.fields.date.created,
    closing: job.fields.date.closing,
  },
  description: job.fields.body,
  apply: job.fields.how_to_apply,
  url: job.fields.url,
});

const mapDispatchToProps = dispatch => ({
  handleSuccess: details => {
    dispatch(fetchDetailsSucceeded(details));
  },
  handleError: error => {
    dispatch(fetchDetailsFailed(error));
  },
});

class JobPage extends Component {
  constructor(props) {
    super(props);
    const { match } = this.props;
    this.state = {
      job: {
        id: match.params.jobId,
      },
    };
  }

  componentDidMount() {
    this.fetchDetails();
  }

  async fetchDetails() {
    const { handleSuccess, handleError } = this.props;
    const { job } = this.state;
    try {
      this.rawResult = await fetch(DETAIL_URL(job.id));
      this.result = await this.rawResult.json();

      this.setState(prevState => ({
        job: Object.assign(prevState,
          formatData(this.result.data[0])),
      }));

      handleSuccess(job);
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error);
      handleError(error);
    }
  }

  render() {
    return <h1>I am a job page</h1>;
  }
}

JobPage.propTypes = {
  handleSuccess: PropTypes.func.isRequired,
  handleError: PropTypes.func.isRequired,
  match: PropTypes.instanceOf(Object).isRequired,
};

export default connect(null, mapDispatchToProps)(JobPage);
