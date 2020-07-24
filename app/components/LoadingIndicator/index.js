/**
 *
 * LoadingIndicator
 *
 */

import React from 'react';
import './styles.scss';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

class LoadingIndicator extends React.Component {
  render() {
    return (
      <div>
        <div className="lds-ellipsis">
          <div />
          <div />
          <div />
          <div />
        </div>
      </div>
    );
  }
}

LoadingIndicator.propTypes = {};

export default LoadingIndicator;
