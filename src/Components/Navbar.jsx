import React from "react";
import { RiErrorWarningLine } from "react-icons/ri";
import { GrDocumentNotes } from "react-icons/gr";
import { BsStopCircle, BsCameraVideo, BsFillPersonFill } from "react-icons/bs";
import { HiOutlineMicrophone } from "react-icons/hi";
import { FaTimes } from "react-icons/fa";
const Navbar = () => {
  return (
    <div className="flex justify-around p-4">
      <h1 className="text-lg uppercase flex items-center px-1">
        c2001: intro to programming{" "}
        <span>
          <RiErrorWarningLine />
        </span>
      </h1>
      <div className="flex justify-evenly">
        <GrDocumentNotes />

        <BsStopCircle />
        <HiOutlineMicrophone />
        <BsCameraVideo />
        <FaTimes />
      </div>
      <div className="flex">
        <BsFillPersonFill />
        <BsFillPersonFill />
        <BsFillPersonFill />
      </div>
    </div>
  );
};

export default Navbar;
