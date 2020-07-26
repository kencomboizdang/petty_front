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
import TableProductsDetailComponent from 'components/TableProductsDetailComponent';
import CalenderComponent from 'components/CalendarComponent';
import { DatePicker } from 'antd';
import { Input } from 'antd';
import { Button } from 'antd';
import * as actions from './actions';
import { withRouter } from 'react-router-dom';
import { addNamed } from '@babel/helper-module-imports';
import momment from 'moment';
import TextArea from 'antd/lib/input/TextArea';
// addNamed('/', 'named', 'source', { nameHint: "hintedName" });

const dateFormat = 'YYYY/MM/DD';
class OrderDetailContainer extends React.Component {
  componentWillMount() {
    const {
      match: { params },
      history,
    } = this.props;
    var id = history.location.pathname.substring(
      history.location.pathname.lastIndexOf('/') + 1,
    );
    // this.props.onGetOrderStore(id);
    this.ongetData(id);
  }
  ongetData = async id => {
    await this.props.onGetOrderStore(id);
  };
  onSetStatus = () => {
    this.props.onSetStatus();
  };

  render() {
    const { data } = this.props.orderDetailContainer;
    console.log(data);
    if (!data) {
      return <div />;
    }
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
          <div className="d-flex flex-column bd-highlight mb-3">
            <div className="p-2 bd-highlight">
              <div className="d-flex flex-row bd-highlight mb-3">
                <div className="p-2 bd-highlight">
                  {' '}
                  <img
                    src="https://cf.shopee.vn/file/f82f8ccb649afcdf4f07f1dd9c41bcb0"
                    className="sidebar-menu-item-icon"
                    style={{ width: '15px', height: '15px' }}
                  />
                </div>
                <div className="p-2 bd-highlight">
                  <span style={{ marginBottom: '10px' }}>QUẢN LÝ ĐƠN HÀNG</span>
                </div>
              </div>
              <div
                className="d-flex flex-row bd-highlight mb-3"
                style={{ boxSizing: 'border-box' }}
              >
                <div className="p-2 bd-highlight">
                  {' '}
                  <InputComponent text={'Tìm sản phẩm'} />
                </div>
              </div>
            </div>
          </div>
          <TableProductsDetailComponent
            data={data ? data.orderProductDetails : ''}
          />
          <div
            className="Button-TextArea"
            style={{ float: 'left', boxSizing: 'border-box', width: '658px' }}
          >
            <Button
              type="primary"
              style={{ float: 'left' }}
              onClick={this.onSetStatus}
              disabled={data.orderStatus == 'ship' ? true : false}
            >
              {data.orderStatus == 'ship'
                ? 'Đã tiếp nhận đơn hàng'
                : 'Tiếp nhận đơn hàng'}
            </Button>
          </div>
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
          <div className="d-flex flex-column bd-highlight mb-3">
            <div className="p-2 bd-highlight">
              {' '}
              <div className="d-flex flex-row bd-highlight mb-3">
                <div className="p-2 bd-highlight">
                  {' '}
                  <img
                    src="https://image.flaticon.com/icons/svg/126/126486.svg"
                    className="sidebar-menu-item-icon"
                    style={{ width: '15px', height: '15px' }}
                  />
                </div>

                <div className="p-2 bd-highlight">
                  <span style={{ marginBottom: '10px', marginTop: '10px' }}>
                    THÔNG TIN KHÁCH HÀNG
                  </span>
                </div>
              </div>
              <div className="d-flex flex-row bd-highlight mb-3">
                <div className="p-2 bd-highlight">
                  Tên khách hàng
                  <Input
                    placeholder="Tên khách hàng"
                    defaultValue={
                      data
                        ? data.address.customer.firstName +
                          ' ' +
                          data.address.customer.lastName
                        : ''
                    }
                    disabled
                  />
                </div>
              </div>
            </div>
            <div className="p-2 bd-highlight" style={{ marginLeft: '1%' }}>
              Email
              <Input
                placeholder="Địa chỉ Email"
                defaultValue={data ? data.address.customer.email : ''}
              />
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
          <div className="d-flex flex-column bd-highlight mb-3">
            <div className="d-flex flex-row bd-highlight mb-3">
              <div className="p-2 bd-highlight">
                {' '}
                <img
                  src="https://image.flaticon.com/icons/svg/157/157933.svg"
                  className="sidebar-menu-item-icon"
                  style={{ width: '15px', height: '15px' }}
                />
              </div>
              <div className="p-2 bd-highlight">
                <span style={{ marginBottom: '10px' }}>
                  THÔNG TIN NHẬN HÀNG
                </span>
              </div>
            </div>
            <div
              className="d-flex flex-row bd-highlight mb-3"
              style={{ marginLeft: '20px' }}
            >
              <div className="p-2 bd-highlight">
                <img
                  src="https://image.flaticon.com/icons/svg/845/845998.svg"
                  className="sidebar-menu-item-icon"
                  style={{ width: '10px', height: '10px' }}
                />
              </div>
              <div className="p-2 bd-highlight">Ngày đặt hàng</div>
              <div className="p-2 bd-highlight">
                <DatePicker defaultValue={data ? momment(data.date) : ''} />
              </div>
            </div>
            <div
              className="d-flex flex-row bd-highlight mb-3"
              style={{ marginLeft: '20px' }}
            >
              <div className="p-2 bd-highlight">
                {' '}
                Tên người nhận
                <Input
                  placeholder=""
                  defaultValue={data ? data.address.name : ''}
                />
              </div>
              <div className="p-2 bd-highlight">
                Số điện thoại
                <Input
                  placeholder="Số Điện Thoại"
                  defaultValue={data ? data.address.phone : ''}
                />
              </div>
            </div>
            <div
              className="d-flex flex-row bd-highlight mb-3"
              style={{ marginLeft: '20px' }}
            >
              <div className="p-2 bd-highlight">
                {' '}
                Địa chỉ
                <Input
                  placeholder="Địa chỉ"
                  defaultValue={data ? data.address.detail : ''}
                />
              </div>
            </div>
            <div
              className="d-flex flex-row bd-highlight mb-3"
              style={{ marginLeft: '20px' }}
            >
              <div className="p-2 bd-highlight">
                {' '}
                Thành Phố
                <Input
                  placeholder="Thành Phố"
                  defaultValue={data ? data.address.province : ''}
                />
              </div>
              <div className="p-2 bd-highlight">
                Quận Huyện
                <Input
                  placeholder="Quận Huyện"
                  defaultValue={data ? data.address.ward : ''}
                />
              </div>
              <div className="p-2 bd-highlight">
                Phường Xã
                <Input
                  placeholder="Phường Xã"
                  defaultValue={data ? data.address.district : ''}
                />
              </div>
            </div>
            <div
              className="d-flex flex-row bd-highlight mb-3"
              style={{ marginLeft: '20px' }}
            >
              <div className="p-2 bd-highlight">
                Ghi chú
                <TextArea
                  class="form-control"
                  id="exampleFormControlTextarea1"
                  rows="5"
                  style={{
                    float: 'left',
                    boxSizing: 'border-box',
                    width: '200%',
                  }}
                  defaultValue={data ? data.note : ''}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
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
    onGetOrderStore: id => {
      dispatch(actions.getOrderDetail(id));
    },
    onSetStatus: () => {
      dispatch(actions.setStatus());
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
  withRouter,
)(OrderDetailContainer);
