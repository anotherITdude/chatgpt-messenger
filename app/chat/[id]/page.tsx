 'use client'
 import React from 'react'
 import Chat from './../../../components/Chat'
 import ChatInput from './../../../components/ChatInput'

interface Props {
   params: {
     id: string;
   }
 }

 const ChatPage = ({params: {id}}: Props) => {
   return (
     <div id='page' className='flex flex-col h-screen overflow-hidden'>
       
       {/* user requests and chat gpt responses go here*/}
       <Chat chatId={id} />
       
       {/* chat form input */}
       <ChatInput chatId={id} />
      
     </div>
   )
 }
 
 export default ChatPage
 