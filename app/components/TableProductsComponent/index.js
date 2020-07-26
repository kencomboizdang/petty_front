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
        dataIndex: "name",
        key: "name",
      },
      {
        title: "Thương hiệu",
        dataIndex: "brand",
        key: "brand",
      },
      {
        title: "Action",
        key: "action",
        dataIndex:"id",
        render: (text, record) => {
          let tmp =  `/products/${text}`;
          return (
          <Space size='middle'>
            <Link to ={tmp}>Xem sản phẩm</Link>
            {/* <Button onClick={this.openOrderDetail({text})}>Xem đơn hàng</Button> */}
          </Space>);
        },
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
