import React from "react";
import {
  CodeBracketIcon,
  AcademicCapIcon,
  GlobeAsiaAustraliaIcon,
} from "@heroicons/react/24/outline";

const HomePage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-white px-2 ">
      <h1 className="text-5xl font-bold mb-20 "> Chat GPT</h1>
      <div className="flex text-center space-x-2">
        <div>
          <div className="flex flex-col justify-center items-center mb-5">
            <CodeBracketIcon className="h-6 w-6" />
            <h2 className="">Examples - Coding</h2>
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
            <AcademicCapIcon className="h-6 w-6" />
            <h2 className="">Examples - Academics</h2>
          </div>

          <div className="space-y-5">
            <p className="info">Learn Swedish</p>
            <p className="info">How can prepare for IAS extrance exam?</p>
            <p className="info">How can i prepare for IELTS exam?</p>
          </div>
        </div>

        <div>
          <div className="flex flex-col justify-center items-center mb-5">
            <GlobeAsiaAustraliaIcon className="h-6 w-6" />
            <h2 className="">Examples - Global</h2>
          </div>
          <div className="space-y-5">
            <p className="info">What is the happpines index of Sweden?</p>
            <p className="info">How can we control global warming?</p>
            <p className="info">When was world war II fought?</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
