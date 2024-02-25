import dayjs from "dayjs";
import { useEffect, useState } from "react";
// import jsonData from "../db.json";
// import jsonData from './db-test.json';

interface Person {
  name?: string;
  type?: string; // "personal_chat",
  id: number;
  messages?: [any];
}

interface MessagesProps {
  date: string;
  fileData: { chats: { list: [] }; personal_information: { user_id: number } };
}

interface Message {
  id: number;
  type: string; // "message",
  date: string; // "2022-10-09T19:32:23",
  from: string;
  from_id: number;
  text: string;
}

function MessagesComponent({ date, fileData }: MessagesProps) {
  const [desiredDate, setDesiredDate] = useState(date); // Date to filter messages
  const [messages, setMessages] = useState<Message[]>([]);

  const myId = `user${fileData.personal_information?.user_id}`;

  useEffect(() => {
    setDesiredDate(date || Date.now().toLocaleString());
  }, [date]);

  useEffect(() => {
    const filteredMessages = fileData?.chats?.list?.flatMap((person: any) => {
      const messagesOnDesiredDate = person.messages.filter((message: any) =>
        message.date.startsWith(desiredDate)
      );

      return messagesOnDesiredDate
        .filter((message: any) => message.text !== "")
        .flatMap((message: any, index: number) => {
          if (Array.isArray(message.text)) {
            return message.text.map((item: Message) => {
              return item;
            });
          } else {
            return message;
          }
        });
    });
    setMessages(filteredMessages);
  }, [fileData, desiredDate]);

  if (!messages?.length) {
    return (
      <div className="mt-10">-- There is no messaged for this date --</div>
    );
  }

  return (
    <ul className="flex flex-col w-1/2 border-solid border-2  border-slate-200 rounded-lg m-10 bg-gradient-to-b from-amber-100 to-lime-100">
      {messages?.map((message: any) => {
        const isMyMessage = message.from_id === myId;

        return (
          message.id && (
            <li
              className={`mx-4 p-2 w-fit flex flex-col ${
                isMyMessage ? "self-end" : "self-start"
              }`}
              key={message.id} // Use the unique key here
            >
              <div
                className={`w-fit text-slate-600 ${isMyMessage && "self-end"}`}
              >
                {message.from}
              </div>
              <div
                className={`w-fill border-solid border-2 rounded-lg x border-slate-300 p-2 px-4 flex flex-col w-fit  ${
                  isMyMessage ? "self-end" : "self-start"
                } ${isMyMessage ? "bg-orange-50" : "bg-slate-50"}`}
              >
                {message.text}
              </div>
              <div
                className={`text-sm text-slate-600 ${
                  isMyMessage && "self-end"
                }`}
              >
                {dayjs(message.date).format("hh:mm:ss")}
              </div>
            </li>
          )
        );
      })}
    </ul>
  );
}

export default MessagesComponent;
