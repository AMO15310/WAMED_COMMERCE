import React from "react"
import Image from "next/image"
const Navbar = () => {
    return <>
        <div className=" top-0 fixed text-white flex  justify-between w-full   ">
            <div className="">
                <div className="ml-5 p-5  flex items-center ">
                    <div className=" text-2xl">WAMED</div>
                <Image src="/shop.svg" alt="shop-svg" width={50} height={50}/>
                </div>

            </div>
            <div className="flex">
                <div className="ml-5 p-5  ">SHOP</div>
                <div className="ml-5 p-5  ">CART</div>
                <div className="ml-5 p-5  ">CONTACT</div>
                <div className="ml-5 p-5  ">USER</div>
            </div>

        </div></>
}
export default Navbar