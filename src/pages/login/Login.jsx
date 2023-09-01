import { BiLogoLinkedin } from "react-icons/bi";
import { FaFacebookF } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import loginImg from "./../../assets/images/login/login.svg";
import { useContext, useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { AuthContext } from "../../contexts/AuthProvider";
import { toast } from "react-toastify";

const Login = () => {
  const [type, setType] = useState("password");
  const { login } = useContext(AuthContext);
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    login(email, password)
      .then((result) => {
        const user = result.user;
        setError("");
        form.reset();
        toast.success(`Welcome back, ${user?.displayName}! Your login was successful.`);
      })
      .catch((error) => {
        error && setError("Login failed. Please check your email and password.");
      });
  };

  return (
    <div className="my-10">
      <div className="hero-content flex-col lg:flex-row">
        <div className="w-full">
          <img src={loginImg} className="rounded-lg" />
        </div>
        <div className="w-full border md:p-20 rounded-lg">
          <h1 className="text-center text-4xl text-[#444] font-semibold mb-12">Login</h1>
          <form onSubmit={handleLogin}>
            <div className="form-control mb-8">
              <label className="label">
                <span className="label-text text-lg font-semibold">Email</span>
              </label>
              <label className="input-group input-group-vertical">
                <input type="text" placeholder="Your email" name="email" className="input" required />
              </label>
            </div>
            <div className="form-control mb-8">
              <label className="label">
                <span className="label-text text-lg font-semibold">Password</span>
              </label>
              <label className="input-group input-group-vertical relative">
                <input type={type} placeholder="Your password" name="password" className="input" required />
                {type === "password" ? (
                  <AiOutlineEye
                    onClick={() => setType("text")}
                    className="absolute right-3 text-2xl top-1/3"
                  />
                ) : (
                  <AiOutlineEyeInvisible
                    onClick={() => setType("password")}
                    className="absolute right-3 text-2xl top-1/3"
                  />
                )}
              </label>
            </div>
            <input
              className="w-full bg-[#FF3811] text-white text-xl font-semibold py-4 rounded-lg"
              type="submit"
              value="Sign In"
            />
          </form>
          <p className="text-red-500 mt-4">{error}</p>
          <p className="text-lg text-[#444] font-medium my-8 text-center">Or Sign In with</p>
          <div className="flex justify-center mb-12">
            <FcGoogle className="text-2xl cursor-pointer" />
            <FaFacebookF className="text-2xl text-[#3B5998] mx-12 cursor-pointer" />
            <BiLogoLinkedin className="text-2xl text-[#0A66C2] cursor-pointer" />
          </div>
          <p className="text-lg text-[#737373] text-center">
            Have an account?{" "}
            <Link className="text-[#FF3811] font-semibold" to={"/register"}>
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;