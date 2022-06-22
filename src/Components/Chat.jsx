import React from "react";
import { TiLocationArrowOutline } from "react-icons/ti";
import { RiText } from "react-icons/ri";
import { TbPencil } from "react-icons/tb";
import { FaRegStickyNote } from "react-icons/fa";
import { MdOutlineCheckBoxOutlineBlank } from "react-icons/md";
import { FiMessageSquare } from "react-icons/fi";

const Chat = () => {
  return (
    <div className="flex flex-start gap-[3rem] h-[100vh]">
      <div className="flex flex-col justify-evenly ">
        <span className="text-[1.3rem]">
          {" "}
          <TiLocationArrowOutline />
        </span>
        <span className="text-[1.3rem]">
          {" "}
          <RiText />
        </span>

        <span className="text-[1.3rem]">
          <TbPencil />
        </span>
        <span className="text-[1.3rem]">
          {" "}
          <FaRegStickyNote />
        </span>

        <span className="text-[1.3rem]">
          <MdOutlineCheckBoxOutlineBlank />
        </span>
        <span className="text-[1.3rem]">
          {" "}
          <FiMessageSquare />
        </span>
      </div>
      <section className='mt-[5rem]'>
        <p>we neeed to</p>

        <p>maria</p>
      </section>
    </div>
  );
};

export default Chat;
