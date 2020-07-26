/**
 *
 * ProfileContainer
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectProfileContainer from './selectors';
import reducer from './reducer';
import saga from './saga';

class ProfileContainer extends React.Component {

render(){
  return <div>wad</div>;

}
}

ProfileContainer.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  profileContainer: makeSelectProfileContainer(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}
const withReducer = injectReducer({ key: 'profileContainer', reducer });
const withSaga = injectSaga({ key: 'profileContainer', saga });
const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect, withReducer, withSaga)(ProfileContainer);
