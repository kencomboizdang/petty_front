import React from 'react';
import { withRouter, Redirect } from 'react-router';

class Authentication extends React.Component {
  componentWillMount() {
    this.props.history.push('/');
  }

  componentDidUpdate() {}

  componentWillReceiveProps() {}

  ponentWillUpdate() {}

  render() {
    return null;
  }
}
export default withRouter(Authentication);
