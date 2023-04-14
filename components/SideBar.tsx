"use client";
import React from "react";
import NewChat from "./NewChat";
import { useSession, signOut } from "next-auth/react";

const SideBar = () => {
  const { data: session } = useSession<UseSessionOption>();
  return (
    <div className="p-2 flex flex-col h-screen">
      <div className="flex-1">
        <div>
          <NewChat />
          <div>{/* model selection */}</div>
          {/* map through the chat */}
        </div>
      </div>
      {session && (
        <img
          onClick={() => signOut()}
          src={session.user?.image}
          alt="profile pic"
          className="h-12 w-12 mx-auto rounded-full cursor-pointer hover:opacity-50"
        />
      )}
    </div>
  );
};

export default SideBar;
