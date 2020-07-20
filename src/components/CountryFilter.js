import React from 'react';
import PropTypes from 'prop-types';
import styles from '../assets/styles/CountryFilter.module.css';

const CountryFilter = ({ countryArray, handleFilterChange }) => (
  <select className={styles['filter-selector']} name="filter" onChange={handleFilterChange}>
    <option value="Country" selected disabled hidden>Country</option>
    { countryArray.map(country => <option key={country} value={country}>{country}</option>)}
  </select>
);

CountryFilter.propTypes = {
  handleFilterChange: PropTypes.func.isRequired,
  countryArray: PropTypes.instanceOf(Array).isRequired,
};

export default CountryFilter;
