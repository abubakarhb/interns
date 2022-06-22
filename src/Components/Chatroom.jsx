import React from "react";
import { people } from "../data";
import { AiOutlineHeart } from "react-icons/ai";

console.log(people);
const Chatroom = () => {
  return (
    <div>
      <img
        className="w-[300px] h-[300px] rounded-md"
        src="https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fHBlb3BsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
        alt=""
      />
      <div className="bg-[#f5f5f5] rounded-sm w-[300px]">
        {people.map((person) => {
          const { id, img, name, text } = person;
          return (
            <div key={id} className="flex items-start rounded-md  p-4 my-4 ">
              <img
                className="w-[40px] h-[40px] rounded-[50%] mr-3"
                src={img}
                alt=""
              />
              <div>
                <p className="text-lg font-semibold">{name}</p>
                <p>{text}</p>
              </div>
            </div>
          );
        })}
        <div className="flex pb-5 justify-evenly m-auto items-center">
          <input
            className="p-2 rounded-md "
            type="text"
            placeholder="Type a message ... "
          />
          <span className="text-blue-300 text-2xl">
            <AiOutlineHeart />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Chatroom;
