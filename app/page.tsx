import React from "react";
import {
  SunIcon,
  BoltIcon,
  ExclamationTriangleIcon
  
} from "@heroicons/react/24/outline";

const HomePage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-white px-2 ">
      <h1 className="text-5xl font-bold mb-20 "> Chat GPT</h1>
      <div className="flex text-center space-x-2">
        <div>
          <div className="flex flex-col justify-center items-center mb-5">
            <SunIcon className="h-6 w-6" />
            <h2 className="">Examples</h2>
          </div>

          <div className="space-y-5">
            <p className="info">
              Advantages of using arrow function in javascript
            </p>
            <p className="info">
              What is the difference between shift() and pop() function?
            </p>
            <p className="info">
              How can i start preparing for AWS cloud certification?
            </p>
          </div>
        </div>

        <div>
          <div className="flex flex-col justify-center items-center mb-5">
            <BoltIcon className="h-6 w-6" />
            <h2 className="">Capabilities</h2>
          </div>

          <div className="space-y-5">
            <p className="info">Remembers what user said earlier in the conversation</p>
            <p className="info">Allows user to provide follow-up corrections</p>
            <p className="info">Trained to decline inappropriate requests</p>
          </div>
        </div>

        <div>
          <div className="flex flex-col justify-center items-center mb-5">
            <ExclamationTriangleIcon className="h-6 w-6" />
            <h2 className="">Limitations</h2>
          </div>
          <div className="space-y-5">
            <p className="info">May occasionally generate incorrect information</p>
            <p className="info">May occasionally produce harmful instructions or biased content</p>
            <p className="info">Limited knowledge of world and events after 2021</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
