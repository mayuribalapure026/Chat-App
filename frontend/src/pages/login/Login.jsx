import React from 'react'

function Login() {
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
        <div className="w-full p-6 bg-green-600 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-50 border border-gray-100">
            <h1 className="text-3xl font-semibold text-center text-gray-300">Login
            <span className="text-green-500">  Chat-App</span>
            </h1>
            <form action="">
                <div>
                    <label className="label p-2">
                        <span className="text-white label-text ">Username</span>
                    </label>
                    <input type="text" placeholder='Enter Username' className="w-full input input-bordered h-10"/>
                </div>
                <div>
                    <label className="label p-2">
                        <span className="text-white label-text ">Password</span>
                    </label>
                    <input type="text" placeholder='Enter Password' className="w-full input input-bordered h-10"/>

                </div>
                <a href="#" className="text-sm hover:underline hover:text-blue-600 mt-2 inline-block text-white">{"Don't"} have an account</a>
                <div>
                    <button className="btn btn-block btn-sm mt-2 btn-neutral">Login</button>
                </div>
            </form>
        </div>
      
    </div>
  )
}

export default Login