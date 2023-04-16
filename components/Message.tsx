import { DocumentData } from "firebase/firestore";
import React from "react";

interface Props {
  desc:DocumentData
}


const Message = ({desc}: Props) => {
  const isChatGPT = desc.user.name === "ChatGPT";
  return <div className={`py-5 text-white ${isChatGPT && 'bg-gray-600'}`}>
    <div className='flex space-x-5 px-10 max-w-2xl mx-auto'>
      <img src={desc.user.avatar} alt='' className='h-8 w-8 rounded-lg' />
    <p className='pt-1 text-sm'>{desc.text} </p>
    </div>
  </div>;
};

export default Message;
