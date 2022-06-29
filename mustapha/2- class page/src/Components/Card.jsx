import { BsPersonFill } from "react-icons/bs";

const Card = () => {
  return (
    <div className="block md:flex gap-[2rem] z-10 pointer">
      <div className="justify-center md:justify-start flex gap-[1rem] items-center mt-[2rem] p-4 rounded-md shadow-sm shadow-slate-200 hover:shadow-sm hover:shadow-slate-400 cursor-pointer transition-all duration-300 ">
        <div className="flex flex-col gap-4">
          <h1 className="text-gray-800">Rate your experience</h1>
          <input type="range" name="" id="" />
        </div>
        <span className="text-4xl">
          <BsPersonFill />
        </span>
      </div>
      <div className="justify-center md:justify-start flex gap-[1.2rem] items-center mt-[2rem] p-4 rounded-md shadow-sm shadow-slate-200 hover:shadow-sm hover:shadow-slate-400 cursor-pointer transition-all duration-300  z-10 bg-white">
        <div className="flex gap-2 items-baseline">
          <div className="w-[10px] h-[30px] bg-gray-800 rounded-t-2xl"></div>
          <div className="w-[10px] h-[45px] bg-yellow-500 rounded-t-2xl"></div>
          <div className="w-[10px] h-[20px] bg-pink-500 rounded-t-2xl"></div>
          <div className="w-[10px] h-[24px] bg-gray-800 rounded-t-2xl"></div>
          <div className="w-[10px] h-[45px] bg-yellow-500 rounded-t-2xl"></div>
        </div>
        <h1 className="text-gray-800">Total Courses</h1>
        <div className="p-4 text-white rounded-[50%] bg-gray-800">1K+</div>
      </div>
    </div>
  );
};

export default Card;
