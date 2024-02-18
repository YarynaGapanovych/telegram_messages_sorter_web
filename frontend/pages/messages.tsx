import MessagesComponent from "../components/MessagesComponent";
import React, { useState } from "react";
import { Space } from "antd";
import type { DatePickerProps } from "antd";
import DatePick from "../components/DatePick";

function Messages() {
  const [date, setDate] = useState<string>("2022-10-09");

  const onChange: DatePickerProps["onChange"] = (date, dateString) => {
    setDate(dateString);
  };

  return (
    <div>
      <h1>Messages</h1>
      <div className="my-10 ">
        <Space />
        <DatePick onChange={onChange} />
      </div>
      {/* <MessagesComponent date={date} /> */}
    </div>
  );
}

export default Messages;
