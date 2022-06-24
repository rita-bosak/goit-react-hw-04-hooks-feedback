import React from 'react';
import PropTypes from 'prop-types';

export default function Notification({ message }) {
  <p>{message}</p>;
}

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
