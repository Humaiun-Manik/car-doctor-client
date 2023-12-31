import { useContext } from "react";
import ServiceCard from "./ServiceCard";
import { TbCalendarTime } from "react-icons/tb";
import { FiPhoneCall } from "react-icons/fi";
import { FaLocationDot } from "react-icons/fa6";
import { ServiceContext } from "../../../contexts/ServiceProvider";
import { Link, useLocation } from "react-router-dom";

const Services = () => {
  const { loading, services } = useContext(ServiceContext);
  const { pathname } = useLocation();

  return (
    <div>
      <div className="text-center">
        <h4 className="text-xl text-[#FF3811] font-bold mb-5">Service</h4>
        <h1 className="text-5xl font-bold mb-5">Our Service Area</h1>
        <p className=" text-[#737373] capitalize mb-12">
          the majority have suffered alteration in some form, by injected humour, or randomised <br /> words
          which do not look even slightly believable.
        </p>
      </div>

      {loading ? (
        <div className="text-center">
          <span className="loading loading-spinner loading-lg text-[#FF3811]"></span>
        </div>
      ) : (
        <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {pathname === "/" ? (
            <>
              {services.slice(0, 6).map((service) => (
                <ServiceCard key={service._id} service={service}></ServiceCard>
              ))}
            </>
          ) : (
            <>
              {services.map((service) => (
                <ServiceCard key={service._id} service={service}></ServiceCard>
              ))}
            </>
          )}
        </div>
      )}
      {pathname === "/" && (
        <>
          <div className="flex justify-center">
            <Link
              to={"/services"}
              className="btn btn-outline mt-12 text-[#FF3811] text-lg font-semibold capitalize"
            >
              More Services
            </Link>
          </div>
          <div className="bg-[#151515] my-32 p-10 md:p-28 rounded-lg grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            <div className="text-white flex items-center">
              <TbCalendarTime className="text-4xl mr-5 text-[#FF3811]" />
              <div>
                <p>We are open monday-friday</p>
                <h3 className="text-2xl font-bold">7:00 am - 9:00 pm</h3>
              </div>
            </div>
            <div className="text-white flex items-center">
              <FiPhoneCall className="text-4xl mr-5 text-[#FF3811]" />
              <div>
                <p>Have a question?</p>
                <h3 className="text-2xl font-bold">+2546 251 2658</h3>
              </div>
            </div>
            <div className="text-white flex items-center">
              <FaLocationDot className="text-4xl mr-5 text-[#FF3811]" />
              <div>
                <p>Need a repair? our address</p>
                <h3 className="text-2xl font-bold">Liza Street, New York</h3>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Services;
