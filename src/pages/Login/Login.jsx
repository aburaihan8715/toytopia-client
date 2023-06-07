import { Link } from "react-router-dom";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import SocialLogin from "../../components/SocialLogin/SocialLogin";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="py-3">
      <div className="container mx-auto">
        <h1 className="text-4xl text-gray-700 uppercase text-center mb-4">Login</h1>
        <div className="text-center mb-2">
          <small>
            New user?
            <Link className="text-blue-600" to="/register">
              Register
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
                Login
              </button>
            </div>

            <div className="text-end">
              <small className="text-blue-700">
                <Link to="/forgetPassword">Forget Password?</Link>
              </small>
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

export default Login;
