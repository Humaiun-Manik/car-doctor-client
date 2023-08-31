import banner1 from "./../../../assets/images/banner/5.jpg";
import banner2 from "./../../../assets/images/banner/2.jpg";
import banner3 from "./../../../assets/images/banner/3.jpg";
import banner4 from "./../../../assets/images/banner/4.jpg";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

const Banner = () => {
  return (
    <div className="carousel w-full h-[600px]">
      <div id="slide1" className="carousel-item relative w-full">
        <img src={banner1} className="w-full rounded-lg" />
        <div className="absolute flex items-center h-full w-full bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] rounded-xl">
          <div className="text-white m-24">
            <h1 className="text-6xl font-bold mb-8">
              Affordable <br /> Price For Car <br /> Servicing
            </h1>
            <p className="capitalize text-lg mb-8">
              There are many variations of passages of available, but <br /> the majority have suffered
              alteration in some form
            </p>
            <div>
              <button className="btn bg-[#FF3811] capitalize text-white text-lg font-semibold border-0 mr-5 hover:text-black duration-500">
                Discover More
              </button>
              <button className="btn btn-outline border-white capitalize text-white text-lg font-semibold">
                Latest Project
              </button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 right-2 md:right-20 bottom-5">
          <a
            href="#slide4"
            className="btn btn-circle mr-5 bg-[#38414d] border-0 text-white text-2xl hover:bg-[#FF3811]"
          >
            <AiOutlineArrowLeft />
          </a>
          <a
            href="#slide2"
            className="btn btn-circle mr-5 bg-[#38414d] border-0 text-white text-2xl hover:bg-[#FF3811]"
          >
            <AiOutlineArrowRight />
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <img src={banner2} className="w-full rounded-lg" />
        <div className="absolute flex items-center h-full w-full bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] rounded-xl">
          <div className="text-white m-24">
            <h1 className="text-6xl font-bold mb-8">
              Affordable <br /> Price For Car <br /> Servicing
            </h1>
            <p className="capitalize text-lg mb-8">
              There are many variations of passages of available, but <br /> the majority have suffered
              alteration in some form
            </p>
            <div>
              <button className="btn bg-[#FF3811] capitalize text-white text-lg font-semibold border-0 mr-5 hover:text-black duration-500">
                Discover More
              </button>
              <button className="btn btn-outline border-white capitalize text-white text-lg font-semibold">
                Latest Project
              </button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 right-2 md:right-20 bottom-5">
          <a
            href="#slide1"
            className="btn btn-circle mr-5 bg-[#38414d] border-0 text-white text-2xl hover:bg-[#FF3811]"
          >
            <AiOutlineArrowLeft />
          </a>
          <a
            href="#slide3"
            className="btn btn-circle mr-5 bg-[#38414d] border-0 text-white text-2xl hover:bg-[#FF3811]"
          >
            <AiOutlineArrowRight />
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <img src={banner3} className="w-full rounded-lg" />
        <div className="absolute flex items-center h-full w-full bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] rounded-xl">
          <div className="text-white m-24">
            <h1 className="text-6xl font-bold mb-8">
              Affordable <br /> Price For Car <br /> Servicing
            </h1>
            <p className="capitalize text-lg mb-8">
              There are many variations of passages of available, but <br /> the majority have suffered
              alteration in some form
            </p>
            <div>
              <button className="btn bg-[#FF3811] capitalize text-white text-lg font-semibold border-0 mr-5 hover:text-black duration-500">
                Discover More
              </button>
              <button className="btn btn-outline border-white capitalize text-white text-lg font-semibold">
                Latest Project
              </button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 right-2 md:right-20 bottom-5">
          <a
            href="#slide2"
            className="btn btn-circle mr-5 bg-[#38414d] border-0 text-white text-2xl hover:bg-[#FF3811]"
          >
            <AiOutlineArrowLeft />
          </a>
          <a
            href="#slide4"
            className="btn btn-circle mr-5 bg-[#38414d] border-0 text-white text-2xl hover:bg-[#FF3811]"
          >
            <AiOutlineArrowRight />
          </a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full">
        <img src={banner4} className="w-full rounded-lg" />
        <div className="absolute flex items-center h-full w-full bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] rounded-xl">
          <div className="text-white m-24">
            <h1 className="text-6xl font-bold mb-8">
              Affordable <br /> Price For Car <br /> Servicing
            </h1>
            <p className="capitalize text-lg mb-8">
              There are many variations of passages of available, but <br /> the majority have suffered
              alteration in some form
            </p>
            <div>
              <button className="btn bg-[#FF3811] capitalize text-white text-lg font-semibold border-0 mr-5 hover:text-black duration-500">
                Discover More
              </button>
              <button className="btn btn-outline border-white capitalize text-white text-lg font-semibold">
                Latest Project
              </button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 right-2 md:right-20 bottom-5">
          <a
            href="#slide3"
            className="btn btn-circle mr-5 bg-[#38414d] border-0 text-white text-2xl hover:bg-[#FF3811]"
          >
            <AiOutlineArrowLeft />
          </a>
          <a
            href="#slide1"
            className="btn btn-circle mr-5 bg-[#38414d] border-0 text-white text-2xl hover:bg-[#FF3811]"
          >
            <AiOutlineArrowRight />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
