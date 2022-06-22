import React from "react";
import { TiLocationArrowOutline } from "react-icons/ti";
import { RiText } from "react-icons/ri";
import { TbPencil } from "react-icons/tb";
import { FaRegStickyNote } from "react-icons/fa";
import { MdOutlineCheckBoxOutlineBlank } from "react-icons/md";
import { FiMessageSquare } from "react-icons/fi";
import { GiArrowCursor } from "react-icons/gi";
import { BsArrow90DegRight, BsArrow90DegLeft } from "react-icons/bs";

const Chat = () => {
  return (
    <div className="flex flex-start gap-4 h-[100vh] pt-[5rem] bg-[#f5f5f5]">
      <div className="grid  gap-4 mt-[4rem] px-4 ">
        <div className="flex gap-[2rem] flex-col items-center">
          <span className="text-base bg-white rounded-[50%] p-2">
            {" "}
            <TiLocationArrowOutline />
          </span>
          <span className="text-base bg-white rounded-[50%] p-2">
            {" "}
            <RiText />
          </span>

          <span className="text-base bg-white rounded-[50%] p-2">
            <TbPencil />
          </span>
          <span className="text-base bg-white rounded-[50%] p-2">
            {" "}
            <FaRegStickyNote />
          </span>

          <span className="text-base bg-white rounded-[50%] p-2">
            <MdOutlineCheckBoxOutlineBlank />
          </span>
          <span className="text-base bg-white rounded-[50%] p-2">
            {" "}
            <FiMessageSquare />
          </span>
        </div>
        <div className="flex gap-2 items-center ">
          <span className="text-base bg-white rounded-[50%] p-2">
            <BsArrow90DegLeft />
          </span>
          <span className="text-base bg-white rounded-[50%] p-2">
            <BsArrow90DegRight />
          </span>
        </div>
      </div>
      <section className="w-[70%] bg-white pt-[5rem] px-[5rem] rounded-sm">
        <p className="px-2 bg-purple-100 rounded-sm w-fit">we need to</p>
        <div className="flex ml-[6rem]">
          <span className="text-lg">
            <GiArrowCursor />
          </span>
          <p className=" bg-purple-400 px-2 rounded-sm w-fit">maria</p>
        </div>
      </section>
    </div>
  );
};

export default Chat;
