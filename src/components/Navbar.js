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
            <nav className='lg:px-48 md:px-32 px-8 md:py-6 py-4 top-0 left-0 sticky z-[100] bg-green-300 opacity-100 shadow-xl'>
                <div className='md:flex items-center justify-between'>
                    <div className="flex justify-between items-center">
                        <Link to='/' className='md:text-3xl text-2xl uppercase font-semibold '>
                            <img className="md:w-32 w-28 " src={logo} alt="Logo.." />
                        </Link>
                        
                        <button onClick={() => setOpen((prev) => !prev)} className="md:hidden text-xl text-gray-800">
                            {open ? <FaTimes/> : <FaBars/>}
                        </button>
                    </div>
                    
                    <div className={`${open ? "block" : "hidden"} md:flex text-gray-700`}>
                        <ul className="md:flex items-center md:text-lg font-medium">
                            {navLinks.map((navLink) => (
                                <li className='md:mx-4 md:my-0 my-4'>
                                    <Link to={navLink.route}>{navLink.name}</Link>
                                </li>
                            ))}
                            <li className='md:mx-8 md:my-0 my-4'>
                                <Link className="bg-white px-4 py-2 hover:bg-sky-300 hover:text-white duration-500 rounded-md" to='/contact'>Contact</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}
 
export default Navbar;