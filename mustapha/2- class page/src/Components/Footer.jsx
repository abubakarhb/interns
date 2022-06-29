import { FaTrophy } from "react-icons/fa";
import { SiUdemy } from "react-icons/si";

const Footer = () => {
  return (
    <section className="text-center w-fit gap-[1.8rem] flex justify-between md:w-4/6 text-[#ccc] font-semibold mx-auto mt-[1.5rem] mb-[1rem] text-lg">
      <h1 className="hover:text-black transition-all duration-500 cursor-pointer  justify-center mb-2 md:justify-start items-center flex gap-2">
        {" "}
        <span>
          <FaTrophy />
        </span>{" "}
        unacademy
      </h1>
      <h1 className="hover:text-black transition-all duration-500 cursor-pointer mb-2">
        coursera
      </h1>
      <h1 className="hover:text-black transition-all duration-500 cursor-pointer mb-2">
        SKILL <br />
        SHare.
      </h1>
      <h1 className="hover:text-black transition-all duration-500 cursor-pointer  justify-center md:justify-start items-center flex gap-2">
        <span>
          {" "}
          <SiUdemy />
        </span>
        Udemy
      </h1>
    </section>
  );
};

export default Footer;
