/**
 *
 * ProductListContainer
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectProductListContainer from './selectors';
import reducer from './reducer';
import saga from './saga';

class ProductListContainer extends React.Component {
  render() {
    return <div>meme</div>;
  }
}

ProductListContainer.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  productListContainer: makeSelectProductListContainer(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}
const withReducer = injectReducer({ key: 'productListContainer', reducer });
const withSaga = injectSaga({ key: 'productListContainer', saga });
const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  withReducer,
  withSaga,
)(ProductListContainer);
