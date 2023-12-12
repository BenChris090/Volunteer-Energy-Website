import { Link, NavLink } from "react-router-dom";
import { FaBars, FaChevronDown, FaTimes } from "react-icons/fa";
import { FiChevronDown } from "react-icons/fi";
import { useState } from "react";

const Navbar = () => {
    let VOLUNTEER_ENERGY_LOGO =  require('../images/volunteerEnergy.jpg');
    const [mNav, setmNav] = useState("none")

    const toggleNav = () => {
        if (mNav === "none"){
            setmNav("block")
        }else{
            setmNav("none")
        };
    }

    const setNav = () => {
        toggleNav()
        document.getElementById("mNav").style.display = mNav
    }
    
    return ( 
        <nav className="flex p-2 px-6 items-center justify-between bg-white">
            {/* mobile nav starts here */}
            <div id="mNav" className="h-screen w-96 hidden z-0 fixed left-0 top-0 bg-white overflow-x-hidden overflow-y-auto pt-28 ease-in duration-500">
                <FaTimes className="text-2xl text-sky-600 absolute top-5 right-8" onClick={setNav}/>
                <NavLink to="/" style={({ isActive }) => (isActive ? {color: '#0f93d7'} : {color: '#2F4F4F'})}  className="mt-5 text-center space-y-2 block text-xl">Home</NavLink>
                <NavLink to="/corporate-banking" style={({ isActive }) => (isActive ? {color: '#0f93d7'} : {color: '#2F4F4F',})}  className="mt-10 text-center space-y-2 block text-xl">Corporate</NavLink>
                <NavLink to="/about" style={({ isActive }) => (isActive ? {color: '#0f93d7'} : {color: '#2F4F4F'})}  className="mt-10 text-center space-y-2 block text-xl">About Us</NavLink>
                <NavLink to="/contact" style={({ isActive }) => (isActive ? {color: '#0f93d7'} : {color: '#2F4F4F'})}  className="mt-10 text-center space-y-2 block text-xl">Contact Us</NavLink>
            </div>
            {/* mobile nav ends here */}
            <Link to="/" className="flex items-center"><img src={ VOLUNTEER_ENERGY_LOGO } className="h-12 mr-3 sm:h-16 lg:h-16" alt="Logo" /><span className="self-center text-3xl font-semibold whitespace-nowrap text-sky-600 lg:text-4xl">VOLUNTEER <span className="text-pink-600">ENERGY</span></span></Link>
            <div className="bars space-x-2 flex items-center ml-36">
                <FaBars className="text-2xl flex text-sky-600 my-2 lg:hidden" onClick={setNav}/>
            </div>
            <div className="links hidden items-center text-center lg:flex lg:py-auto lg:space-x-14">
                <NavLink to="/" style={({ isActive }) => (isActive ? {color: '#0f93d7'} : {color: 'black'})} className="text-lg hover:text-sky-600 ease-in duration-500"><b>Home</b></NavLink>
                <NavLink to="/corporate-banking" style={({ isActive }) => (isActive ? {color: '#0f93d7'} : {color: 'black'})} className="flex text-lg"><b>Corporate</b></NavLink>
                <NavLink to="/about" style={({ isActive }) => (isActive ? {color: '#0f93d7'} : {color: 'black'})} className="text-lg"><b>About Us</b></NavLink>
                <NavLink to="/contact" style={({ isActive }) => (isActive ? {color: '#0f93d7'} : {color: 'black'})} className="rounded-3xl px-4 text-lg"><b>Contact Us</b></NavLink>
            </div>
        </nav>
     );
}
 
export default Navbar;