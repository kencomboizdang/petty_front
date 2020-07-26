/**
 *
 * ProductDetailContainer
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { withRouter } from 'react-router-dom';
import {
  Form,
  Input,
  Button,
  Radio,
  Select,
  Cascader,
  InputNumber,
  Breadcrumb,
  message
} from 'antd';
// import "./stylesTab.css";
import * as rules from './rules';
import FormItem from 'antd/lib/form/FormItem';
import PicturesWall from 'components/UploadImageComponent';
import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectProductDetailContainer from './selectors';
import reducer from './reducer';
import saga from './saga';
import './styles.scss';
import { changeProductValue, getProduct, getCategory, saveProduct } from './actions';

const options = [
  {
    value: 1,
    label: 'Zhejiangss',
  },
  {
    value: 2,
    label: 'Jiangsu',
  },
];

class ProductDetailContainer extends React.Component {
  componentWillMount() {
    this.props.getCategory();
    const {
      match: { params },
      history,
    } = this.props;
    var id = history.location.pathname.substring(
      history.location.pathname.lastIndexOf('/') + 1,
    );
    if (id) {
      this.props.onGetProductIfExist(id);
    }
  }
  onSave = () => {};
  handleChangeValue = event => {
    var target = event.target;
    var name = target.name;
    var value = target.value;
    this.props.handleChangeProductValue(name, value);
  };
  handleChangeCategoryValue = value => {
    this.props.handleChangeProductValue('categoryId', value[0]);
  };
  handleChangeQuantityValue = value => {
    this.props.handleChangeProductValue('quantity', value);
  };
  handleChangePriceValue = value => {
    this.props.handleChangeProductValue('price', value);
  };
  onFinish = async () => {
    console.log('Finished');
    await this.props.onSaveProduct();
    message.info('Đã lưu lại');
    if (this.props.productDetailContainer.onSave){
      message.info('Đã lưu lại');
    }
  };
  onFinishFailed = () => {
    console.log('Finish Failed');
  };

  render() {
    const { product } = this.props.productDetailContainer;
    const { TextArea } = Input;
    function onChange(value) {
      console.log('changed', value);
    }
    return (
      <div>
        <Form
          labelCol={{ span: 4 }}
          wrapperCol={{ span: 14 }}
          layout="horizontal"
          // form={form}
          onFinish={this.onFinish}
          onFinishFailed={this.onFinishFailed}
        >
          <div className="title">Sản phẩm</div>
          {this.props.productDetailContainer.options ? (
            <Form.Item
              label="Phân loại"
              name="productCategory"
              rules={rules.categoryRules}
            >
              <Cascader
                defaultValue={[1]}
                name="category"
                // options={this.props.productDetailContainer.options}
                options={this.props.productDetailContainer.options}
                onChange={this.handleChangeCategoryValue}
              />
            </Form.Item>
          ) : (
            ''
          )}

          <Form.Item
            // label="Tên sản phẩm"
            // rules={[
            //   {
            //     required: true,
            //     message: 'Vui lòng nhập tên sản phẩm',
            //   },
            // ]}
            label="Tên sản phẩm"
            rules={rules.nameRules}
          >
            <Input
              name="name"
              value={product.name}
              onChange={this.handleChangeValue}
            />
          </Form.Item>
          <Form.Item label="Mô tả sản phẩm" rules={rules.descriptionRules}>
            <TextArea
              rows={4}
              name="description"
              value={product.description}
              onChange={this.handleChangeValue}
            />
          </Form.Item>
          <FormItem label="Thương hiệu">
            <Input
              name="brand"
              value={product.brand}
              onChange={this.handleChangeValue}
            />
          </FormItem>
          <FormItem label="Xuất Xứ">
            {/* <Select>
              <Select.Option value="op1">Trung Quốc</Select.Option>
              <Select.Option value="op2">Việt Nam</Select.Option>
              <Select.Option value="op3">Hàn Quốc</Select.Option>
              <Select.Option value="op4">Mỹ</Select.Option>
            </Select> */}
            <Input
              name="origin"
              value={product.origin}
              onChange={this.handleChangeValue}
            />
          </FormItem>
          <FormItem label="Khối lượng">
            {/* <Select>
              <Select.Option value="op1">Trung Quốc</Select.Option>
              <Select.Option value="op2">Việt Nam</Select.Option>
              <Select.Option value="op3">Hàn Quốc</Select.Option>
              <Select.Option value="op4">Mỹ</Select.Option>
            </Select> */}
            <Input
              name="netWeight"
              value={product.netWeight}
              onChange={this.handleChangeValue}
            />
          </FormItem>
          <Form.Item label="Giá " className="form_label__price">
            VND
            <InputNumber
              className="form_input__price"
              name="price"
              defaultValue={product.price}
              formatter={value =>
                `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
              }
              parser={value => value.replace(/\VND\s?|(,*)/g, '')}
              onChange={this.handleChangePriceValue}
              step={1000}
            />
          </Form.Item>
          <Form.Item label="Số lượng">
            <InputNumber
              name="quantity"
              value={product.quantity}
              onChange={this.handleChangeQuantityValue}
            />
          </Form.Item>

          {/* <Form.Item label="Tình Trạng Sử Dụng">
            <Radio.Group name="radiogroup" defaultValue={1}>
              <Radio value={1}>Đã Sử Dụng</Radio>
              <Radio value={2}>Mới</Radio>
            </Radio.Group>
          </Form.Item> */}
          {/* <Form.Item label="Hình ảnh">
            <PicturesWall />
          </Form.Item> */}
          <Form.Item label=" " colon={false}>
            <Button htmlType="submit" onClick={this.onSave}>
              Lưu lại
            </Button>
            <Button>Huỷ</Button>
          </Form.Item>
        </Form>
      </div>
    );
  }
}

ProductDetailContainer.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  productDetailContainer: makeSelectProductDetailContainer(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    handleChangeProductValue: (name, value) =>
      dispatch(changeProductValue(name, value)),
    onGetProductIfExist: id => {
      dispatch(getProduct(id));
    },
    getCategory: () => dispatch(getCategory()),
    onSaveProduct: ()=> dispatch(saveProduct()),
  };
}
const withReducer = injectReducer({ key: 'productDetailContainer', reducer });
const withSaga = injectSaga({ key: 'productDetailContainer', saga });
const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  withSaga,
  withReducer,
  withRouter,
)(ProductDetailContainer);
