import { Table, Tag, Space } from "antd";
import React from "react";

class TableComponent extends React.Component {
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
      // {
      //   title: "Action",
      //   key: "action",
      //   render: (text, record) => (
      //     <Space size='middle'>
      //       <a>Invite {record.name}</a>
      //       <a>Delete</a>
      //     </Space>
      //   ),
      // },
    ];

    const data = [
      {
        key: "1",
        name: "John Brown",
        age: 32,
        address: "New York No. 1 Lake Park",
        tags: ["nice", "developer"],
      },
      {
        key: "2",
        name: "Jim Green",
        age: 42,
        address: "London No. 1 Lake Park",
        tags: ["loser"],
      },
      {
        key: "3",
        name: "Joe Black",
        age: 32,
        address: "Sidney No. 1 Lake Park",
        tags: ["cool", "teacher"],
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
