import { Outlet } from "react-router-dom";
import Header from "../pages/shared/header/Header";
import Footer from "../pages/shared/footer/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ServiceProvider from "../contexts/ServiceProvider";
import BookingProvider from "../contexts/BookingProvider";

const Main = () => {
  return (
    <>
      <BookingProvider>
        <Header />
        <ServiceProvider>
          <Outlet></Outlet>
        </ServiceProvider>
      </BookingProvider>
      <ToastContainer />
      <Footer />
    </>
  );
};

export default Main;
