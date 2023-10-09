import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

import './Registration.css'
import { useContext, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
const Registration = () => {
    const {signUp}= useContext(AuthContext)
    const [error,setError]= useState('')
   

    const handleRegister = e=>{
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value;

        // validation 
        if(password.length <6){
          setError('Please at least 6 characters')
          return
        }
        else if(!(/[A-Z]/).test(password)){
          setError('one uppercase special character')
          return
        }

        
       signUp(email,password)
       .then(res =>console.log(res.user))
       .catch(err =>console.log(err))
    }


    return (
      <div>
        <Navbar></Navbar>

        
          
          <div className=" min-h-screen bg-base-200">
  <div className="hero-content flex-col ">
    <div className="text-center  lg:text-left mb-5">
      <h1 className="text-5xl  font-bold design-color">Registration  now!</h1>
      <p className="text-center font-semibold text2">{error}</p>
    </div>
    <div className="card flex-shrink-0 w-full  max-w-xl shadow-2xl bg-base-100">
      <form onSubmit={handleRegister} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="text-xl font-semibold">Name</span>
          </label>
          <input type="text" name="name" placeholder="Name" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="text-xl font-semibold">Email</span>
          </label>
          <input type="email" name="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="text-xl font-semibold">Password</span>
          </label>
          <input type="password" name="password" placeholder="password" className="input input-bordered" required />
          <h1 className="text-lg font-semibold">Already have an account ? <Link className="underline text-blue-600" to={'/login'}>Login</Link></h1>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Registration</button>
        </div>
      </form>
    </div>
  </div>
</div>
      </div>
    );
};

export default Registration;