import { DatePicker } from "antd";
import React from "react";

const { RangePicker } = DatePicker;

class CalendarPicker extends React.Component {
  render() {
    return (
        <div className="calendar_picker">
          <RangePicker size="middle" placeholder={["Bắt đầu", "Kết thúc"]}/>
        </div>
    );
  }
}

export default CalendarPicker;
