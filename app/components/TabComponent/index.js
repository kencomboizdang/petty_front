import { Tabs, Select, Button, Col, Row } from "antd";
import React from "react";
import TableComponent from "components/TableComponent";
import InputSearch from "components/InputSearchComponent";
import "./styles.scss";
import CanlendarComponent from "components/CalendarComponent";

const { TabPane } = Tabs;
const { Option } = Select;

class Demo extends React.Component {
  state = {
    tabPosition: "top",
  };

  changeTabPosition = (tabPosition) => {
    this.setState({ tabPosition });
  };

  render() {
    return (
      <div>
        <InputSearch />
        <Tabs tabPosition={this.state.tabPosition}>
          <TabPane tab='Tất cả' key='1'>
            <Row>
              <Col flex='10px'>
                <InputSearch />
              </Col>
              <Col flex='auto' className='calendar-search'>
                <CanlendarComponent className='calendar-search' />
                <Button>Okey</Button>
              </Col>
            </Row>
            <TableComponent />
          </TabPane>
          <TabPane tab='Chờ xác nhận' key='2'>
            <TableComponent />
          </TabPane>
          <TabPane tab='Đang giao' key='3'>
            <TableComponent />
          </TabPane>
        </Tabs>
      </div>
    );
  }
}

export default Demo;
