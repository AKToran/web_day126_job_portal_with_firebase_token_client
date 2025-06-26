import React, { use } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../../context/AuthContext";

const SignIn = () => {

const { loginUser, setLoading } = use(AuthContext);
const location = useLocation();
const navigate = useNavigate();

  const handleSignIn = (e) =>{
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    
    loginUser(email, password)
    .then(result =>{
      const _ = result.user;  
      form.reset();
      navigate(location.state || '/')
    })
    .catch(err=>{
      console.log(err);
      setLoading(false);
    })
    
  }

  

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          {/* unable to get lottie files  */}
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <h1 className="text-3xl text-center font-bold">SignIn now!</h1>
            <form onSubmit={handleSignIn} className="fieldset">
              <label className="label">Email</label>
              <input
                type="email"
                name="email"
                className="input"
                placeholder="Email"
              />
              <label className="label">Password</label>
              <input
                type="password"
                name="password"
                className="input"
                placeholder="Password"
              />
              <div>
                <p>
                  Don't have an Account?
                  <Link className="link link-hover link-info" to={"/register"}>
                    Register
                  </Link>
                </p>
              </div>
              <button className="btn btn-neutral mt-4">Sign In</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
