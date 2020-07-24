/**
 *
 * NavigationBar
 *
 */

import React from 'react';
import './styles.scss';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';
import TabComponent from 'components/TabComponent';
import {
  MailOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { Button, Avatar, Layout, Menu, Breadcrumb } from 'antd';
import MenuList from './MenuList';
import AuthContext from '../../utils/auth';

const { Header, Sider, Content } = Layout;
const { SubMenu } = Menu;
class MainLayout extends React.Component {
  state = {
    collapsed: false,
  };
  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };
  render() {
    // console.log(isAuthenticated);
    const isAuthenticated = this.context;
    // var { isSignedIn } = this.props;
    return (
      <Layout style={{ height: '100vh' }}>
        {isAuthenticated ? (
          <Sider
            trigger={null}
            collapsible
            collapsed={this.state.collapsed}
            width="200"
          >
            <div className="logo" />
            <MenuList />
          </Sider>
        ) : (
          ''
        )}
        <Layout className="site-layout">
          {isAuthenticated ? (
            <Header className="site-layout-background" style={{ padding: 0 }}>
              {/* {React.createElement(
              this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
              {
                className: 'trigger',
                onClick: this.toggle,
              },
            )} */}
            </Header>
          ) : (
            ''
          )}
          <Content
            className="site-layout-background background-content"
            style={{
              margin: '24px 0px 10px 20px',
              padding: 24,
              minHeight: 280,
            }}
          >
            {/* <TabComponent /> */}
            {this.props.children}
          </Content>
        </Layout>
      </Layout>
    );
  }
}
MainLayout.contextType = AuthContext;
MainLayout.propTypes = {};

export default MainLayout;
