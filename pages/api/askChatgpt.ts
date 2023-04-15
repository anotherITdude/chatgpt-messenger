// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import query from "../../utils/queryApi";
import { Message } from '../../types/types';
import  admin  from "firebase-admin";
import { Timestamp } from 'firebase/firestore';
import { adminDb } from "../../services/firebaseAdmin";

type Data = {
  answer: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { prompt, chatId, model, session } = req.body;

  if (!prompt) {
      res.status(400).json({ answer: "Please provide a prompt" });
      return;
  }

  if (!chatId) {
    res.status(400).json({ answer: "Please provide a valid chat ID" });
      return;
  }

  // ask chat gpt
    const response = await query({ prompt, model });
    
    const message: Message = {
        text: response || 'ChatGPT was not able to fidn the answer',
        createdAt: admin.firestore.Timestamp.now(),
        user: {
            _id: 'ChatGPT',
            name: 'ChatGPT',
            avatar: 'https://ui-avatars.com/api/?name=CGPT'
        }
    }
    await adminDb
        .collection('users')
        .doc(session?.user?.email)
        .collection('chats')
        .doc(chatId)
        .collection('messages')
        .add(message);
    
  res.status(200).json({ answer: message.text });
}
