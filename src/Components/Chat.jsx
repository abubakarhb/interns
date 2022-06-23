import React from "react";
import { chatIcons, chatIconsTwo } from "../iconData";
import { GiArrowCursor } from "react-icons/gi";

const Chat = () => {
  return (
    <div className="flex flex-start gap-4 h-[100vh] pt-[5rem] bg-[#f5f5f5]">
      <div className="grid  gap-4 mt-[4rem] px-4 ">
        <div className="flex gap-[2rem] flex-col items-center">
          {chatIcons.map((icons) => {
            return (
              <span
                key={icons.id}
                className="text-base bg-white rounded-[50%] p-2"
              >
                {icons.icon}
              </span>
            );
          })}
        </div>
        <div className="flex gap-2 items-center ">
          {chatIconsTwo.map((icons) => {
            return (
              <span
                key={icons.key}
                className="text-base bg-white rounded-[50%] p-2"
              >
                {icons.icon}
              </span>
            );
          })}
        </div>
      </div>
      <section className="w-[70%] bg-white pt-[5rem] px-[5rem] rounded-sm relative">
        <p className="px-2 bg-purple-100 rounded-sm w-fit">we need to</p>
        <div className="flex ml-[6rem]">
          <span className="text-lg">
            <GiArrowCursor />
          </span>
          <p className=" bg-purple-400 px-2 rounded-sm w-fit">maria</p>
        </div>
        <article className="absolute bottom-[4rem] right-[-4rem]">
          <div className="bg-blue-200 p-4 px-6 mb-3 ">
            <h1 className="mb-4">Key Points</h1>
            <p>1. pick an industry</p>
            <p>2. find a trending problem</p>
            <div className="flex ml-[6rem]">
              <span className="text-lg">
                <GiArrowCursor />
              </span>
              <p className=" bg-red-300/50 px-2 rounded-sm mt-2">Geroge</p>
            </div>
          </div>
          <div className="bg-yellow-200 p-4 px-6 ">
            <h1 className="mb-4">Key Points</h1>
            <p>1. its unclear</p>
            <div className="flex ml-[6rem]">
              <span className="text-lg">
                <GiArrowCursor />
              </span>
              <p className=" bg-green-400/60 px-2 rounded-sm mt-2">Geroge</p>
            </div>
          </div>
        </article>
      </section>
    </div>
  );
};

export default Chat;
