import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchDetailsSucceeded, fetchDetailsFailed } from '../actions';
import { DETAIL_URL } from '../constants/api';
import DetailedJob from '../components/DetailedJob';

const formatData = job => ({
  title: job.fields.title,
  company: job.fields.source[0].name,
  country: job.fields.country ? job.fields.country[0].name : 'remote',
  city: job.fields.city ? job.fields.city[0].name : 'remote',
  type: job.fields.type[0].name,
  careerCategory: job.fields.career_categories[0].name,
  experience: job.fields.experience[0].name,
  date: {
    created: job.fields.date.created,
    closing: job.fields.date.closing,
  },
  description: job.fields['body-html'],
  apply: job.fields['how_to_apply-html'],
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
        job: Object.assign(prevState.job,
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
    const { job } = this.state;
    return <DetailedJob job={job} />;
  }
}

JobPage.propTypes = {
  handleSuccess: PropTypes.func.isRequired,
  handleError: PropTypes.func.isRequired,
  match: PropTypes.instanceOf(Object).isRequired,
};

export default connect(null, mapDispatchToProps)(JobPage);
