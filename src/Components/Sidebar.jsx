import { sidebarIcons, sidebarIconsTwo } from "../iconData";

const Sidebar = () => {
  return (
    <div className="flex flex-col justify-between flex-start gap-[2rem] items-center mb-3 ">
      <div className="flex gap-[2rem] flex-col items-center">
        {sidebarIcons.map((icons) => {
          return (
            <span key={icons.id} className="text-lg">
              {icons.icon}
            </span>
          );
        })}
      </div>
      <div className="flex flex-col gap-[2rem]">
        {sidebarIconsTwo.map((icons) => {
          return (
            <span key={icons.id} className="text-lg">
              {icons.icon}
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;
