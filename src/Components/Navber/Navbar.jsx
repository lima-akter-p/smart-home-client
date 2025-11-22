import "../../nav.css";
import { Link, NavLink, useNavigate } from "react-router";
// import userImg from "../../assets/user.png";

import { AuthContex } from "../Provider/AuthContext";
import { useContext } from "react";
import logo from "../../assets/logo.png";
import { toast } from "react-toastify";
import Theme from "../Theme/Theme";

const Navbar = () => {
  const navigate = useNavigate();

  const { user, logOut,userLoading } = useContext(AuthContex);
  if(userLoading)return

  const handleLogout = () => {
    logOut().then(() => {
      toast.success("Your logged out successfully");

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

      {user && (
        <>
          <li>
            <NavLink to="/add-properties">Add Properties</NavLink>
          </li>
          <li>
            <NavLink to="/my-properties">My Properties</NavLink>
          </li>
          <li>
            <NavLink to="/my-ratings">My Ratings</NavLink>
          </li>
          <Theme></Theme>
        </>
      )}
    </>
  );
  
  return (
    <div className="navbar z-10  bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>

        <a className="flex items-center text-xl font-bold text-violet-900">
          <img
            className="h-15 w-15 object-contain"
            src={logo}
            alt="HomeNest Logo"
          />
          <span className="text-violet-700">HomeNest</span>
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>

      <div className="navbar-end gap-3">
        {user ? (
          <div className="">
            <div className="hidden sm:flex items-center gap-2">
             <img className="w-10 h-10 rounded-full" src={user.photoURL}  />
              <button
                onClick={handleLogout}
                className="btn text-white border-0 bg-linear-to-r from-blue-500 to-violet-500 hover:from-violet-500 hover:to-blue-500"
              >
                LogOut
              </button>
            </div>
            <div className="sm:hidden z-20 ">
              <div className="dropdown dropdown-end">
                <div tabIndex={0} role="button" className="btn m-1">
                  <img
                    className="w-8 h-8 rounded-full"
                    src={user?.photoURL}
                    
                  />
                </div>
                <ul
                  tabIndex="-1"
                  className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
                >
                  <li>
                    <button
                      onClick={handleLogout}
                      className="btn text-white border-0 bg-linear-to-r from-blue-500 to-violet-500 hover:from-violet-500 hover:to-blue-500"
                    >
                      LogOut
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        ) : (
          <Link to="/auth/login">
            <button
              to="/auth/login"
              className="btn text-white border-0 bg-linear-to-r from-violet-800 to-violet-500 hover:from-violet-500 hover:to-violet-800"
            >
              Login
            </button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
