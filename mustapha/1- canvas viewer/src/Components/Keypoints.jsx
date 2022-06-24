import { GiArrowCursor } from "react-icons/gi";

const Keypoints = () => {
  return (
    <article className="absolute bottom-[4rem] right-[-4rem]">
      <div className="bg-blue-200 p-4 px-6 mb-3 ">
        <h1 className="mb-4">Key Points</h1>
        <p>1. pick an industry</p>
        <p>2. find a trending problem</p>
        <div className="flex ml-[6rem]">
          <span className="text-lg">
            <GiArrowCursor />
          </span>
          <p className=" bg-red-300/50 px-2 rounded-sm mt-2">Geroge</p>
        </div>
      </div>
      <div className="bg-yellow-200 p-4 px-6 ">
        <h1 className="mb-4">Key Points</h1>
        <p>1. its unclear</p>
        <div className="flex ml-[6rem]">
          <span className="text-lg">
            <GiArrowCursor />
          </span>
          <p className=" bg-green-400/60 px-2 rounded-sm mt-2">Geroge</p>
        </div>
      </div>
    </article>
  );
};

export default Keypoints;
