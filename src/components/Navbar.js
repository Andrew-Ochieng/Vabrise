import { Link } from "react-router-dom";
import { useRef } from "react";
import { FaBars } from "react-icons/fa"
import logo from "../assets/logo.png"

const Navbar = () => {
    const menuRef = useRef()

    const showMenu = () => {
        menuRef.current.classList.toggle("hidden")
    }

    let links = [
        {name: "About", link: "/about"},
        {name: "Services", link: "/services"},
        {name: "Blog", link: "/blog"},
        {name: "Contact", link: "/contact"}
    ]

    return ( 
        <>
            <nav className='md:py-6 py-4'>
                <div className="navbar md:flex justify-between items-center " >
                    <div className='flex items-center justify-between'>
                        <Link to='/' className='md:text-3xl text-2xl uppercase font-semibold '>
                            <img className="md:w-32 w-28" src={logo} alt="Logo.." />
                        </Link>

                        <button onClick={showMenu} className="md:hidden">
                            <FaBars />
                        </button>
                    </div>

                    <div ref={menuRef} className="md:flex hidden ">
                        <ul className="md:flex items-center md:text-lg font-medium">
                            {links.map((link) => (
                                <li className='md:mx-8 md:my-0 my-2'>
                                    <Link to={link.link}>{link.name}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}
 
export default Navbar;