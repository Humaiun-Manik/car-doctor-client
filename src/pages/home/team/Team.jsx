import { FaFacebookF } from "react-icons/fa6";
import team1 from "./../../../assets/images/team/1.jpg";
import team2 from "./../../../assets/images/team/2.jpg";
import team3 from "./../../../assets/images/team/3.jpg";
import { AiOutlineTwitter } from "react-icons/ai";
import { BiLogoInstagram, BiLogoLinkedin } from "react-icons/bi";

const Team = () => {
  return (
    <div className="mb-32">
      <div className="text-center">
        <h4 className="text-xl text-[#FF3811] font-bold">Team</h4>
        <h1 className="text-5xl font-bold my-5">Meet Our Team</h1>
        <p className=" text-[#737373] capitalize mb-12">
          the majority have suffered alteration in some form, by injected humour, or randomised <br /> words
          which do not look even slightly believable.
        </p>
      </div>
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure className="px-10 pt-10">
            <img src={team1} alt="" className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center pt-5">
            <h2 className="card-title text-2xl text-[#444] font-bold">Car Engine Plug</h2>
            <p className="text-xl text-[#737373] font-semibold mb-4">Engine Expert</p>
            <div className="card-actions">
              <div className="w-10 h-10 rounded-full bg-[#395185] flex justify-center items-center mr-3">
                <FaFacebookF className="text-xl text-white" />
              </div>
              <div className="w-10 h-10 rounded-full bg-[#55ACEE] flex justify-center items-center mr-3">
                <AiOutlineTwitter className="text-xl text-white" />
              </div>
              <div className="w-10 h-10 rounded-full bg-[#0A66C2] flex justify-center items-center mr-3">
                <BiLogoLinkedin className="text-xl text-white" />
              </div>
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex justify-center items-center mr-3">
                <BiLogoInstagram className="text-xl text-white" />
              </div>
            </div>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure className="px-10 pt-10">
            <img src={team2} alt="" className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center pt-5">
            <h2 className="card-title text-2xl text-[#444] font-bold">Car Engine Plug</h2>
            <p className="text-xl text-[#737373] font-semibold mb-4">Engine Expert</p>
            <div className="card-actions">
              <div className="w-10 h-10 rounded-full bg-[#395185] flex justify-center items-center mr-3">
                <FaFacebookF className="text-xl text-white" />
              </div>
              <div className="w-10 h-10 rounded-full bg-[#55ACEE] flex justify-center items-center mr-3">
                <AiOutlineTwitter className="text-xl text-white" />
              </div>
              <div className="w-10 h-10 rounded-full bg-[#0A66C2] flex justify-center items-center mr-3">
                <BiLogoLinkedin className="text-xl text-white" />
              </div>
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex justify-center items-center mr-3">
                <BiLogoInstagram className="text-xl text-white" />
              </div>
            </div>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure className="px-10 pt-10">
            <img src={team3} alt="" className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center pt-5">
            <h2 className="card-title text-2xl text-[#444] font-bold">Car Engine Plug</h2>
            <p className="text-xl text-[#737373] font-semibold mb-4">Engine Expert</p>
            <div className="card-actions">
              <div className="w-10 h-10 rounded-full bg-[#395185] flex justify-center items-center mr-3">
                <FaFacebookF className="text-xl text-white" />
              </div>
              <div className="w-10 h-10 rounded-full bg-[#55ACEE] flex justify-center items-center mr-3">
                <AiOutlineTwitter className="text-xl text-white" />
              </div>
              <div className="w-10 h-10 rounded-full bg-[#0A66C2] flex justify-center items-center mr-3">
                <BiLogoLinkedin className="text-xl text-white" />
              </div>
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex justify-center items-center mr-3">
                <BiLogoInstagram className="text-xl text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
