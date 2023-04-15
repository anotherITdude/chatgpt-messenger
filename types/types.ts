import { FieldValue } from "firebase/firestore";

export interface Message {
  text: string;
  createdAt: FieldValue;
  user: {
    _id: string;
    name: string;
    avatar: string;
  };
}
