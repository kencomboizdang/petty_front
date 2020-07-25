import { Table, Tag, Space, Button } from "antd";
import React from "react";

class TableComponent extends React.Component {



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
        render: (text, record) => (
          <Space size='middle'>
            <a href="/order/1">Xem đơn hàng</a>
            {/* <Button onClick={this.openOrderDetail({text})}>Xem đơn hàng</Button> */}
          </Space>
        ),
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
