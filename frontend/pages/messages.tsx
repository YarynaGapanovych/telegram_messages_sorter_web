import type { DatePickerProps } from "antd";
import { Space } from "antd";
import { useState } from "react";
import DatePick from "../components/DatePick";

function Messages() {
  const [date, setDate] = useState<string | string[]>(
    new Date().toLocaleString()
  );

  const onChange: DatePickerProps["onChange"] = (date, dateString) => {
    setDate(dateString);
  };

  return (
    <div>
      <h1>Messages</h1>
      <div className="my-10 ">
        <Space />
        <DatePick onChange={onChange} value={date} />
      </div>
      {/* <MessagesComponent date={date} /> */}
    </div>
  );
}

export default Messages;
