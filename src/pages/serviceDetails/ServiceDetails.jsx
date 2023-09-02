import { Link, useLoaderData } from "react-router-dom";
import SubBanner from "../shared/subBanner/SubBanner";
import banner from "./../../assets/images/banner/1.jpg";
import { FiPlayCircle } from "react-icons/fi";
import { useContext } from "react";
import { ServiceContext } from "../../contexts/ServiceProvider";
import { AiOutlineArrowRight } from "react-icons/ai";
import { BsFileEarmarkBarGraph } from "react-icons/bs";
import logo from "./../../assets/logo.svg";

const ServiceDetails = () => {
  const service = useLoaderData();
  const { services } = useContext(ServiceContext);
  const { _id, img, description, title, facility, price } = service;

  return (
    <div>
      <SubBanner banner={banner} pageName={"Service Details"} />
      <div className="grid md:grid-cols-3 gap-6 my-32 px-2">
        <div className="col-span-2">
          <img className="w-full rounded-lg" src={img} alt="" />
          <h1 className="mt-12 mb-8 text-[#151515] text-4xl font-bold">{title}</h1>
          <p className="text-[#737373] capitalize leading-8 text-justify">{description}</p>
          <div className="grid md:grid-cols-2 gap-6 my-8">
            {facility.map((singleFacility) => (
              <div
                className="mb-6 p-10 bg-[#F3F3F3] border-t-2 border-[#FF3811] rounded-lg"
                key={facility.indexOf(singleFacility)}
              >
                <h4 className="text-[#444] text-xl font-bold mb-3">{singleFacility.name}</h4>
                <p className="text-[#737373] capitalize leading-8 text-justify">{singleFacility.details}</p>
              </div>
            ))}
          </div>
          <h1 className="mt-12 mb-8 text-[#151515] text-4xl font-bold">3 Simple Steps to Process</h1>
          <p className="text-[#737373] capitalize leading-8 text-justify">
            There are many variations of passages of Lorem Ipsum available, but the majority have suffered
            alteration in some form, by injected humour, or randomised words which do not look even slightly
            believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there is not
            anything embarrassing hidden in the middle of text
          </p>
          <div className="grid md:grid-cols-3 gap-6 my-8">
            <div className="text-center border rounded-lg py-10 px-9">
              <div className="mx-auto w-20 h-20 bg-[#ff39111e] text-white flex justify-center items-center rounded-full">
                <h2 className="text-xl font-bold bg-[#FF3811] w-14 h-14 rounded-full flex justify-center items-center">
                  01
                </h2>
              </div>
              <h4 className="text-[#151515] text-xl font-bold uppercase my-5">Step One</h4>
              <p className="text-[#737373] capitalize">It uses a dictionary of over 200.</p>
            </div>
            <div className="text-center border rounded-lg py-10 px-9">
              <div className="mx-auto w-20 h-20 bg-[#ff39111e] text-white flex justify-center items-center rounded-full">
                <h2 className="text-xl font-bold bg-[#FF3811] w-14 h-14 rounded-full flex justify-center items-center">
                  02
                </h2>
              </div>
              <h4 className="text-[#151515] text-xl font-bold uppercase my-5">Step Two</h4>
              <p className="text-[#737373] capitalize">It uses a dictionary of over 200.</p>
            </div>
            <div className="text-center border rounded-lg py-10 px-9">
              <div className="mx-auto w-20 h-20 bg-[#ff39111e] text-white flex justify-center items-center rounded-full">
                <h2 className="text-xl font-bold bg-[#FF3811] w-14 h-14 rounded-full flex justify-center items-center">
                  03
                </h2>
              </div>
              <h4 className="text-[#151515] text-xl font-bold uppercase my-5">Step Three</h4>
              <p className="text-[#737373] capitalize">It uses a dictionary of over 200.</p>
            </div>
          </div>
          <div className="relative">
            <img className="w-full rounded-xl" src={img} alt="" />
            <div className="absolute top-1/3 left-1/3 md:ms-16">
              <FiPlayCircle className="text-9xl text-[#FF3811]" />
            </div>
          </div>
        </div>
        <div>
          <div className="bg-[#F3F3F3] text-[#151515] p-10 rounded">
            <h3 className=" text-2xl font-bold mb-5">Services</h3>
            {services.map((service) => (
              <div
                key={service._id}
                className="font-semibold text-lg flex items-center justify-between rounded mb-5 p-5 hover:bg-[#ff391180] hover:text-white duration-300"
              >
                <h5>{service.title}</h5>
                <Link to={`/service-details/${service._id}`}>
                  <AiOutlineArrowRight className="text-[#FF3811] text-2xl" />
                </Link>
              </div>
            ))}
          </div>
          <div className="bg-[#151515] text-[#FFF] p-10 rounded-xl my-8">
            <h3 className=" text-2xl font-bold mb-5">Download</h3>
            <div className="flex items-center justify-around">
              <BsFileEarmarkBarGraph className="text-3xl" />
              <div>
                <h5 className="text-lg font-semibold">Our Brochure</h5>
                <p className="text-[#A2A2A2]">Download</p>
              </div>
              <div className="w-14 h-14 bg-[#FF3811] rounded flex items-center justify-center">
                <AiOutlineArrowRight className="text-2xl" />
              </div>
            </div>
            <div className="flex items-center justify-around mt-5">
              <BsFileEarmarkBarGraph className="text-3xl" />
              <div>
                <h5 className="text-lg font-semibold">Company Details</h5>
                <p className="text-[#A2A2A2]">Download</p>
              </div>
              <div className="w-14 h-14 bg-[#FF3811] rounded flex items-center justify-center">
                <AiOutlineArrowRight className="text-2xl" />
              </div>
            </div>
          </div>
          <div className="bg-[#151515] text-[#FFF] p-10 rounded-xl my-8 text-center">
            <img className="mx-auto" src={logo} alt="" />
            <h4 className="text-xl font-bold my-8 leading-9">
              Need Help? We Are Here <br /> To Help You
            </h4>
            <div className=" bg-[#FFF] pt-5 pb-12 rounded-lg">
              <h4 className="text-[#FF3811] text-xl font-bold">
                Car Doctor <span className="text-[#151515]">Special</span>
              </h4>
              <p className="text-[#737373] font-bold mt-2">
                Save up to <span className="text-[#FF3811]">60% off</span>
              </p>
            </div>
            <h4 className="py-4 px-8 bg-[#FF3811] w-40 -mt-7 mx-auto rounded">Get A Quote</h4>
          </div>
          <h1 className="text-[#151515] text-4xl font-bold my-5">Price ${price}</h1>
          <Link
            to={`/checkout/${_id}`}
            className="btn btn-block bg-[#FF3811] border border-[#FF3811] text-white hover:border hover:border-[#FF3811] hover:text-[#FF3811] text-lg font-semibold duration-300"
          >
            Proceed Checkout
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
