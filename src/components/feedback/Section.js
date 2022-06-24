import React from 'react';
import PropTypes from 'prop-types';

export default function Section ({ title, children }) {
  <section key={title}>
    <h1>{title}</h1>
    {children}
  </section>
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

