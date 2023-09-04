import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "../components/shared/header/Header";
import ServiceProvider from "../contexts/ServiceProvider";
import Footer from "../components/shared/footer/Footer";

const Main = () => {
  return (
    <>
      <Header />
      <ServiceProvider>
        <Outlet></Outlet>
      </ServiceProvider>
      <ToastContainer />
      <Footer />
    </>
  );
};

export default Main;
