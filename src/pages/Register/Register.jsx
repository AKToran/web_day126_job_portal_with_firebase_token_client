import Lottie from "lottie-react";
import React, { use } from "react";
import { Link } from "react-router";
import { AuthContext } from "../../context/AuthContext";

const Register = () => {
  const {createUser, setLoading, setUser} = use(AuthContext);

  const handleRegister = (e) =>{
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    createUser(email, password)
    .then(result => {
      setLoading(false);
      const currentUser = result.user;
      setUser(currentUser)
    })
    .catch(err =>{
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
            <h1 className="text-3xl font-bold">Register now!</h1>
            <form onSubmit={handleRegister} className="fieldset">
              <label className="label">Email</label>
              <input type="email" name="email" className="input" placeholder="Email" />
              <label className="label">Password</label>
              <input type="password" name="password" className="input" placeholder="Password" />
              <div>
                <p>Already have an account? <Link className="link link-hover link-info" to={"/signin"}>SignIn</Link> </p>
              </div>
              <button className="btn btn-neutral mt-4">Register</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
