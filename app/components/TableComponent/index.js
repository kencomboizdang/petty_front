import { Table, Tag, Space, Button } from "antd";
import React from "react";
import { Link } from 'react-router-dom';

class TableComponent extends React.Component {



  openOrderDetail = (text)=>{
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
        title: "Thời gian",
        dataIndex: "date",
        key: "date",
      },
      {
        title: "Tổng",
        dataIndex: "total",
        key: "total",
      },
      {
        title: "Tình trạng",
        key: "orderStatus",
        dataIndex: "orderStatus",

      },
      {
        title: "Action",
        key: "action",
        dataIndex:"id",
        render: (text, record) => {
          let tmp =  `/order/${text}`;
          return (
          <Space size='middle'>
            <Link to ={tmp}>Xem đơn hàng</Link>
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

export default TableComponent;
