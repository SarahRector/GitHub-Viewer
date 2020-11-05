import React from 'react';
import PropTypes from 'prop-types';

const RepoDetail = ({ name, url }) => (
  <div>
    <h1>{name}</h1>
    <p>{url}</p>
  </div>
);

RepoDetail.propTypes = {
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
};

export default RepoDetail;
