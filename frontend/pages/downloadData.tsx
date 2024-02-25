import { DatePickerProps } from "antd";
import { useState } from "react";
import DatePick from "../components/DatePick";
import FileInput from "../components/FileInput";
import MessagesComponent from "../components/MessagesComponent";

function DownloadData() {
  const [messages, setMessages] = useState({});
  const [date, setDate] = useState<string>(new Date().toLocaleString());

  const onChange: DatePickerProps["onChange"] = (_date, dateString) => {
    setDate(dateString);
  };

  const handleFileSelect = (file: File) => {
    const reader = new FileReader();
    reader.onload = (e: ProgressEvent<FileReader>) => {
      try {
        const text = e.target?.result;
        // Parse the file result as JSON
        const data = text ? JSON.parse(text as string) : {};
        // Now data is an object that should have the structure of your file,
        // including the 'chats' property.
        setMessages(data); // Set the parsed JSON to state
      } catch (error) {
        console.error("Error parsing JSON:", error);
      }
    };
    reader.readAsText(file);
  };

  return (
    <div className="flex flex-col justify-center mt-20 w-full items-center">
      <h1 className="text-lg  font-semibold">Download Data</h1>
      <div className="w-80">
        <div>
          <FileInput onFileSelect={handleFileSelect} />
        </div>
        <div className="mt-4 flex gap-3">
          <span>Chose needed date:</span>
          <DatePick value={date} onChange={onChange} />
        </div>
      </div>
      <MessagesComponent date={date} fileData={messages as any} />
    </div>
  );
}

export default DownloadData;
