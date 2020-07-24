import { Input } from "antd";
import { AudioOutlined } from "@ant-design/icons";
import React from "react";
const { Search } = Input;

const suffix = (
  <AudioOutlined
    style={{
      fontSize: 16,
      color: "#1890ff",
    }}
  />
);
class InputSearch extends React.Component {
  render() {
    return (
      <div>
        <Search
          placeholder='input search text'
          onSearch={(value) => console.log(value)}
          style={{ width: 200 }}
        />
      </div>
    );
  }
}

export default InputSearch;
