"use client";
import { useSession } from "next-auth/react";
import { useCollection } from "react-firebase-hooks/firestore";
import { query, collection, orderBy } from "firebase/firestore";
import { db } from "../services/firebase";
import Message from "./../components/Message";
import { ArrowDownCircleIcon } from "@heroicons/react/24/outline";

interface Props {
  chatId: string;
}
const Chat = ({ chatId }: Props) => {
  const { data: session } = useSession();
  const [messages] = useCollection(
    session &&
      query(
        collection(
          db,
          "users",
          session?.user?.email!,
          "chats",
          chatId,
          "messages"
        ),
        orderBy("createdAt", "asc")
      )
  );

  return (
    <div className="flex-1 overflow-y-auto overflow-x-hidden">
     {messages?.empty && (
      <>
      <p className="mt-10 text-center text-white text-sm">
        Type a message prompt below and ask chatGPT anything
      </p>
      <ArrowDownCircleIcon className='h-10 w-10 mx-auto mt-10 text-white animate-bounce' />
      </>
     )}
      {messages?.docs?.map((message) => (
        <Message key={message.id} desc={message.data()} />
      ))}
    </div>
  );
};

export default Chat;
