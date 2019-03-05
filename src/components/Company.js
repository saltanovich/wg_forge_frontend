import React from 'react';
import PropTypes from 'prop-types';

const Company = ({ title, url, industry }) => (
  <React.Fragment>
    <p>Company: <a href={url} target="_blank" rel="noopener noreferrer">{title}</a></p>
    <p>Industry: {industry}</p>
  </React.Fragment>
);

Company.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  industry: PropTypes.string.isRequired,
};

export default Company;
