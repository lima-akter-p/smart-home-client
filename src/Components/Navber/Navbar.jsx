import "../../nav.css";
import { Link, NavLink, useNavigate } from "react-router";
import { AuthContex } from "../Provider/AuthContext";
import { useContext } from "react";
import logo from "../../assets/logo.png";
import { toast } from "react-toastify";
import Theme from "../Theme/Theme";

const Navbar = () => {
  const navigate = useNavigate();
  const { user, logOut, userLoading } = useContext(AuthContex);

  if (userLoading) return <div>Loading...</div>;

  const handleLogout = () => {
    logOut().then(() => {
      toast.success("You logged out successfully");
      navigate("/");
    });
  };

  const links = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/all-properties">All Properties</NavLink>
      </li>
      <li>
        <NavLink to="/about-us">About Us</NavLink>
      </li>
      <li>
        <NavLink to="/contac-us">Contact Us</NavLink>
      </li>
      <li>
        <NavLink to="/terms">Terms & Privacy</NavLink>
      </li>

      {user && (
        <>
          {/* <li>
            <NavLink to="/add-properties">Add Properties</NavLink>
          </li>
          <li>
            <NavLink to="/my-properties">My Properties</NavLink>
          </li>
          <li>
            <NavLink to="/my-ratings">My Ratings</NavLink>
          </li> */}
          <Theme />
        </>
      )}
    </>
  );

  return (
    <div className="navbar z-10 bg-violet-400 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            ☰
          </div>

          <ul
            tabIndex={-1}
            className="menu menu-sm gap-6 dropdown-content bg-base-100 rounded-box mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>

        <a className="flex items-center text-xl font-bold text-violet-900">
          <img
            className="h-12 w-12 object-contain"
            src={logo}
            alt="HomeNest Logo"
          />
          <span className="text-black ml-2">HomeNest</span>
        </a>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-10">{links}</ul>
      </div>
      <div className="navbar-end gap-3">
        {user ? (
         










         
          <div className="dropdown dropdown-end">
            {/* profile button */}
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img src={user?.photoURL} />
              </div>
            </div>

            {/* dropdown menu */}
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-3 shadow bg-base-100 rounded-box w-60"
            >
              {/* user info block */}
              <div className="p-2 mb-2 rounded-lg bg-violet-100 text-center">
                <p className="text-sm font-semibold">
                  {user?.displayName || "User"}
                </p>
                {/* <p className="text-xs text-gray-600">{user?.email}</p> */}
              </div>

              <div className="bg-violet-100 mb-2 p-2 rounded-lg">
                <li>
                <Link to="/dashboard">Dashboard</Link>
              </li>
              </div>

              <li>
                <button
                  onClick={handleLogout}
                  className="btn btn-sm w-full bg-linear-to-r from-blue-500 to-violet-500 text-white"
                >
                  Logout
                </button>
              </li>
            </ul>
          </div>
        ) : (
          <Link to="/auth/login">
            <button className="btn text-white border-0 bg-linear-to-r from-violet-800 to-violet-500">
              Login
            </button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;


