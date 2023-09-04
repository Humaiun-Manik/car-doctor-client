import { NavLink } from "react-router-dom";

const ActiveLink = ({ children, to }) => {
  return (
    <NavLink to={to} className={({ isActive }) => (isActive ? "text-[#FF3811]" : "")}>
      {children}
    </NavLink>
  );
};

export default ActiveLink;
