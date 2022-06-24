import Keypoints from "./Keypoints";
import { chatIcons, chatIconsTwo } from "../iconData";
import { GiArrowCursor } from "react-icons/gi";

const Chat = () => {
  return (
    <div className="flex flex-start gap-4 h-[100vh] pt-[5rem] bg-[#f5f5f5]">
      <div className="grid  gap-4 mt-[4rem] px-4 ">
        <div className="flex gap-[2rem] flex-col items-center">
          {/* chaticons  */}
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
        {/* card component */}
        <Keypoints />
      </section>
    </div>
  );
};

export default Chat;
