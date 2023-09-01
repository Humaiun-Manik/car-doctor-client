import group from "./../../../assets/icons/group.svg";
import person from "./../../../assets/icons/person.svg";
import wrench from "./../../../assets/icons/Wrench.svg";
import check from "./../../../assets/icons/check.svg";
import delivery from "./../../../assets/icons/deliveryt.svg";
import { GiClockwork } from "react-icons/gi";
import Marquee from "react-fast-marquee";

const Features = () => {
  return (
    <div className="mb-32">
      <div className="text-center">
        <h4 className="text-xl text-[#FF3811] font-bold">Core Features</h4>
        <h1 className="text-5xl font-bold my-5">Why Choose Us</h1>
        <p className=" text-[#737373] capitalize">
          the majority have suffered alteration in some form, by injected humour, or randomised <br /> words
          which do not look even slightly believable.
        </p>
      </div>
      <Marquee pauseOnHover={true} gradient={true}>
        <div className="mt-12 flex justify-between gap-3">
          <div className=" hover:bg-[#FF3811] hover:text-white text-[#444] duration-500 py-8 px-12 rounded-lg flex flex-col justify-center items-center">
            <img src={group} alt="" className="w-2/3 h-2/3" />
            <h4 className="text-lg font-bold mt-5">Expert Team</h4>
          </div>
          <div className=" hover:bg-[#FF3811] hover:text-white text-[#444] duration-500 py-8 px-12 rounded-lg flex flex-col justify-center items-center">
            <GiClockwork className="text-7xl mb-3" />
            <h4 className="text-lg font-bold mt-5">Expert Team</h4>
          </div>
          <div className=" hover:bg-[#FF3811] hover:text-white text-[#444] duration-500 py-8 px-12 rounded-lg flex flex-col justify-center items-center">
            <img src={person} alt="" className="w-2/3 h-2/3" />
            <h4 className="text-lg font-bold mt-5">Expert Team</h4>
          </div>
          <div className=" hover:bg-[#FF3811] hover:text-white text-[#444] duration-500 py-8 px-12 rounded-lg flex flex-col justify-center items-center">
            <img src={wrench} alt="" className="w-2/3 h-2/3" />
            <h4 className="text-lg font-bold mt-5">Expert Team</h4>
          </div>
          <div className=" hover:bg-[#FF3811] hover:text-white text-[#444] duration-500 py-8 px-12 rounded-lg flex flex-col justify-center items-center">
            <img src={check} alt="" className="w-2/3 h-2/3" />
            <h4 className="text-lg font-bold mt-5">Expert Team</h4>
          </div>
          <div className=" hover:bg-[#FF3811] hover:text-white text-[#444] duration-500 py-8 px-12 rounded-lg flex flex-col justify-center items-center">
            <img src={delivery} alt="" className="w-2/3 h-2/3" />
            <h4 className="text-lg font-bold mt-5">Expert Team</h4>
          </div>
        </div>
      </Marquee>
    </div>
  );
};

export default Features;
