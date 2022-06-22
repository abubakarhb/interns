import React from "react";
import { RiErrorWarningLine } from "react-icons/ri";
const Navbar = () => {
  return (
    <div>
      <h1 className="text-lg uppercase">
        c2001: intro to programming{" "}
        <span>
          <RiErrorWarningLine />
        </span>
      </h1>
      <div className="flex justify-evenly">
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
      </div>
      <div className="flex">
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
      </div>
    </div>
  );
};

export default Navbar;
