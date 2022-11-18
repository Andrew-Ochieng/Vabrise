import { Link } from "react-router-dom";
import { useRef } from "react";
import logo from "../assets/logo.png"

const Navbar = () => {
    const menuRef = useRef()

    const showMenu = () => {
        menuRef.current.classList.toggle("hidden")
    }

    return ( 
        <div className="">
            <nav className='md:py-6 py-4'>
                <div className="navbar md:flex  justify-around items-center " >
                    <div className='flex items-center justify-between'>
                        <Link to='/' className='md:text-3xl text-2xl uppercase font-semibold '>
                            <img className="w-1/6" src={logo} alt="Logo.." />
                        </Link>
                        <button onClick={showMenu} className="md:hidden">
                            <i className="text-xl fa fa-bars"></i> 
                            {/* <i className="fa fa-times"></i> */}
                        </button>
                    </div>

                    <div ref={menuRef} className="md:flex hidden ">
                        <ul className="md:flex items-center md:text-lg font-medium">
                            <li className='md:mx-8 md:my-0 my-2'>
                                <Link to='/'>Home</Link>
                            </li>
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
                                <Link to='/contact'>Contact</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
     );
}
 
export default Navbar;