import { AiOutlineArrowRight } from "react-icons/ai";

const ServiceCard = ({ service }) => {
  console.log(service);
  return (
    <div className="card w-full border">
      <figure className="px-6 pt-6">
        <img src={service.img} alt="" className="rounded-xl h-56 w-full" />
      </figure>
      <div className="card-body pt-5">
        <h2 className="card-title text-[#444] text-2xl font-bold mb-2">{service.title}</h2>
        <div className="flex items-center">
          <p className="text-[#FF3811] text-xl font-semibold">Price: ${service.price}</p>
          <AiOutlineArrowRight className="text-[#FF3811] text-2xl" />
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
