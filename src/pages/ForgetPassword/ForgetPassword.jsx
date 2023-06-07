import { useNavigate } from "react-router-dom";

const ForgetPassword = () => {
  const navigate = useNavigate();

  return (
    <div className="container mx-auto">
      <div className="flex justify-center items-center">
        <div className="mt-8">
          <h1 className="text-4xl text-gray-600 uppercase text-center mb-4">Forget Password</h1>

          {/* error message */}
          <form>
            <div className="space-y-3 max-w-md mx-auto">
              <div className="w-full">
                <input
                  className="border border-primary rounded p-3 w-full focus:outline-none focus:ring-2 ring-primary"
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter email"
                  required
                />
              </div>

              <div className="text-right">
                <button className="btn btn-primary rounded w-full" type="submit">
                  Submit
                </button>
              </div>
            </div>
          </form>
          {/* go back */}
          <div className="">
            <small onClick={() => navigate(-1)} className="text-blue-700 cursor-pointer">
              Go back
            </small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgetPassword;
