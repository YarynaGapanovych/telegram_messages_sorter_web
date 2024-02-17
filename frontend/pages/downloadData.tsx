import { useState } from "react";
import FileInput from "../components/FileInput";
import MessagesComponent from "../components/MessagesComponent";
import DatePick from "../components/DatePick";
import { DatePickerProps } from "antd";

function DownloadData() {
  const [messages, setMessages] = useState({});
  // console.log("🚀 ~ DownloadData ~ messages:", messages);
  const [date, setDate] = useState<string>("2022-10-09");

  const onChange: DatePickerProps["onChange"] = (date, dateString) => {
    console.log(date, dateString);
    setDate(dateString);
  };

  const handleFileSelect = (file: File) => {
    const reader = new FileReader();
    reader.onload = (e: ProgressEvent<FileReader>) => {
      try {
        const text = e.target?.result;
        console.log("🚀 ~ handleFileSelect ~ e.target?.result:", text);
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
    <div>
      <h1>Download Data</h1>
      <div className="flex">
        <div>
          <div>Chose file with telegram data:</div>
          <FileInput onFileSelect={handleFileSelect} />
        </div>
        <div className="mt-[10px]">
          <div>Chose needed date:</div>
          <DatePick onChange={onChange} />
        </div>
      </div>
      <MessagesComponent date={date} fileData={messages as any} />
    </div>
  );
}

export default DownloadData;
