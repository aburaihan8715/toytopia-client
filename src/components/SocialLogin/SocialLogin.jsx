import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";

const SocialLogin = () => {
  const { setUser, authenticationUsingGoogle } = useContext(AuthContext);

  const navigate = useNavigate();

  const googleAuthenticationHandler = () => {
    authenticationUsingGoogle()
      .then((result) => {
        const loggedUser = result.user;
        setUser(loggedUser);
        alert("User created successfully!");
        navigate("/");
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };

  return (
    <div className="container mx-auto">
      {/* google login */}
      <div className="text-center mt-4 flex justify-center">
        <div className="text-center">
          <button onClick={googleAuthenticationHandler} className="btn btn-outline btn-secondary rounded w-full flex justify-between px-10">
            <span>
              <img loading="lazy" src="https://i.ibb.co/72bXZqD/google.png" width="24px" height="24px" alt="google" />
            </span>
            <span>continue with google</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SocialLogin;
