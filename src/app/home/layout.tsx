import React from "react"
import Sidebar from "../../components/Sidebar"
import Navbar from "../../components/Navbar"
const Layout = ({ children }: { children: React.ReactNode }) => {
    return <>
    <div className="flex flex-col h-screen bg-orange-500 overflow-scroll">
        <div className=""><Navbar /></div>
        <div className="flex">
            <div className="">
                <Sidebar />

            </div>
            <div className="">
                {children}
            </div>
        </div>
        </div>
    </>
}
export default Layout