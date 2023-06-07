import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="container mx-auto">
      <h1 className="text-4xl capitalize text-center mb-4">register</h1>
      <div className="text-center mb-2">
        <small>
          Already user?
          <Link className="text-blue-600" to="/login">
            Login
          </Link>
          here.
        </small>
      </div>
      <form>
        <div className="space-y-3 md:w-1/2 mx-auto">
          <div className="">
            <input className="border rounded p-2 w-full" type="text" name="name" id="name" placeholder="enter name" />
          </div>
          <div className="">
            <input className="border rounded p-2 w-full" type="email" name="email" id="email" placeholder="enter email" />
          </div>
          <div className="">
            <input className="border rounded p-2 w-full" type="password" name="password" id="password" placeholder="enter password" />
          </div>

          <div className="text-right">
            <input className="btn w-full" type="submit" value="Register" />
          </div>
        </div>
      </form>
      <div className="divider">OR</div>
      <div className="text-center mt-8">
        <button className="btn">Register with google</button>
      </div>
    </div>
  );
};

export default Register;
