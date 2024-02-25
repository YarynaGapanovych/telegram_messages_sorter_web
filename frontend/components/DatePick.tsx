import React from "react";
import { DatePicker } from "antd";
import dayjs from "dayjs";

interface DatePick {
  value: any;
  onChange: (value: any, dateString: string) => void;
}

function DatePick({ value, onChange }: DatePick) {
  return <DatePicker value={dayjs(value)} onChange={onChange} />;
}

export default DatePick;
