import { AiOutlineArrowRight } from "react-icons/ai";
import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
  const { _id, img, title, price } = service;
  return (
    <div className="card w-full border">
      <figure className="px-6 pt-6">
        <img src={img} alt="" className="rounded-xl h-56 w-full" />
      </figure>
      <div className="card-body pt-5">
        <h2 className="card-title text-[#444] text-2xl font-bold mb-2">{title}</h2>
        <div className="flex items-center">
          <p className="text-[#FF3811] text-xl font-semibold">Price: ${price}</p>
          <Link to={`/service-details/${_id}`}>
            <AiOutlineArrowRight className="text-[#FF3811] text-2xl" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
