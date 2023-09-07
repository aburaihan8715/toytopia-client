import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import app from "../firebase/firebase.config";
import { AuthContext } from "../contexts/AuthProvider";
import useTitle from "../hooks/useTitle";
import { Toaster, toast } from "react-hot-toast";
const auth = getAuth(app);

const ForgetPassword = () => {
  const { setError, error } = useContext(AuthContext);
  const navigate = useNavigate();
  useTitle("ForgetPassword");

  const forgetPasswordSubmitHandler = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    setError("");
    passwordResetEmail(email);
    form.reset();
  };

  // password reset email
  const passwordResetEmail = (email) => {
    sendPasswordResetEmail(auth, email)
      .then(() => {
        toast.success("Please check your mail!!");
        setError("");
      })
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage);
      });
  };

  return (
    <div className="py-10">
      <div className="max-w-sm mx-auto border p-10">
        <div className="mt-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl inline-block underline underline-offset-8 uppercase font-semibold text-error">forget password</h2>
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

          <form onSubmit={forgetPasswordSubmitHandler}>
            <div className="space-y-3 max-w-lg mx-auto">
              <div className="w-full">
                <input
                  className="border border-error rounded p-3 w-full focus:outline-none focus:ring-2 ring-error"
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter email"
                  required
                />
              </div>

              <div className="text-right">
                <button className="btn btn-accent text-white rounded w-full" type="submit">
                  Submit
                </button>
                <Toaster position="top-center" reverseOrder={false} />
              </div>
            </div>
          </form>
          {/* go back */}
          <div className=" text-right">
            <small onClick={() => navigate(-1)} className="text-accent underline cursor-pointer">
              <strong className="text-error">Go back</strong>
            </small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgetPassword;
