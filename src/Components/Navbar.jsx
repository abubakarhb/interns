import React from "react";
import { RiErrorWarningLine } from "react-icons/ri";
import { GrDocumentNotes } from "react-icons/gr";
import { BsStopCircle, BsCameraVideo, BsFillPersonFill } from "react-icons/bs";
import { HiOutlineMicrophone } from "react-icons/hi";
import { FaTimes } from "react-icons/fa";
import { GiQueenCrown } from "react-icons/gi";

const Navbar = () => {
  return (
    <div className="flex justify-between p-4 items-center ">
      <h1 className="text-lg uppercase flex gap-2 font-semibold items-center px-1">
        <span className="text-2xl text-black ml-[6px] mr-2P">
          <GiQueenCrown />
        </span>
        c2001: intro to programming{" "}
        <span className="ml-2">
          <RiErrorWarningLine />
        </span>
      </h1>
      <div className="flex  items-center justify-evenly">
        <div className="mx-2 bg-yellow-200 p-2 rounded-[50%]">
          <GrDocumentNotes />
        </div>

        <div className="mx-2 bg-purple-200 p-2 rounded-[50%]">
          {" "}
          <BsStopCircle />
        </div>
        <div className="mx-2 bg-blue-200 p-2 rounded-[50%]">
          {" "}
          <HiOutlineMicrophone />
        </div>
        <div className="mx-2 bg-gray-200 p-2 rounded-[50%]">
          {" "}
          <BsCameraVideo />
        </div>
        <div className="mx-2 bg-red-200 p-2 rounded-[50%]">
          {" "}
          <FaTimes />
        </div>
      </div>
      <div className="flex">
        <img
          className="w-[30px] h-[30px] rounded-[50%]"
          src="https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fHBlb3BsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
          alt=""
        />
        <img
          className="w-[30px] h-[30px] rounded-[50%]"
          src="https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fHBlb3BsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
          alt=""
        />
        <img
          className="w-[30px] h-[30px] rounded-[50%]"
          src="https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fHBlb3BsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
          alt=""
        />
      </div>
    </div>
  );
};

export default Navbar;
