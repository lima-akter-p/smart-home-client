import React, { useContext, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContex } from "../../Components/Provider/AuthContext";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa6";
// import { sendEmailVerification} from 'firebase/auth';
import { toast } from "react-toastify";

const Login = () => {
  const [showpassword, setShowpassword] = useState(false);
  const emailRef = useRef();

  const { signInUser, signInWithGoogle } = useContext(AuthContex);
  const location = useLocation();
  const navigate = useNavigate();

  const handleGooglesignIn = () => {
    signInWithGoogle()
      .then(() => {
        toast.success("Your logged out successfully");
        

        // if (!result.user.emailVerified) {
        //   alert("please verify your email address");
        // }

        // navigate("/");
         navigate(`${location.state ? location.state :"/"}`);
      })
      .catch((error) => {
        toast.error(error);
      });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    signInUser(email, password)
      .then((result) => {
         const user = result.user;
         console.log(user);
        toast.success("Your login successfully");

       

        

        e.target.reset();
        //   sendEmailVerification(result.user)
        //   .then(() =>{

        //     alert('please login your email and verify your email address')
        //   })
        // navigate("/");
        navigate(`${location.state ? location.state : "/"}`);
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
            onSubmit={handleLogin}
            className="card-body w-100 bg-amber-200 rounded-xl"
          >
            <h1 className=" text-violet-600 text-4xl text-center font-bold">
              Hello,Welcome!
            </h1>
            <fieldset className="fieldset">
              {/* email */}
              <label className="label">Email</label>
              <input
                type="email"
                name="email"
                className="input w-full"
                ref={emailRef}
                placeholder="Email"
              />
              {/* pasword */}
              <div className="relative">
                <label className="label">Password</label>
                <input
                  type={showpassword ? "text" : "password"}
                  name="password"
                  className="input w-full"
                  placeholder="Password"
                />
                <button
                  onClick={handleTogglePassword}
                  className=" btn-sm absolute top-8 right-4"
                >
                  {showpassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}
                </button>
              </div>

              <button
                type="submit"
                className="btn bg-violet-700 mt-4 text-white hover:bg-blue-900"
              >
                Sign In
              </button>

              <h3 className="text-center text-sm font-bold">OR</h3>
              <button
                onClick={handleGooglesignIn}
                type="submit"
                className="btn mt-3 bg-red-400 hover:bg-white text-black border-[#e5e5e5]"
              >
                <svg
                  aria-label="Google logo"
                  width="16"
                  height="16"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <g>
                    <path d="m0 0H512V512H0" fill="#fff"></path>
                    <path
                      fill="#34a853"
                      d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                    ></path>
                    <path
                      fill="#4285f4"
                      d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                    ></path>
                    <path
                      fill="#fbbc02"
                      d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                    ></path>
                    <path
                      fill="#ea4335"
                      d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                    ></path>
                  </g>
                </svg>
                Continue with Google
              </button>

              <p className=" mt-2 text-sm font-bold text-center">
                Don't have an account?{" "}
                <Link className="text-blue-900" to="/auth/register">
                  {" "}
                  <br></br>
                  <button className="mt-2 text-white btn bg-violet-600 hover:bg-blue-900">
                    {" "}
                    Sign Up
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

export default Login;
