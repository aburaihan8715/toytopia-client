import { useState } from "react";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";
import SocialLogin from "../../components/SocialLogin/SocialLogin";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="py-2">
      <div className="container mx-auto">
        <h1 className="text-4xl text-gray-700 text-center mb-4 uppercase">register</h1>

        <div className="text-center mb-2">
          <small>
            Already user?
            <Link className="text-blue-600" to="/login">
              Login
            </Link>
            here.
          </small>
        </div>

        {/* error message */}

        <form>
          <div className="space-y-3 max-w-md mx-auto">
            <div className="">
              <input
                className="border border-primary rounded p-3 w-full focus:outline-none focus:ring-2 ring-primary"
                type="text"
                name="name"
                id="name"
                placeholder="Enter name"
                required
              />
            </div>
            <div className="">
              <input
                className="border border-primary rounded p-3 w-full focus:outline-none focus:ring-2 ring-primary"
                type="url"
                name="photoURL"
                id="photoURL"
                placeholder="Enter image url"
                required
              />
            </div>
            <div className="">
              <input
                className="border border-primary rounded p-3 w-full focus:outline-none focus:ring-2 ring-primary"
                type="email"
                name="email"
                id="email"
                placeholder="Enter email"
                required
              />
            </div>
            <div className="relative">
              <input
                className="border border-primary rounded p-3 w-full focus:outline-none focus:ring-2 ring-primary"
                type={showPassword ? "text" : "password"}
                name="password"
                id="password"
                placeholder="Enter password"
                required
              />
              <span className="absolute right-8 top-1/2 -translate-y-1/2" onClick={() => setShowPassword(!showPassword)}>
                {!showPassword && <EyeSlashIcon className="h-6 w-6 text-gray-500" />}
                {showPassword && <EyeIcon className="h-6 w-6 text-gray-500" />}
              </span>
            </div>

            <div className="text-right">
              <button className="btn btn-primary w-full rounded text-gray-600" type="submit">
                Register
              </button>
            </div>
            {/* error message */}
          </div>
        </form>
        <div className="divider">OR</div>
        {/* social login */}
        <SocialLogin></SocialLogin>
      </div>
    </div>
  );
};

export default Register;
