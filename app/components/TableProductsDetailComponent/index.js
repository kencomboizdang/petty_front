import { Table, Tag, Space, Button } from "antd";
import React from "react";
import { Link } from 'react-router-dom';
class TableProductsComponent extends React.Component {



  openOrderDetail = (text)=>{
    console.log("ASDSA");
    console.log(text);
  }


  render() {
    const columns = [
      {
        title: "Mã",
        dataIndex: "product",
        key: "id",
        render: (text) => <a>{text.id}</a>,
      },
      {
        title: "Tên sản phẩm",
        dataIndex: "product",
        key: "name",
        render:(text)=><p>{text.name}</p>
      },
      {
        title: "Thương hiệu",
        dataIndex: "product",
        key: "note",
        render:(text)=><p>{text.brand}</p>
      },
      {
        title: "Số lượng",
        dataIndex: "quantity",
        key: "quantity",
      },
      {
        title: "Đơn giá",
        dataIndex: "product",
        key: "brand",
      render:(text)=><p>{text.price}</p>
      },
      {
        title: "Tổng",
        dataIndex: "price",
        key: "price",
      },
    ];
    return (
      <div>
        <Table columns={columns} dataSource={this.props.data} />
      </div>
    );
  }
}

export default TableProductsComponent;
