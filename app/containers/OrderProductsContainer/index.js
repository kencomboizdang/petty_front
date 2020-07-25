/**
 *
 * OrderProductsContainer
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import TableComponent from 'components/TableComponent';
import InputSearch from 'components/InputSearchComponent';
import CanlendarComponent from 'components/CalendarComponent';
import { Tabs, Select, Button, Col, Row } from 'antd';
import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectOrderProductsContainer from './selectors';
import './styles.scss';
import reducer from './reducer';
import saga from './saga';
import { defaultAction,  getAllOrderStore  } from './actions';
import QRCode from 'react-qr-code';
import BarCode from 'react-barcode';
const { TabPane } = Tabs;
const { Option } = Select;
class OrderProductsContainer extends React.Component {
  state = {
    tabPosition: 'top',
  };

  componentWillMount() {
    this.props.demo();
    this.props.getAllOrderStore();
  }
  changeTabPosition = tabPosition => {
    this.setState({ tabPosition });
  };
  chagenAPI = () => {
    this.props.demo();
  };

  render() {
    return (
      <div>
        <Button onClick={this.chagenAPI}>Change</Button>
        <InputSearch />
        <Tabs tabPosition={this.state.tabPosition}>
          <TabPane tab="Tất cả" key="1">
            <div className="row">
              <div className="col-xs-8 col-sm-8 col-md-8 col-lg-6">
                <InputSearch />
              </div>
              <div className="col-xs-6 col-sm-6 col-md-8 col-lg-6">
                <div className="search">
                  <div className="calendar">
                    <CanlendarComponent />
                  </div>
                  <Button>Tìm kiếm</Button>
                </div>
              </div>
            </div>
            <TableComponent data={this.props.orderProductsContainer.data}/>
          </TabPane>
          <TabPane tab="Chờ xác nhận" key="2">
            <TableComponent />
            <TableComponent />
            <TableComponent />
            <TableComponent />
          </TabPane>
          <TabPane tab="Đang giao" key="3">
            <TableComponent />
          </TabPane>
        </Tabs>
      </div>
    );
  }
}

OrderProductsContainer.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  orderProductsContainer: makeSelectOrderProductsContainer(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    demo: () => dispatch(defaultAction()),
    getAllOrderStore: () => dispatch(getAllOrderStore()),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);
const withReducer = injectReducer({ key: 'orderProductsContainer', reducer });
const withSaga = injectSaga({ key: 'orderProductsContainer', saga });
export default compose(
  withConnect,
  withReducer,
  withSaga,
)(OrderProductsContainer);
