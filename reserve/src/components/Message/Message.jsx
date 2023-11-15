import React from "react";
import "./Message.css";
const Message = () => {
  return (
    <div className="flex flex-col justify-between items-center z-10 mt-4">
      <div className="mb-32">
        <div className="flex items-center">
          <div className="border-solid border-2 border-[#CEB7FF] flex-grow h-4 my-2 borderbox"></div>
          <p className="font-ds text-xl text-[#CEB7FF] mx-2">
            a message from earth
          </p>
        </div>
        <p className="font-ds text-6xl dsstroke">Hello fellow galaxy member</p>
        <div className="flex items-center">
          <p className="font-ds text-xl text-[#CEB7FF] mr-2">
            a message from earth
          </p>
          <div className="border-solid border-2 border-[#CEB7FF] flex-grow h-4 my-2 borderbox"></div>
        </div>
        <p className="mt-6 font-ds text-6xl dsstroke text-center">I am Fedir</p>
      </div>
    </div>
  );
};

export default Message;
