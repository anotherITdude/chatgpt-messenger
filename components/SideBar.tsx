"use client";
import React from "react";
import NewChat from "./NewChat";
import ModelSelection from "./ModelSelection";
import { useSession, signOut } from "next-auth/react";
import { useCollection } from "react-firebase-hooks/firestore";
import { db } from "../services/firebase";
import { collection, orderBy, query } from "firebase/firestore";
import ChatRow from "./ChatRow";

const SideBar = () => {
  const { data: session } = useSession();
  const [chats, loading, error] = useCollection(
    session &&
      query(
        collection(db, "users", session.user?.email!, "chats"),
        orderBy("createdAt", "asc")
      )
  );

  return (
    <div className="p-2 flex flex-col h-screen">
      <div className="flex-1">
        <div>
          <NewChat />
          <div className="hidden md:block">
          <ModelSelection />
          </div>
          <div className="flex flex-col space-y-2">
            {/* map through the chat */}
          {loading && (
            <div className="animate-pulse mt-2 text-center text-white">
              <p>Loading Chats...</p>
            </div>
          )}
            {chats?.docs?.map((chat) => (
            <ChatRow key={chat.id} id={chat.id} />
          ))}
          </div>
        </div>
      </div>
      {session && (
        <img
          onClick={() => signOut()}
          src={session.user?.image!}
          alt="profile pic"
          className="h-12 w-12 mx-auto rounded-full cursor-pointer hover:opacity-50"
        />
      )}
    </div>
  );
};

export default SideBar;
