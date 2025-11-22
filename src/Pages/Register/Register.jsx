import { Link, useNavigate } from "react-router";
import { AuthContex } from "../../Components/Provider/AuthContext";
import { useContext, useState } from "react";

import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa6";
import { toast } from "react-toastify";

const Register = () => {
  const { createUser, updateUser } = useContext(AuthContex);
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [showpassword, setShowpassword] = useState(false);

  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const photo = e.target.photo.value;

    const passwordPettern = /^(?=.*[A-Z])(?=.*[a-z]).{6,}$/;
    if (!passwordPettern.test(password)) {
     
      setError(
        "Password must be at least 6 character include one uppercase and lowercase"
      );
      return;
    }

    const updatedObj = {
      photoURL: photo,
      displayName: name,
    };

    createUser(email, password)
      .then(() => {
        toast.success("Your logged out successfully");
        return updateUser(updatedObj);
      })

      .then(() => {
        toast.success("Register successfull!");

        navigate("/");
      })
      .catch((error) => {
        toast.error(error);
      });
  };

  const handleTogglePassword = (event) => {
    event.preventDefault();
    setShowpassword(!showpassword);
  };
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left"></div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form
            onSubmit={handleRegister}
            className="card-body w-100 bg-amber-200 rounded-xl"
          >
            <h1 className=" text-violet-600 text-4xl text-center font-bold">
              Hello,Welcome!
            </h1>
            <fieldset className="fieldset">
              {/* name */}
              <label className="label">Name</label>
              <input
                type="text"
                name="name"
                className="input w-full"
                placeholder="Name"
                required
              />
              {/* email */}
              <label className="label">Email</label>
              <input
                type="email"
                name="email"
                className="input w-full"
                placeholder="Email"
                required
              />
              {/* photo URL */}
              <label className="label">photo URL</label>
              <input
                type="text"
                name="photo"
                className="input w-full"
                placeholder="photo URL"
                required
              />

              {/* password */}
              <div className="relative">
                <label className="label">Password</label>
                <input
                  type={showpassword ? "text" : "password"}
                  className="input w-full"
                  name="password"
                  placeholder="Password"
                  required
                />
                <button
                  onClick={handleTogglePassword}
                  className=" btn-xs absolute top-8 right-2"
                >
                  {showpassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}
                </button>
              </div>
              {error && <p className="text-red-600">{error}</p>}
              {/* <label className="label">Password</label>
                            <input type="password" name="password" className="input w-full" placeholder="Password" required /> */}

              <button
                type="submit"
                className="btn bg-violet-700 mt-4 text-white hover:bg-blue-900"
              >
                Sign Up
              </button>

              <p className=" mt-2 text-sm font-bold text-center">
                Already have an account?{" "}
                <Link className="text-blue-900" to="/auth/login">
                  {" "}
                  <br></br>
                  <button className="mt-2 text-white btn bg-violet-600 hover:bg-blue-900">
                    {" "}
                    Sign In
                  </button>
                </Link>
              </p>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
