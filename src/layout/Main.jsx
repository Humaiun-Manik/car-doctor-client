import { Outlet } from "react-router-dom";
import Header from "../pages/shared/header/Header";
import Footer from "../pages/shared/footer/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ServiceProvider from "../contexts/ServiceProvider";

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
