import { Link } from "react-router-dom";
import logo from "./../../../assets/logo.svg";
import { useContext } from "react";
import { AuthContext } from "../../../contexts/AuthProvider";
import { toast } from "react-toastify";

const Header = () => {
  const { user, logout } = useContext(AuthContext);

  const navItems = (
    <>
      <li>
        <Link to={"/"}>Home</Link>
      </li>
      <li>
        <Link to={"/about"}>About</Link>
      </li>
      <li>
        <Link to={"/services"}>Services</Link>
      </li>
      {user && (
        <li>
          <Link to={"/bookings"}>My Bookings</Link>
        </li>
      )}
    </>
  );

  const handleLogout = () => {
    logout()
      .then(() => {
        toast.success("Sign-out successful.");
      })
      .catch();
  };

  return (
    <div className="navbar bg-base-100 py-5">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 font-semibold text-lg text-[#444]"
          >
            {navItems}
          </ul>
        </div>
        <Link to={"/"}>
          <img className="w-24" src={logo} alt="" />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 font-semibold text-lg text-[#444]">{navItems}</ul>
      </div>
      <div className="navbar-end">
        {!user?.email ? (
          <Link to={"/login"}>
            <button className="btn btn-outline btn-success mr-3 font-semibold text-lg capitalize">
              Login
            </button>
          </Link>
        ) : (
          <button
            onClick={handleLogout}
            className="btn btn-outline bg-[#FF3811] hover:bg-[#FFF] hover:border-[#FF3811] duration-500 capitalize text-[#FFF] hover:text-[#FF3811] font-semibold text-lg mr-3"
          >
            Log Out
          </button>
        )}
        <button className="btn btn-outline hover:bg-[#FF3811] hover:border-[#FF3811] duration-500 capitalize text-[#FF3811] font-semibold text-lg">
          Appointment
        </button>
      </div>
    </div>
  );
};

export default Header;
