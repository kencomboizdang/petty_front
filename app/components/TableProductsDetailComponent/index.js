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
        dataIndex: "id",
        key: "id",
        render: (text) => <a>{text}</a>,
      },
      {
        title: "Tên sản phẩm",
        dataIndex: "product.name",
        key: "name",
      },
      {
        title: "Thương hiệu",
        dataIndex: "product.brand",
        key: "brand",
      },
      {
        title: "Số lượng",
        dataIndex: "quantity",
        key: "quantity",
      },
      {
        title: "Đơn giá",
        dataIndex: "product.price",
        key: "brand",
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
