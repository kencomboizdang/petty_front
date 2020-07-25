/* eslint-disable prefer-template */
/* eslint-disable no-var */
/* eslint-disable lines-between-class-members */
/* eslint-disable prettier/prettier */
/* eslint-disable no-console */
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
      isSignedIn: false,
    };
  }
  componentWillMount() {
    console.log('ADD');
    var store = sessionStorage.getItem('store');
    console.log(store);
    if (store != null) {
      this.setState({ isSignedIn: true });
      console.log('AS', this.props.history);
      if (this.props.history.location.pathname == '/login') {
        this.props.history.push('/order');
      }
    }
  }

  // componentWillUpdate(){
  //   console.log('dada');
  //   var store = sessionStorage.getItem('store');
  //   if (store !=null){
  //     this.setState({isSignedIn:true});
  //

  //   }
  // }
  // componentDidUpdate(){

  // }

  render() {
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
