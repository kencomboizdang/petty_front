/**
 *
 * ProductListContainer
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { Input } from 'antd';
import { DownloadOutlined } from '@ant-design/icons';
import TableProductsComponent from 'components/TableProductsComponent';
import {
  Col,
  Row,
  Select,
  InputNumber,
  DatePicker,
  AutoComplete,
  Cascader,
  Button,
} from 'antd';
import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectProductListContainer from './selectors';
import reducer from './reducer';
import saga from './saga';
import { SearchOutlined, PlusOutlined } from '@ant-design/icons';
import { size } from 'lodash';
import * as actions from './actions';
class ProductListContainer extends React.Component {
  componentWillMount(){
    this.props.onGetProduct();
  }
  render() {
    return (
      <div style={{ border: '1px solid black' }}>
        <div
          class="d-flex flex-row bd-highlight mb-3"
          style={{ width: 'auto' }}
        >
          <div class="p-2 bd-highlight">
            {' '}
            <Input.Group compact>
              <div
                class="d-flex flex-row bd-highlight mb-3"
                style={{ width: 'auto' }}
              >
                <div class="p-2 bd-highlight">
                  {' '}
                  <Select defaultValue="Tên Sản Phẩm" width="30%">
                    <Option value="ProductName">Tên Sản Phẩm</Option>
                    <Option value="ProductNumber">Mã Sản Phẩm</Option>
                  </Select>
                </div>
                <div class="p-2 bd-highlight">
                  {' '}
                  <Input width="50%" defaultValue="Nhập mã sản phẩm" />
                </div>
              </div>
            </Input.Group>
          </div>
          <div class="p-2 bd-highlight" style={{ marginLeft: '50%' }}>
            Danh mục{' '}
            <Select style={{ width: '100px' }} defaultValue="Home">
              <Option value="Home">Home</Option>
              <Option value="Company">Company</Option>
            </Select>
          </div>
        </div>

        <div
          class="d-flex flex-row bd-highlight mb-3"
          style={{ border: '1px solid black' }}
        >
          <div class="p-2 bd-highlight">
            Kho Hàng{' '}
            <Input
              style={{ width: 100, textAlign: 'center' }}
              placeholder="Minimum"
            />
            <Input
              className="site-input-split"
              style={{
                width: 30,
                borderLeft: 0,
                borderRight: 0,
                pointerEvents: 'none',
              }}
              placeholder="~"
              disabled
            />
            <Input
              className="site-input-right"
              style={{
                width: 100,
                textAlign: 'center',
              }}
              placeholder="Maximum"
            />
          </div>
          <div class="p-2 bd-highlight">
            Đã bán
            <Input
              style={{ width: 100, textAlign: 'center' }}
              placeholder="Minimum"
            />
            <Input
              className="site-input-split"
              style={{
                width: 30,
                borderLeft: 0,
                borderRight: 0,
                pointerEvents: 'none',
              }}
              placeholder="~"
              disabled
            />
            <Input
              className="site-input-right"
              style={{
                width: 100,
                textAlign: 'center',
              }}
              placeholder="Maximum"
            />
          </div>
        </div>
        <Button type="primary" icon={<SearchOutlined />}>
          Tìm
        </Button>
        <div className="container">
          <div
            class="d-flex flex-row bd-highlight mb-3"
            style={{ width: 'auto' }}
          >
            {' '}
            <div class="p-2 bd-highlight">
              <h3>0 Sản phẩm</h3>
            </div>
            <div class="p-2 bd-highlight">
              <Button
                type="primary"
                shape="round"
                icon={<PlusOutlined />}
                size={size}
                style={{ float: 'right' }}
              >
                Download
              </Button>
            </div>
          </div>
          <TableProductsComponent data={this.props.productListContainer.data} />
        </div>
      </div>
    );
  }
}

ProductListContainer.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  productListContainer: makeSelectProductListContainer(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    onGetProduct:()=>{
      dispatch(actions.getAllProducts())
    }
  };
}
const withReducer = injectReducer({ key: 'productListContainer', reducer });
const withSaga = injectSaga({ key: 'productListContainer', saga });
const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  withReducer,
  withSaga,
)(ProductListContainer);
