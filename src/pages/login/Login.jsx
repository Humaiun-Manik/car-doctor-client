import { Link, useLocation, useNavigate } from "react-router-dom";
import loginImg from "./../../assets/images/login/login.svg";
import { useContext, useRef, useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { AuthContext } from "../../contexts/AuthProvider";
import { toast } from "react-toastify";
import SocialMediaLogin from "../shared/socialMediaLogin/SocialMediaLogin";

const Login = () => {
  const [type, setType] = useState("password");
  const { login, resetPassword } = useContext(AuthContext);
  const [error, setError] = useState("");
  const inputEmail = useRef();
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

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
        navigate(from, { replace: true });
      })
      .catch((error) => {
        error && setError("Login failed. Please check your email and password.");
      });
  };

  const handleResetPassword = () => {
    setError("");
    const email = inputEmail.current.value;

    if (!email) {
      setError("Please enter your email address!");
    } else {
      resetPassword(email)
        .then(() => {
          toast("Password reset email sent!");
        })
        .catch((error) => setError(error.message));
    }
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
                <input
                  type="text"
                  placeholder="Your email"
                  name="email"
                  className="input"
                  required
                  ref={inputEmail}
                />
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
              <p
                onClick={handleResetPassword}
                className="text-end text-lg text-[#444] hover:text-[#FF3811] duration-500 font-semibold mt-4 cursor-pointer"
              >
                Forgot password?
              </p>
            </div>
            <input
              className="w-full bg-[#FF3811] text-white text-xl font-semibold py-4 rounded-lg"
              type="submit"
              value="Sign In"
            />
          </form>
          <p className="text-red-500 mt-4">{error}</p>
          <p className="text-lg text-[#444] font-medium my-8 text-center">Or Sign In with</p>
          <SocialMediaLogin />
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
