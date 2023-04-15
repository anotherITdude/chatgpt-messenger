"use client";
import { PaperAirplaneIcon } from "@heroicons/react/24/outline";
import { FormEvent, useState } from "react";
import { useSession } from "next-auth/react";
import { serverTimestamp, FieldValue, addDoc, collection } from "firebase/firestore";
import { db } from "../firebase";
import toast from 'react-hot-toast';


interface Props {
  chatId: string;
}

interface Message {
  text: string;
  createdAt: FieldValue;
  user: {
    _id: string;
    name: string;
    avatar: string;
  };
}

const ChatInput = ({ chatId }: Props) => {

  const [prompt, setPrompt] = useState<string | "">("");
  const { data: session } = useSession();
  const model = 'text-davinci-003'

  const sendMessage = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!prompt) return;
    const input = prompt.trim();
    setPrompt("");

    const chatMessage: Message = {
      text: input,
      createdAt: serverTimestamp(),
      user: {
        _id: session?.user?.email!,
        name: session?.user?.name!,
        avatar:
          session?.user?.image! ||
          `https:ui-avatars.com/api/?name=${session?.user?.name}`,
      },
    }
      
    // adding collection to firebase
    await addDoc(
      collection(db, 'users', session?.user?.email!, 'chats', chatId, 'messages'),
      chatMessage
      )

    //toast notification for loading
    const notification = toast('ChatGPT is thinking...')

    //asking question to chat gpt using custom api end point
    await fetch('/api/askQuetion',{
      method: 'POST',
      headers:{
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        prompt: input, chatId, model, session
      })
    }).then(() => {
    //toast notification for success
    toast.success('ChatGPT responded', {
      id:notification
    })
    })



  };

  return (
    <div className="bg-gray-700/50 text-gray-400 rounded-lg text-sm mx-2 mb-2">
      <form onSubmit={sendMessage} className="p-5 space-x-5 flex">
        <input
          value={prompt}
          className="bg-transparent focus:outline-none flex-1
          disabled:cursor-not-alllowed disabled:text-gray-300"
          disabled={!session}
          onChange={(e) => setPrompt(e.target.value)}
          type="text"
          placeholder="Type your message here..."
        />
        <button
          disabled={!prompt || !session}
          className="bg-[#11a37f] px-4 py-2 text-white hover:opacity-50 
          rounded disabled:bg-gray-300 disabled:cursor-not-allowed"
        >
          <PaperAirplaneIcon className="h-4 w-4  -rotate-45" />
        </button>
      </form>
    </div>
  );
};
export default ChatInput;
