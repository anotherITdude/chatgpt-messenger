## ChatGPT Messenger:

Inspired by https://chat.openai.com/

## Build Stack:

<ul>
<li>NextJS 13 with SWR</li>
<li>Next Auth (to login with google)</li>
<li>TypeScript</li>
<li>OpenAi API 3.2.1</li>
<li>Firebase / Firebase Admin (to implement CRUD operations from user and server end)</li>
<li>Tailwind CSS</li>
<li>React Hot Toast</li>
<li>React Select (to load all the models provided by OpenAi API)</li>
<li>Hero Icons</li>
</ul>

## Demo Link

[CLICK HERE](https://chatgpt-messenger-umber.vercel.app) to see the app hosted on Vercel.

## Flow

<ul>
<li>Login with google</li>
<li>Click 'New Chat' to open a new chat</li>
<li>From the drop down select, choose the open ai model that you want to chat with, and type your question</li>
<li>After you ask the question, it is saved in firebase database and then it is pushed to the openai api using custom nextjs api endpoint</li>
<li>Upon getting the result its saved using firebase admin service and then pushed to the frontend, where you can see it</li>
<li>ALL THE CHATS CAN BE DELETED BY THE USER BY CLICKING ON THE 'BIN' ICON ADJACENT TO EVERY NEW CHAT</li>
</ul>

## App Screenshots

<img width="800" alt="Screenshot 2023-04-17 at 2 32 26 PM" src="https://user-images.githubusercontent.com/4363970/232492915-81f8375f-2b78-4649-a084-874b3639fd17.png">

<img width="800" alt="Screenshot 2023-04-17 at 2 56 24 PM" src="https://user-images.githubusercontent.com/4363970/232492979-63e7fcc9-ec2c-4708-8b8a-649232c2463f.png">

<img width="800" alt="Screenshot 2023-04-17 at 2 56 48 PM" src="https://user-images.githubusercontent.com/4363970/232493063-4396ed74-1281-4f95-974d-a85904d0ec80.png">

<img width="800" alt="Screenshot 2023-04-17 at 3 05 26 PM" src="https://user-images.githubusercontent.com/4363970/232493990-0a63a18b-dfe9-47af-b634-4cf7fef6ce0d.png">
