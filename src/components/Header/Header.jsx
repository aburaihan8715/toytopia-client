import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";
import logo from "../../assets/images/logo/toytopia-logo.png";

const Header = () => {
  const { logOut, user, setUser, setError } = useContext(AuthContext);

  const logOutHandler = () => {
    logOut()
      .then(() => {
        // Sign-out success
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
      <li className="">
        <NavLink className="" to="/">
          Home
        </NavLink>
      </li>

      <li>
        <NavLink className="" to="/blogs">
          Blogs
        </NavLink>
      </li>

      <li>
        <NavLink className="" to="/allToy">
          All toy
        </NavLink>
      </li>

      {user && (
        <li>
          <NavLink className="" to="/myToys">
            My toys
          </NavLink>
        </li>
      )}

      {user && (
        <li>
          <NavLink className="" to="/addToy">
            Add toy
          </NavLink>
        </li>
      )}
    </>
  );
  return (
    <header className="bg-neutral-200 fixed top-0 left-0 right-0 z-20 h-20 px-2 sm:px-5">
      <div className="navbar flex-col sm:flex-row">
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
          <Link to="/" className="">
            <img className="h-14" src={logo} alt="logo" />
          </Link>
        </div>

        {/* mobile nav */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 space-x-2">{menuItems}</ul>
        </div>

        <div className="w-full mt-2 sm:mt-0 navbar-end space-x-2">
          {user?.photoURL && (
            <label title={user.displayName} tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-12 rounded-full">
                <img loading="lazy" src={user.photoURL} />
              </div>
            </label>
          )}

          {user && !user?.photoURL && (
            <label title={user.displayName} tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-12 rounded-full">
                <img loading="lazy" src="http://placehold.it/50x50" />
              </div>
            </label>
          )}

          {!user?.uid && (
            <Link to="/login" className="btn btn-accent w-full sm:w-auto rounded text-white">
              Login
            </Link>
          )}

          {user?.uid && (
            <button onClick={logOutHandler} className="btn btn-accent rounded text-white">
              LogOut
            </button>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
