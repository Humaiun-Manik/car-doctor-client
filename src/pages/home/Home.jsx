import About from "./about/About";
import Banner from "./banner/Banner";
import Features from "./features/Features";
import Services from "./services/Services";
import Team from "./team/Team";

const Home = () => {
  return (
    <>
      <Banner />
      <About />
      <Services />
      <Team />
      <Features />
    </>
  );
};

export default Home;
