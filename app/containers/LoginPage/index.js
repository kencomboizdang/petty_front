/**
 *
 * LoginPage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { Input, Button, Form, Checkbox } from 'antd';
import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectLoginPage from './selectors';
import reducer from './reducer';
import saga from './saga';
import './styles.scss';
import Logo from '../../images/logo/logo_orange.png';

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};

class LoginPage extends React.Component {
  clickToLogin = () => {
    this.props.clickToLogin();
  };
  render() {
    return (
      <div className="container">
        <div className="container__login">
          <div className="headline">Kênh bán hàng - Petty</div>
          <div className="logo" />
          {/* <img src={Logo} alt="logo" className="logo" /> */}
        </div>
        <div className="container__login">
          <div className="form">
            <h2 className="text-center">Đăng nhập</h2>
            <Form
              {...layout}
              name="basic"
              initialValues={{
                remember: true,
              }}
              // onFinish={onFinish}
              // onFinishFailed={onFinishFailed}
            >
              <Form.Item
                label="Tên đăng nhập"
                name="username"
                rules={[
                  {
                    required: true,
                    message: 'Please input your username!',
                  },
                ]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                label="Mật khẩu"
                name="password"
                rules={[
                  {
                    required: true,
                    message: 'Please input your password!',
                  },
                ]}
              >
                <Input.Password />
              </Form.Item>

              <Form.Item
                name="remember"
                valuePropName="checked"
                {...tailLayout}
              >
                <Checkbox>Remember me</Checkbox>
              </Form.Item>

              <Form.Item {...tailLayout}>
                <Button type="primary" htmlType="submit">
                  Đăng nhập
                </Button>
                <Button type="link" htmlType="button">
                  Quên mật khẩu
                </Button>
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>
    );
  }
}

LoginPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  loginPage: makeSelectLoginPage(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);
const withReducer = injectReducer({ key: 'loginPage', reducer });
const withSaga = injectSaga({ key: 'loginPage', saga });
export default compose(
  withConnect,
  withReducer,
  withSaga,
)(LoginPage);
