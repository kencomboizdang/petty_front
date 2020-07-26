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
import Search from 'antd/lib/transfer/search';
class ProductListContainer extends React.Component {
  componentWillMount() {
    this.props.onGetProduct();
  }
  render() {
    return (
      <div style={{ border: '1px solid black' }}>
        <div
          class="d-flex flex-row bd-highlight mb-3"
          style={{ width: 'auto' }}
        >
          <div class="p-2 bd-highlight"> </div>
        </div>
        {/* <Search
          placeholder="input search text"
          onSearch={value => console.log(value)}
          style={{ width: 200 }}
        /> */}
        <div className="container">
          <div
            class="d-flex flex-row bd-highlight mb-3"
            style={{ width: 'auto' }}
          >
            {' '}
            <div class="p-2 bd-highlight">
              <h3>Danh sách sản phẩm</h3>
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
    onGetProduct: () => {
      dispatch(actions.getAllProducts());
    },
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
