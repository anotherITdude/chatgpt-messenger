import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import {ChatBubbleLeftIcon, TrashIcon} from '@heroicons/react/24/outline'
import { usePathname, useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';
import { useCollection } from 'react-firebase-hooks/firestore';
import { collection, deleteDoc, doc} from 'firebase/firestore';
import { db } from '../firebase';

interface Props {
    id: string
}

const ChatRow = ({id}: Props) => {
    const currentPath = usePathname();
    const router = useRouter();
    const { data: session } = useSession();
    const [active, setActive] = useState<Boolean>(false);
    const [ messages] = useCollection(
        collection( db, 'users', session?.user?.email!, 'chats', id, 'messages'),
    )
    useEffect(() =>{
    if(!currentPath) return;
    setActive(currentPath.includes(id))      
    }, [currentPath])
    const removeChat = async()=> {
        await deleteDoc(doc(db, 'users', session?.user?.email!, 'chats', id));
        router.push('/')
    }
  return (
      <Link href={`/chat/${id}`} className={`flex flex-row chatRow justify-evenly items-center mt-2 ${active && 'animate-pulse bg-gray-600'}`}>
          <ChatBubbleLeftIcon className="h-5 w-5" />
          <p className='hidden md:inline-flex truncate'>
              {messages?.docs[messages?.docs.length - 1]?.data().text || "New Chat"}
          </p>
          <TrashIcon onClick={removeChat} className='h-5 w-5 text-white hover:text-red-700' />
      </Link>
  )
}

export default ChatRow
