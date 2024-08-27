import React from "react";
import GenderCheckbox from "./GenderCheckbox";

const Signup = () => {
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 bg-green-600 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-50 border border-gray-100">
        <h1 className="text-3xl font-semibold text-center text-gray-300">
          SignUp
          <span className="text-green-500"> Chat-App</span>
        </h1>
        <form action="">
          <div>
            <label className="label p-2">
              <span className="text-white label-text ">Full Name</span>
            </label>
            <input
              type="text"
              placeholder="Daisy Doe"
              className="w-full input input-bordered h-10"
            />
          </div>
          <div>
            <label className="label p-2">
              <span className="text-white label-text ">Username</span>
            </label>
            <input
              type="text"
              placeholder="Enter Username"
              className="w-full input input-bordered h-10"
            />
          </div>
          <div>
            <label className="label p-2">
              <span className="text-white label-text ">Password</span>
            </label>
            <input
              type="text"
              placeholder="Enter Password"
              className="w-full input input-bordered h-10"
            />
          </div>
          <div>
            <label className="label p-2">
              <span className="text-white label-text ">Confirm Password</span>
            </label>
            <input
              type="text"
              placeholder="Confirm Password"
              className="w-full input input-bordered h-10"
            />
            <GenderCheckbox/>
            <a href="#" className="text-sm hover:underline hover:text-blue-600 mt-2 inline-block text-white">{"Don't"} have an account</a>
            <div>
                <button className="btn btn-block btn-sm mt-2 btn-neutral">Sign Up</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
