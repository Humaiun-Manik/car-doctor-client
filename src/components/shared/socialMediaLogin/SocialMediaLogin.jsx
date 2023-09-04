import { useContext, useState } from "react";
import { FaFacebookF } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import { PiGithubLogoFill } from "react-icons/pi";
import { AuthContext } from "../../../contexts/AuthProvider";
import { toast } from "react-toastify";

const SocialMediaLogin = () => {
  const { googleLogin, githubLogin } = useContext(AuthContext);
  const [error, setError] = useState("");

  // google login
  const handleGoogleLogin = () => {
    googleLogin()
      .then((result) => {
        const user = result.user;
        setError("");
        toast.success(`Welcome back, ${user.displayName}! Your login was successful.`);
      })
      .catch((error) => setError(error.message));
  };

  // github login
  const handleGithubLogin = () => {
    githubLogin()
      .then((result) => {
        const user = result.user;
        setError("");
        toast.success(`Welcome back, ${user.displayName}! Your login was successful.`);
      })
      .catch((error) => setError(error.message));
  };

  return (
    <div className=" mb-12">
      <div className="flex justify-center">
        <FcGoogle onClick={handleGoogleLogin} className="text-3xl cursor-pointer" />
        <PiGithubLogoFill
          onClick={handleGithubLogin}
          className="text-3xl text-[#324754] cursor-pointer mx-12"
        />
        <FaFacebookF className="text-3xl text-[#3B5998] cursor-pointer" />
      </div>
      <p className="text-red-500 text-center mt-4">{error}</p>
    </div>
  );
};

export default SocialMediaLogin;
