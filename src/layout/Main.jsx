import { Outlet } from "react-router-dom";
import Header from "../pages/shared/header/Header";

const Main = () => {
  return (
    <>
      <Header />
      <Outlet></Outlet>
    </>
  );
};

export default Main;
