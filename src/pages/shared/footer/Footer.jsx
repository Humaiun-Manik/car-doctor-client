import logo from "./../../../assets/logo.svg";
import { AiFillGoogleCircle, AiFillInstagram, AiFillTwitterCircle } from "react-icons/ai";
import { IoLogoLinkedin } from "react-icons/io";

const Footer = () => {
  return (
    <footer className="footer p-10 text-[#F3F3F3] text-base bg-[#151515] py-28">
      <div>
        <img className="w-20" src={logo} alt="" />
        <p className="mt-5">
          Edwin Diaz is a software and web <br /> technologies engineer, a life coach <br /> trainer who is
          also a serial .
        </p>
        <div className="flex mt-5 gap-2">
          <AiFillGoogleCircle className="text-3xl" />
          <AiFillTwitterCircle className="text-3xl" />
          <AiFillInstagram className="text-3xl" />
          <IoLogoLinkedin className="text-3xl" />
        </div>
      </div>
      <div>
        <span className="footer-title text-xl font-semibold capitalize mb-10">About</span>
        <a className="link link-hover">Home</a>
        <a className="link link-hover">Service</a>
        <a className="link link-hover">Contact</a>
      </div>
      <div>
        <span className="footer-title text-xl font-semibold capitalize mb-10">Company</span>
        <a className="link link-hover">Why Car Doctor</a>
        <a className="link link-hover">About</a>
      </div>
      <div>
        <span className="footer-title text-xl font-semibold capitalize mb-10">Support</span>
        <a className="link link-hover">Support Center</a>
        <a className="link link-hover">Feedback</a>
        <a className="link link-hover">Accessibility</a>
      </div>
    </footer>
  );
};

export default Footer;
