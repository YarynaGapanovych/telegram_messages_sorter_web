import { DatePicker } from "antd";
import dayjs, { Dayjs } from "dayjs";

interface DatePick {
  value: any;
  onChange: (days: Dayjs, dateString: string | string[]) => void;
}

function DatePick({ value, onChange }: DatePick) {
  return <DatePicker value={dayjs(value)} onChange={onChange} />;
}

export default DatePick;
