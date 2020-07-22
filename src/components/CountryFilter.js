import React from 'react';
import PropTypes from 'prop-types';
import styles from '../assets/styles/CountryFilter.module.css';

const CountryFilter = ({ filter, countryArray, handleFilterChange }) => (
  <select className={styles['filter-selector']} defaultValue={filter} name="filter" onChange={handleFilterChange}>
    { countryArray.map(country => <option key={country} value={country}>{country}</option>)}
  </select>
);

CountryFilter.propTypes = {
  handleFilterChange: PropTypes.func.isRequired,
  countryArray: PropTypes.instanceOf(Array).isRequired,
  filter: PropTypes.string.isRequired,
};

export default CountryFilter;
