import { TiLocationArrowOutline } from "react-icons/ti";
import { RiText } from "react-icons/ri";
import { TbPencil } from "react-icons/tb";
import { FaRegStickyNote } from "react-icons/fa";
import { MdOutlineCheckBoxOutlineBlank } from "react-icons/md";
import { FiMessageSquare } from "react-icons/fi";
import { BsPerson, BsBell } from "react-icons/bs";

const Sidebar = () => {
  return (
    <div className="flex flex-col justify-between flex-start gap-[2rem] items-center mb-3 ">
      <div className="flex gap-[2rem] flex-col items-center">
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
      <div className="flex flex-col gap-[2rem]">
        <span className="text-[1.3rem]">
          <BsPerson />
        </span>
        <span className="text-[1.3rem]">
          <BsBell />
        </span>
      </div>
    </div>
  );
};

export default Sidebar;
