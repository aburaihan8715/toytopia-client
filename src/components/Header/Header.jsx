import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";

const Header = () => {
  const { logOut, user, setUser, setError } = useContext(AuthContext);

  const logOutHandler = () => {
    logOut()
      .then(() => {
        // Sign-out successful.
        setUser(null);
        setError("");
        console.log("user logged out");
      })
      .catch((error) => {
        // An error happened.
        console.log(error.message);
      });
  };

  // nav items
  const menuItems = (
    <>
      <li>
        <NavLink className="font-semibold rounded uppercase text-gray-600" to="/">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink className="font-semibold rounded uppercase text-gray-600" to="/blogs">
          Blogs
        </NavLink>
      </li>
    </>
  );
  return (
    <header className="bg-info py-5 ">
      <div className="navbar flex-col sm:flex-row container mx-auto">
        <div className="w-full navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-primary lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </label>
            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
              {menuItems}
            </ul>
          </div>
          <Link to="/" className="normal-case tracking-tighter font-semibold text-gray-600 text-4xl">
            Toytopia
          </Link>
        </div>

        {/* mobile nav */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 space-x-2">{menuItems}</ul>
        </div>

        <div className="w-full mt-2 sm:mt-0 navbar-end space-x-2">
          {user?.uid && (
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-12 rounded-full">
                <img loading="lazy" src="http://placehold.it/50x50" />
              </div>
            </label>
          )}

          {!user?.uid && (
            <Link to="/login" className="btn btn-primary w-full sm:w-auto rounded text-gray-600">
              Login
            </Link>
          )}

          {user?.uid && (
            <button onClick={logOutHandler} className="btn btn-primary rounded text-gray-600">
              LogOut
            </button>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
