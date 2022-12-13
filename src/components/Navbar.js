import { Link } from "react-router-dom";
import { useRef } from "react";
import { FaBars } from "react-icons/fa"
import logo from "../assets/logo.png"

const Navbar = () => {
    const menuRef = useRef()

    const showMenu = () => {
        menuRef.current.classList.toggle("hidden")
    }

    return ( 
        <div className="">
            <nav className='md:py-6 py-4'>
                <div className="navbar justify-between items-center " >
                    <div className='flex items-center justify-between'>
                        <Link to='/' className='md:text-3xl text-2xl uppercase font-semibold '>
                            <img className="md:w-32 w-28" src={logo} alt="Logo.." />
                        </Link>
                        
                        <ul className="md:flex items-center md:text-lg font-medium hidden">
                            <li className='md:mx-8 md:my-0 my-2'>
                                <Link to='/about'>About</Link>
                            </li>
                            <li className='md:mx-8 md:my-0 my-2'>
                                <Link to='/services'>Services</Link>
                            </li>
                            <li className='md:mx-8 md:my-0 my-2'>
                                <Link to='/blog'>Blog</Link>
                            </li>
                            <li className='md:mx-8 md:my-0 my-2'>
                                <Link className="border-2 bg-green-400 px-4 py-1 hover:bg-green-600 duration-500 hover:text-white rounded-md" to='/contact'>Contact</Link>
                            </li>
                        </ul>

                        <button onClick={showMenu} className="md:hidden">
                            <FaBars />
                        </button>
                    </div>

                    <div ref={menuRef} className="md:hidden block">
                        <ul className="md:text-lg font-medium">
                            <li className='md:mx-8 md:my-0 my-2'>
                                <Link to='/about'>About</Link>
                            </li>
                            <li className='md:mx-8 md:my-0 my-2'>
                                <Link to='/services'>Services</Link>
                            </li>
                            <li className='md:mx-8 md:my-0 my-2'>
                                <Link to='/blog'>Blog</Link>
                            </li>
                            <li className='md:mx-8 md:my-0 my-2'>
                                <Link className="border-2 bg-green-400 px-4 py-1 hover:bg-green-600 duration-500 hover:text-white rounded-md" to='/contact'>Contact</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}
 
export default Navbar;