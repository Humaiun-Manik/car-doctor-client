import { Link, useNavigate } from "react-router-dom";
import login from "./../../assets/images/login/login.svg";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useContext, useState } from "react";
import { AuthContext } from "../../contexts/AuthProvider";
import { toast } from "react-toastify";
import { updateProfile } from "firebase/auth";
import SocialMediaLogin from "../../components/shared/socialMediaLogin/SocialMediaLogin";

const SignUp = () => {
  const [type, setType] = useState("password");
  const { createUser } = useContext(AuthContext);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSignUp = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;

    // validate
    if (/(?=.*\d) /.test(password)) {
      setError("Please add at least one digit");
      return;
    } else if (!/(?=.*[a-z])/.test(password)) {
      setError("Please add at least one lower case");
      return;
    } else if (!/(?=.*[A-Z])/.test(password)) {
      setError("Please add at least one upper case");
      return;
    } else if (password.length < 8) {
      setError("Your password must be at least 8 characters");
      return;
    }

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        setError("");
        form.reset();
        toast.success("User has been created successfully.", {
          icon: "🚀",
        });
        updateUserData(user, name);
        navigate("/");
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  // update user info
  const updateUserData = (user, name) => {
    updateProfile(user, { displayName: name })
      .then(() => {})
      .catch((error) => setError(error.message));
  };

  return (
    <div className="my-10">
      <div className="hero-content flex-col lg:flex-row">
        <div className="w-full">
          <img src={login} className="rounded-lg" />
        </div>
        <div className="w-full border md:p-20 rounded-lg">
          <h1 className="text-center text-4xl text-[#444] font-semibold mb-12">Sign Up</h1>
          <form onSubmit={handleSignUp}>
            <div className="form-control mb-8">
              <label className="label">
                <span className="label-text text-lg font-semibold">Name</span>
              </label>
              <label className="input-group input-group-vertical">
                <input type="text" placeholder="Your name" name="name" className="input" required />
              </label>
            </div>
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
              value="Sign Up"
            />
          </form>
          <p className="text-red-500 mt-4">{error}</p>
          <p className="text-lg text-[#444] font-medium my-8 text-center">Or Sign Up with</p>
          <SocialMediaLogin />
          <p className="text-lg text-[#737373] text-center">
            Already have an account?{" "}
            <Link className="text-[#FF3811] font-semibold" to={"/login"}>
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
