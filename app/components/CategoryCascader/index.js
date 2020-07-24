/**
 *
 * CategoryCascader
 *
 */

import React from 'react';
import { Cascader } from 'antd';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';
const options = [
  {
    value: 'zhejiang',
    label: 'Zhejiang',
    children: [
      {
        value: 'hangzhou',
        label: 'Hangzhou',
        children: [
          {
            value: 'xihu',
            label: 'West Lake',
          },
        ],
      },
    ],
  },
  {
    value: 'jiangsu',
    label: 'Jiangsu',
    children: [
      {
        value: 'nanjing',
        label: 'Nanjing',
        children: [
          {
            value: 'zhonghuamen',
            label: 'Zhong Hua Men',
          },
        ],
      },
    ],
  },
];

class CategoryCascader extends React.Component {
  onChange = (value)=>{
    this.props.onChange();
  }
  render() {
    return(
      <Cascader
        defaultValue={['zhejiang', 'hangzhou', 'xihu']}
        options={options}
        onChange={this.onChange}
      />
    );
  }
}

CategoryCascader.propTypes = {};

export default CategoryCascader;
