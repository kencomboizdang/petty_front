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
import { Input , Button, message} from 'antd';
import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectProfileContainer from './selectors';
import reducer from './reducer';
import saga from './saga';
import './styles.scss';
import * as actions from './actions';
import TextArea from 'antd/lib/input/TextArea';
class ProfileContainer extends React.Component {
  componentWillMount() {
    this.props.onGetProfile();
  }
  handleChangeValue = event => {
    var target = event.target;
    var name = target.name;
    var value = target.value;
    this.props.handleChangeProductValue(name, value);
  };
  onSaveProfile = () => {
    this.props.onSaveProfile();
    message.info("Đã lưu lại");
  };
  render() {
    const { data } = this.props.profileContainer;
    return (
      <div>
        <div class="container emp-profile">
            <div class="row">
              <div class="col-md-4">
                <div class="profile-img">
                  <img src={data.logoImg} alt="" />
                </div>
              </div>
              <div class="col-md-6">
                <div class="profile-head">
                  <h5>{data.name}</h5>
                  <h6>{data ? data.username : ''}</h6>
                  {/* <p class="proile-rating">
                    RANKINGS : <span>8/10</span>
                  </p> */}
                  <ul class="nav nav-tabs" id="myTab" role="tablist">
                    <li class="nav-item">
                      <a
                        class="nav-link active"
                        id="home-tab"
                        data-toggle="tab"
                        href="#home"
                        role="tab"
                        aria-controls="home"
                        aria-selected="true"
                      >
                        Về chúng tôi
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="col-md-2">
                <Input
                  type="button"
                  class="profile-edit-btn"
                  name="btnAddMore"
                  value="Lưu"
                  onClick={this.onSaveProfile}
                />
              </div>
            </div>
            <div class="row">
              <div class="col-md-4" />
              <div class="col-md-8">
                <div class="tab-content profile-tab" id="myTabContent">
                  <div
                    class="tab-pane fade show active"
                    id="home"
                    role="tabpanel"
                    aria-labelledby="home-tab"
                  >
                    <div class="row">
                      <div class="col-md-6">
                        <label>Email</label>
                      </div>
                      <div class="col-md-6">
                        <Input
                          style={{ marginBottom: '10px' }}
                          value={data.email}
                          onChange={this.handleChangeValue}
                          name="email"
                        />
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-md-6">
                        <label>Name</label>
                      </div>
                      <div class="col-md-6">
                        <Input
                          style={{ marginBottom: '10px' }}
                          value={data.name}
                          onChange={this.handleChangeValue}
                          name="name"
                        />
                      </div>
                    </div>

                    <div class="row">
                      <div class="col-md-6">
                        <label>Phone</label>
                      </div>
                      <div class="col-md-6">
                        <Input
                          style={{ marginBottom: '10px' }}
                          value={data.phone}
                          onChange={this.handleChangeValue}
                          name="phone"
                        />
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-md-6">
                        <label>Mô tả</label>
                      </div>
                      <div class="col-md-6">
                        <TextArea
                          style={{ marginBottom: '10px' }}
                          value={data.description}
                          onChange={this.handleChangeValue}
                          name="description"
                        />
                      </div>
                    </div>

                    <div class="row">
                      <div class="col-md-12">
                        <p>Địa chỉ chi tiết</p>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-md-6">
                        <label>Tỉnh</label>
                      </div>
                      <div class="col-md-6">
                        <Input
                          style={{ marginBottom: '10px' }}
                          value={data.province}
                          onChange={this.handleChangeValue}
                          name="province"
                        />
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-md-6">
                        <label>Quận, huyện</label>
                      </div>
                      <div class="col-md-6">
                        <Input
                          style={{ marginBottom: '10px' }}
                          value={data.ward}
                          onChange={this.handleChangeValue}
                          name="ward"
                        />
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-md-6">
                        <label>Phường</label>
                      </div>
                      <div class="col-md-6">
                        <Input
                          style={{ marginBottom: '10px' }}
                          value={data.district}
                          onChange={this.handleChangeValue}
                          name="district"
                        />
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-md-6">
                        <label>Chi tiết</label>
                      </div>
                      <div class="col-md-6">
                        <Input
                          style={{ marginBottom: '10px' }}
                          value={data.detail}
                          onChange={this.handleChangeValue}
                          name="detail"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </div>
      </div>
    );
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
    onGetProfile: () => dispatch(actions.getProfile()),
    handleChangeProductValue: (name, value) =>
      dispatch(actions.changeProductValue(name, value)),
    onSaveProfile: () => dispatch(actions.saveProfile()),
  };
}
const withReducer = injectReducer({ key: 'profileContainer', reducer });
const withSaga = injectSaga({ key: 'profileContainer', saga });
const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  withReducer,
  withSaga,
)(ProfileContainer);
