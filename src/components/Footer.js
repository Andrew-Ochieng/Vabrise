import { Link } from "react-router-dom";
import { BsGithub, BsTwitter, BsLinkedin, BsFacebook, BsArrowUpSquareFill } from "react-icons/bs"
import { motion } from "framer-motion";

const Footer = () => {
    const today = new Date()
    const newYear = today.getFullYear()
    // console.log(newYear)

    const scrollTop = () => {
        window.scrollTo(0, 0);
    }

    let links = [
        {name: "Courses", link: "/courses"},
        {name: "About", link: "/about"},
        {name: "Services", link: "/services"},
        {name: "Contact", link: "/contact"}
    ]

    return ( 
        <>
            <footer className="lg:mx-48 md:mx-32 mx-8 md:mb-16 mb-8">
                <div className="md:flex md:justify-between justify-center items-center text-sm text-center mb-8">
                    <div>
                        <h1 className="font-medium text-gray-800">Vabrise Technologies</h1>
                    </div>

                    <div className="md:my-0 my-2">
                        <ul className="flex justify-center items-center text-blue-700 font-light">
                            {links.map((link) => (
                                <li key={link.link} className='md:mx-8 mx-2 md:my-0 my-2 text-sm'>
                                    <Link to={link.link}>{link.name}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="flex items-center justify-center">
                        <div className="flex justify-center text-lg text-gray-900">
                            <Link to='/'  className="mx-2">
                                <BsGithub />
                            </Link>
                            <Link to='/'  className="mx-2">
                                <BsFacebook />
                            </Link>
                            <Link to='/'  className="mx-2">
                                <BsTwitter />
                            </Link>
                            <Link to='/'  className="mx-2">
                                <BsLinkedin />
                            </Link>
                        </div>

                        {/* scroll to top */}
                        <motion.div 
                            initial={{x: '100vh'}}
                            animate={{x: 0}}
                            whileHover={{scale: 1.2}}
                            onClick={scrollTop} 
                            className="cursor-pointer md:text-2xl text-xl ml-6 text-right text-green-500 hover:text-green-600 shadow-green-600 hover:shadow-green-600 shadow-lg hover:shadow-xl animate-bounce rounded-full">
                            <BsArrowUpSquareFill />
                        </motion.div>
                    </div>

                    
                </div>
                <div className="flex justify-center items-center text-center text-sm">
                    <p>Copyright &copy; <span className="text-green-600 font-medium">{newYear}</span> | 
                        <Link to='/' className="ml-1"> 
                            Vabrise Technologies
                        </Link>
                    </p>
                </div>
            </footer>
        </>
    );
}
 
export default Footer;