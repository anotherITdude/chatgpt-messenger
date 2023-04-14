"use client";
import { PaperAirplaneIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import { useSession } from "next-auth/react";
interface Props {
  chatId: string;
}

const ChatInput = ({ chatId }: Props) => {
  const [prompt, setPrompt] = useState("");
  const session = useSession();
  return (
    <div className="bg-gray-700/50 text-gray-400 rounded-lg text-sm mx-2">
      <form className="p-5 space-x-5 flex">
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
