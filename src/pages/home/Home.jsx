import About from "./about/About";
import Banner from "./banner/Banner";
import Features from "./features/Features";
import Services from "../shared/services/Services";
import Team from "./team/Team";
import Testimonial from "./testimonial/Testimonial";

const Home = () => {
  return (
    <>
      <Banner />
      <About />
      <Services />
      <Team />
      <Features />
      <Testimonial />
    </>
  );
};

export default Home;
