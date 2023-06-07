import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/solid";
import { AuthContext } from "../../contexts/AuthProvider";
import SocialLogin from "../../components/SocialLogin/SocialLogin";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { loginUsingEmailAndPassword, setUser, setError, error } = useContext(AuthContext);

  const navigate = useNavigate();
  const location = useLocation();

  const from = location?.state?.from?.pathname || "/";

  const loginHandler = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    // login user using email and password
    loginUsingEmailAndPassword(email, password)
      .then((result) => {
        const user = result.user;
        alert("Login success!!");
        setUser(user);
        setError("");
        navigate(from);
      })
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage);
        console.log(errorMessage);
      });
    form.reset();
  };

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
        {error && (
          <div className="alert alert-error rounded mb-2 max-w-md mx-auto">
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span>{error}</span>
            </div>
          </div>
        )}

        <form onSubmit={loginHandler}>
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
