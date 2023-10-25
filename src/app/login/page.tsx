
import Link from "next/link"
import React from "react"
const Login = ()=>{
    return<>
    <div className="bg-orange-500 h-screen">
    <div className=" text-center pt-[5rem] text-white text-xl ">Wamed</div>
    <div className=" flex flex-col justify-center items-center pt-[3rem]">
        <div className="bg-gray-200 w-[40%] h-[25rem] border-none rounded-lg  flex flex-col items-center ">
            <input type="email" placeholder="Email" name="" id="" className="w-[80%] h-[2rem] mt-[20%] rounded-md  focus:outline-none  border-b-orange-800"  />
            <input type="email" placeholder="Password" name="" id="" className="w-[80%] h-[2rem] mt-3 rounded-md focus:outline-none  border-b-orange-800"  />
            <Link href="/home"> <button className="mt-5 text-white border-orange-300 bg-orange-500 px-4 py-2 w-[30%] hover:bg-gray-200 hover:border-r-2 hover:border-orange-300 hover:text-black">Login</button></Link>
            <div className="mt-3 text-sm">
        Don&apos;t have an account? <Link href="/signup"> <span className="text-blue-800 cursor-pointer">signup</span></Link>

        </div>

        </div>
        

    </div>
    </div>
    </>
}
export default Login