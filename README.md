This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## ChatGPT Messenger

Build Stack:

-NextJS 13 with SWR.
-Next Auth (to login with google).
-TypeScript.
-Firebase / Firebase Admin (to implement CRUD operations from user and server end)
-Tailwind CSS.
-React Hot Toast.
-React Select (to load all the models provided by OpenAi API 3.2.1).
-Hero Icons.

## Demo Link

[CLICK HERE](https://chatgpt-messenger-umber.vercel.app) to see the app hosted on Vercel.

## Flow

-Login with google.
-Click 'New Chat' to open a new chat.
-From the drop down select, choose the open ai model that you want to chat with, and type your question.
-After you ask the question, it is saved in firebase database and then it is pushed to the openai api using custom nextjs api endpoint.
-Upon getting the result its saved using firebase admin service and then pushed to the frontend, where you can see it.
-ALL THE CHATS CAN BE DELETED BY THE USER BY CLICKING ON THE 'BIN' ICON ADJACENT TO EVERY NEW CHAT
