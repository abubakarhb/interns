import woman from "../images/woman.png";
import ImageBg from "./ImageBg";
import Card from "./Card";

const Content = () => {
  return (
    <section className="md:flex  w-[70%] mx-auto mb-[4rem]  relative">
      <div className="mt-[4rem] ">
        <div>
          <p className="mb-2">World class education</p>
          <h1 className="text-5xl font-bold mb-4">
            Become
            <br />
            a professional in
            <br />
            either field
          </h1>
          <p className="mb-4">
            Edcamp helps to gain skills for jobs relevant <br /> to the market
            over 1000 courses for <br /> both teams and individuals
          </p>
        </div>
        <div className="flex flex-start gap-[1rem] mb-6">
          <button className="py-2 px-4 text-white rounded-md bg-gray-900">
            Get started
          </button>
          <button className="py-2 px-4 rounded-md  border border-slate-200">
            Learn more
          </button>
        </div>
        <Card />
      </div>
      <ImageBg />

      <img className="md:absolute  right-0" src={woman} alt="" />
    </section>
  );
};

export default Content;
