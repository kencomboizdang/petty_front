/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React from 'react';
import { Switch, withRouter } from 'react-router-dom';
import RouteList from './RouteList';
import './styles.scss';
import GlobalStyle from '../../global-styles';
import MainLayout from '../../components/MainLayout';
import { AuthContext } from '../../utils/auth';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isSignedIn: true,
    };
  }
  render() {
    var { isSignedIn } = this.state;
    return (
      <AuthContext.Provider value={this.state.isSignedIn}>
        <div className="global-container">
          <MainLayout>
            <RouteList />
          </MainLayout>
          <GlobalStyle />
        </div>
      </AuthContext.Provider>
    );
  }
}

export default withRouter(App);
