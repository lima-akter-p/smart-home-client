import { useContext } from "react";
import { AuthContex } from "../Provider/AuthContext";
import { Link, Outlet } from "react-router";
import { ToastContainer } from "react-toastify";

const UserDashboard = () => {
  const { user } = useContext(AuthContex);

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h2 className="text-3xl font-bold mb-6">User Dashboard</h2>

      <div className="bg-white shadow rounded-xl p-6 flex gap-4 items-center">
        <img src={user?.photoURL} className="w-16 h-16 rounded-full border" />

        <div>
          <h3 className="text-xl font-semibold">{user?.displayName}</h3>
          <p className="text-gray-600">{user?.email}</p>
        </div>
      </div>
      <div className="drawer lg:drawer-open">
        <ToastContainer></ToastContainer>
        <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          {/* Navbar */}
          <nav className="navbar w-full bg-base-300">
            <label
              htmlFor="my-drawer-4"
              aria-label="open sidebar"
              className="btn btn-square btn-ghost"
            >
              {/* Sidebar toggle icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2"
                fill="none"
                stroke="currentColor"
                className="my-1.5 inline-block size-4"
              >
                <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path>
                <path d="M9 4v16"></path>
                <path d="M14 10l2 2l-2 2"></path>
              </svg>
            </label>
            <div className="px-4">ContestsHub Dashboard</div>
          </nav>
          {/* Page content here */}
          <Outlet></Outlet>
          {/* <div className="p-4">Page Content</div> */}
        </div>

        <div className="drawer-side is-drawer-close:overflow-visible">
          <label
            htmlFor="my-drawer-4"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <div className="flex min-h-full flex-col items-start bg-base-200 is-drawer-close:w-14 is-drawer-open:w-64">
            {/* Sidebar content here */}
            <ul className="menu w-full grow">
              {/* List item */}
              <li>
                <Link
                  to="/"
                  className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                  data-tip="Homepage"
                >
                  {/* Home icon */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    strokeLinejoin="round"
                    strokeLinecap="round"
                    strokeWidth="2"
                    fill="none"
                    stroke="currentColor"
                    className="my-1.5 inline-block size-4"
                  >
                    <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path>
                    <path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                  </svg>
                  <span className="is-drawer-close:hidden gap-2">Homepage</span>
                </Link>
              </li>

              
             
              {/* dashboard links */}
              <div className="space-x-3">
                <Link to="/my-properties">
                  <div className="p-2 rounded shadow bg-violet-100 hover:bg-violet-200 cursor-pointer">
                    My Properties
                  </div>
                </Link>

                <Link to="/add-properties">
                  <div className="p-2 rounded shadow bg-violet-100 hover:bg-violet-200 cursor-pointer">
                    Add New Property
                  </div>
                </Link>

                <Link to="/my-ratings">
                  <div className="p-2 rounded shadow bg-violet-100 hover:bg-violet-200 cursor-pointer">
                    My Ratings & Reviews
                  </div>
                </Link>
              </div>

              
            </ul>
          </div>
        </div>
      </div>

   
    </div>
  );
};

export default UserDashboard;
