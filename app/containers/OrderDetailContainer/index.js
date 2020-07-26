import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectOrderDetailContainer from './selectors';
import reducer from './reducer';
import saga from './saga';
import InputComponent from 'components/InputSearchComponent';
import TableComponent from 'components/TableComponent';
import CalenderComponent from 'components/CalendarComponent';
import { DatePicker } from 'antd';
import { Input } from 'antd';
import { Button } from 'antd';
import * as actions from './actions';
import { withRouter } from 'react-router-dom';
import { addNamed } from "@babel/helper-module-imports";
// addNamed('/', 'named', 'source', { nameHint: "hintedName" });


class OrderDetailContainer extends React.Component {
  componentWillMount() {

    const {
      match: { params },
      history,
    } = this.props;
    var id =history.location.pathname.substring(history.location.pathname.lastIndexOf("/")+1);
    this.props.onGetOrderStore(id);
  }

  render() {
    return (
      <div>
      <div
        className="Products"
        style={{
          width: '658px',
          boxSizing: 'border-box',
          border: '1px solid gray',
          boxShadow: '0px 0px 0px 1px rgba(0,0,0,0.3)',
          borderRadius: '5px',
          float: 'left',
        }}
      >
        <div class="d-flex flex-column bd-highlight mb-3">
          <div class="p-2 bd-highlight">
            <div class="d-flex flex-row bd-highlight mb-3">
              <div class="p-2 bd-highlight">
                {' '}
                <img
                  src="https://cf.shopee.vn/file/f82f8ccb649afcdf4f07f1dd9c41bcb0"
                  class="sidebar-menu-item-icon"
                  style={{ width: '15px', height: '15px' }}
                />
              </div>
              <div class="p-2 bd-highlight">
                <span style={{ marginBottom: '10px' }}>QUẢN LÝ ĐƠN HÀNG</span>
              </div>
            </div>
            <div
              class="d-flex flex-row bd-highlight mb-3"
              style={{ boxSizing: 'border-box' }}
            >
              <div class="p-2 bd-highlight">
                {' '}
                <InputComponent text={'Tìm sản phẩm'} />
              </div>
              <div class="p-2 bd-highlight">
                <Button type="primary">Tìm theo QR</Button>
              </div>
            </div>
          </div>
        </div>
        <TableComponent />
        <div
          className="Button-TextArea"
          style={{ float: 'left', boxSizing: 'border-box', width: '658px' }}
        >
          <Button type="primary" style={{ float: 'left' }}>
            ĐÃ GIAO HÀNG
          </Button>
        </div>
        <textarea
          class="form-control"
          id="exampleFormControlTextarea1"
          rows="3"
          style={{ float: 'left', boxSizing: 'border-box', width: '658px' }}
        />
      </div>

      <div
        className="Customers"
        style={{
          width: '558px',

          boxSizing: 'border-box',
          border: '1px solid gray',
          boxShadow: '0px 0px 0px 1px rgba(0,0,0,0.3)',
          borderRadius: '5px',
          float: 'right',
        }}
      >
        <div class="d-flex flex-column bd-highlight mb-3">
          <div class="p-2 bd-highlight">
            {' '}
            <div class="d-flex flex-row bd-highlight mb-3">
              <div class="p-2 bd-highlight">
                {' '}
                <img
                  src="https://image.flaticon.com/icons/svg/126/126486.svg"
                  class="sidebar-menu-item-icon"
                  style={{ width: '15px', height: '15px' }}
                />
              </div>

              <div class="p-2 bd-highlight">
                <span style={{ marginBottom: '10px', marginTop: '10px' }}>
                  THÔNG TIN KHÁCH HÀNG
                </span>
              </div>
            </div>
            <div class="d-flex flex-row bd-highlight mb-3">
              <div class="p-2 bd-highlight">
                Tên khách hàng
                <Input placeholder="Tên khách hàng" />
              </div>
              <div class="p-2 bd-highlight">
                Số điện thoại
                <Input placeholder="Số Điện Thoại" />
              </div>
              <div class="p-2 bd-highlight">
                <Input.Group compact>
                  Ngày sinh
                  <DatePicker
                    style={{ width: '100%' }}
                    hint="Chọn ngày sinh"
                  />
                </Input.Group>
              </div>
            </div>
          </div>
          <div class="p-2 bd-highlight" style={{ marginLeft: '1%' }}>
            Email
            <Input placeholder="Địa chỉ Email" />
          </div>
        </div>
      </div>
      <div
        className="Address"
        style={{
          width: '558px',

          boxSizing: 'border-box',
          border: '1px solid gray',
          boxShadow: '0px 0px 0px 1px rgba(0,0,0,0.3)',
          borderRadius: '5px',
          float: 'right',
        }}
      >
        <div class="d-flex flex-column bd-highlight mb-3">
          <div class="d-flex flex-row bd-highlight mb-3">
            <div class="p-2 bd-highlight">
              {' '}
              <img
                src="https://image.flaticon.com/icons/svg/157/157933.svg"
                class="sidebar-menu-item-icon"
                style={{ width: '15px', height: '15px' }}
              />
            </div>
            <div class="p-2 bd-highlight">
              <span style={{ marginBottom: '10px' }}>
                THÔNG TIN NHẬN HÀNG
              </span>
            </div>
          </div>
          <div
            class="d-flex flex-row bd-highlight mb-3"
            style={{ marginLeft: '20px' }}
          >
            <div class="p-2 bd-highlight">
              <img
                src="https://image.flaticon.com/icons/svg/845/845998.svg"
                class="sidebar-menu-item-icon"
                style={{ width: '10px', height: '10px' }}
              />
            </div>
            <div class="p-2 bd-highlight">Ngày dự kiến nhận hàng</div>
            <div class="p-2 bd-highlight">
              <DatePicker />
            </div>
          </div>
          <div
            class="d-flex flex-row bd-highlight mb-3"
            style={{ marginLeft: '20px' }}
          >
            <div class="p-2 bd-highlight">
              {' '}
              Tên người nhận
              <Input placeholder="Tên người nhận" />
            </div>
            <div class="p-2 bd-highlight">
              Số điện thoại
              <Input placeholder="Số Điện Thoại" />
            </div>
          </div>
          <div
            class="d-flex flex-row bd-highlight mb-3"
            style={{ marginLeft: '20px' }}
          >
            <div class="p-2 bd-highlight">
              {' '}
              Địa chỉ
              <Input placeholder="Địa chỉ" />
            </div>
            <div class="p-2 bd-highlight">
              Quốc gia
              <Input placeholder="Quốc gia" />
            </div>
          </div>
          <div
            class="d-flex flex-row bd-highlight mb-3"
            style={{ marginLeft: '20px' }}
          >
            <div class="p-2 bd-highlight">
              {' '}
              Thành Phố
              <Input placeholder="Thành Phố" />
            </div>
            <div class="p-2 bd-highlight">
              Quận Huyện
              <Input placeholder="Quận Huyện" />
            </div>
            <div class="p-2 bd-highlight">
              Phường Xã
              <Input placeholder="Phường Xã" />
            </div>
          </div>
        </div>
      </div>
    </div>   );
  }
}

OrderDetailContainer.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  orderDetailContainer: makeSelectOrderDetailContainer(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    onGetOrderStore: (id) => {
      dispatch(actions.getOrderDetail(id));
    },
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);
const withReducer = injectReducer({ key: 'orderDetailContainer', reducer });
const withSaga = injectSaga({ key: 'orderDetailContainer', saga });
export default compose(
  withConnect,
  withReducer,
  withSaga,
  withRouter
)(OrderDetailContainer);
