import person from "./../../../assets/images/about_us/person.jpg";
import parts from "./../../../assets/images/about_us/parts.jpg";
const About = () => {
  return (
    <div className="hero min-h-screen">
      <div className="hero-content flex-col lg:flex-row">
        <div className="lg:w-1/2 relative">
          <img src={person} className="w-3/4 rounded-lg " />
          <img src={parts} className="w-1/2 rounded-lg absolute right-16 top-1/2 border-8 border-white" />
        </div>
        <div className="lg:w-1/2 ">
          <h4 className="text-xl text-[#FF3811] font-bold mb-5">About Us</h4>
          <h1 className="text-5xl font-bold">
            We are qualified <br /> & of experience <br /> in this field
          </h1>
          <p className="pt-8 pb-5 text-[#737373] capitalize">
            There are many variations of passages of Lorem Ipsum available, but the majority have suffered
            alteration in some form, by injected humour, or randomised words which do not look even slightly
            believable.
          </p>
          <p className="pb-8 text-[#737373] capitalize">
            the majority have suffered alteration in some form, by injected humour, or randomised words which
            do not look even slightly believable.
          </p>
          <button className="btn bg-[#FF3811] capitalize text-white text-lg font-semibold border-0 mr-5 hover:text-black duration-500">
            Get More Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
