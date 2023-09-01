import { useContext, useState } from "react";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/solid";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";
import SocialLogin from "../../components/SocialLogin/SocialLogin";
import useTitle from "../../hooks/useTitle";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { createUserUsingEmailAndPassword, setUser, setError, error } = useContext(AuthContext);
  useTitle("Register");
  const navigate = useNavigate();

  const registerHandler = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    const name = form.name.value;
    const userPhoto = form.photoURL.value;
    setError("");
    console.log(email, password, name, userPhoto);

    // password validation
    if (!/(?=.*?[A-Z])/.test(password)) {
      setError("Password should be at least one upper case");
      return;
    } else if (!/(?=.*?[a-z])/.test(password.trim())) {
      setError("Password should be at least one lower case English letter");
      return;
    } else if (!/(?=.*?[#?!@$%^&*-])/.test(password.trim())) {
      setError("Password should be at least one special character");
      return;
    } else if (!/.{6,}/.test(password.trim())) {
      setError("Password should be at least 6 character");
      return;
    }
    // simple email validation
    if (!email.trim().includes("@")) {
      setError("Email should have @ character!");
      return;
    } else if (!email.trim().includes(".com")) {
      setError("Email should have .com character!");
      return;
    }
    form.reset();

    // create user using email and password
    createUserUsingEmailAndPassword(email, password)
      .then((result) => {
        const user = result.user;
        alert("User has been created successfully!!");
        setUser(user);
        setError("");
        navigate("/");
      })
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage);
        console.log(errorMessage);
      });

    // update name and photo
    // const auth = getAuth(app);
    // updateProfile(auth.currentUser, {
    //   displayName: name,
    //   photoURL: userPhoto,
    // })
    //   .then(() => {
    //     // Profile updated!
    //     // ...
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //     // An error occurred
    //     // ...
    //   });
  };

  return (
    <div className="py-4">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl inline-block underline underline-offset-8 uppercase font-semibold text-secondary">register</h2>
        </div>

        <div className="text-center mb-2">
          <small>
            Already user?
            <Link className="text-accent" to="/login">
              <strong> Login </strong>
            </Link>
            here.
          </small>
        </div>

        {/* error message */}
        {error && (
          <div className="alert alert-error rounded mb-2 max-w-lg mx-auto">
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

        <form onSubmit={registerHandler}>
          <div className="space-y-3 max-w-lg mx-auto">
            <div className="">
              <input
                className="border border-secondary rounded p-3 w-full focus:outline-none focus:ring-2 ring-secondary"
                type="text"
                name="name"
                id="name"
                placeholder="Enter name"
                required
              />
            </div>
            <div className="">
              <input
                className="border border-secondary rounded p-3 w-full focus:outline-none focus:ring-2 ring-secondary"
                type="url"
                name="photoURL"
                id="photoURL"
                placeholder="Enter image url"
                required
              />
            </div>
            <div className="">
              <input
                className="border border-secondary rounded p-3 w-full focus:outline-none focus:ring-2 ring-secondary"
                type="email"
                name="email"
                id="email"
                placeholder="Enter email"
                required
              />
            </div>
            <div className="relative">
              <input
                className="border border-secondary rounded p-3 w-full focus:outline-none focus:ring-2 ring-secondary"
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
              <button className="btn btn-accent w-full rounded text-white" type="submit">
                Register
              </button>
            </div>
          </div>
        </form>
        <div className="divider max-w-lg mx-auto">OR</div>
        {/* social login */}
        <SocialLogin></SocialLogin>
      </div>
    </div>
  );
};

export default Register;
