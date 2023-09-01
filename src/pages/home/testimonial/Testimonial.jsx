import client1 from "./../../../assets/images/clients/Ellipse 2 (1).svg";
import client2 from "./../../../assets/images/clients/Ellipse 2.svg";
import { FaQuoteRight } from "react-icons/fa6";

const Testimonial = () => {
  return (
    <div className="mb-32">
      <div className="text-center">
        <h4 className="text-xl text-[#FF3811] font-bold">Testimonial</h4>
        <h1 className="text-5xl font-bold my-5">What Customer Says</h1>
        <p className=" text-[#737373] capitalize mb-12">
          the majority have suffered alteration in some form, by injected humour, or randomised <br /> words
          which do not look even slightly believable.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="p-5">
          <div className="flex">
            <img src={client1} alt="" />
            <div className="ms-5 me-5 md:me-28">
              <h4 className="text-2xl text-[#444] font-bold">Awlad Hossain</h4>
              <h5 className="text-xl text-[#737373] font-semibold mt-2">Businessman</h5>
            </div>
            <FaQuoteRight className="w-14 h-14 text-[#ff39114d]" />
          </div>
          <p className="capitalize text-[#737373] my-5">
            There are many variations of passages of Lorem Ipsum available, but the majority have suffered
            alteration in some form, by injected humour, or randomised words which do not look even slightly
            believable.
          </p>
          <div className="rating">
            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
          </div>
        </div>
        <div className="p-5">
          <div className="flex">
            <img src={client2} alt="" />
            <div className="ms-5 me-5 md:me-28">
              <h4 className="text-2xl text-[#444] font-bold">Shamiul Islam</h4>
              <h5 className="text-xl text-[#737373] font-semibold mt-2">Businessman</h5>
            </div>
            <FaQuoteRight className="w-14 h-14 text-[#ff39114d]" />
          </div>
          <p className="capitalize text-[#737373] my-5">
            There are many variations of passages of Lorem Ipsum available, but the majority have suffered
            alteration in some form, by injected humour, or randomised words which do not look even slightly
            believable.
          </p>
          <div className="rating">
            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
