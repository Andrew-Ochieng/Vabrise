import { Link } from "react-router-dom";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa"
import logo from "../assets/logo.png"

const Navbar = () => {

    const [open, setOpen] = useState(false)

    const navLinks = [
        {name: "About", route: "/about"},
        {name: "Services", route: "/services"},
        {name: "Courses", route: "/courses"}
    ]
    

    return ( 
        <>
            <nav className='lg:px-48 md:px-32 px-8 md:py-6 py-4 top-0 left-0 sticky z-[100] bg-sky-300 opacity-100 shadow-xl'>
                <div className='md:flex items-center justify-between'>
                    <div className="flex justify-between items-center">
                        <Link to='/' className='md:text-3xl text-2xl uppercase font-semibold '>
                            <img className="md:w-32 w-28 " src={logo} alt="Logo.." />
                        </Link>
                        
                        <button onClick={() => setOpen((prev) => !prev)} className="md:hidden text-xl text-gray-800">
                            <FaBars/>
                        </button>
                    </div>
                    
                    <div className='md:flex hidden text-gray-700'>
                        <ul className="md:flex items-center md:text-lg font-medium">
                            {navLinks.map((navLink) => (
                                <li className='md:mx-4 md:my-0 my-4 hover:text-white'>
                                    <Link to={navLink.route}>{navLink.name}</Link>
                                </li>
                            ))}
                            <li className='md:mx-8 md:my-0 my-4'>
                                <Link className="bg-white px-4 py-2 hover:bg-sky-800 hover:text-white duration-500 rounded-md" to='/contact'>Contact</Link>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className={`${open ? "left-0 " : "left-[-100%]"} sm:hidden absolute top-0 right-0 bottom-0 flex flex-col items-end space-y-8 py-6 px-8 text-right w-full h-screen duration-300 ease-in-out bg-sky-400/90    `}>
                    <button onClick={() => setOpen((prev) => !prev)} className="mb-8 sm:hidden text-2xl text-gray-100 ">
                            <FaTimes/> 
                    </button> 
                    <ul className="md:flex items-center text-base font-medium">
                        {navLinks.map((navLink) => (
                            <li onClick={() => setOpen((prev) => !prev)} className='md:mx-4 md:my-0 my-6 hover:text-white'>
                                <Link to={navLink.route}>{navLink.name}</Link>
                            </li>
                        ))}
                        <li className='md:mx-8 md:my-0 my-4'>
                            <Link className="bg-white px-3 py-1 hover:bg-sky-800 hover:text-white duration-500 rounded-md" to='/contact'>Contact</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    );
}
 
export default Navbar;