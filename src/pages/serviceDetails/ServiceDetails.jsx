import { useLoaderData } from "react-router-dom";
import SubBanner from "../shared/subBanner/SubBanner";
import banner from "./../../assets/images/banner/1.jpg";
import { FiPlayCircle } from "react-icons/fi";
import { useContext } from "react";
import { ServiceContext } from "../../contexts/ServiceProvider";

const ServiceDetails = () => {
  const service = useLoaderData();
  const { img, description, title, facility } = service;
  const service1 = useContext(ServiceContext);
  console.log(service1);

  return (
    <div>
      <SubBanner banner={banner} pageName={"Service Details"} />
      <div className="grid grid-cols-3 gap-4 my-32">
        <div className="col-span-2">
          <img className="w-full rounded-lg" src={img} alt="" />
          <h1 className="mt-12 mb-8 text-[#151515] text-4xl font-bold">{title}</h1>
          <p className="text-[#737373] capitalize leading-8 text-justify">{description}</p>
          <div className="grid grid-cols-2 gap-6 my-8">
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
          <div className="grid grid-cols-3 gap-6 my-8">
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
            <div className="absolute top-1/3 left-1/3 ms-16">
              <FiPlayCircle className="text-9xl text-[#FF3811]" />
            </div>
          </div>
        </div>
        <div className="">
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
