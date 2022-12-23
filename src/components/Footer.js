import { Link } from "react-router-dom";
import { BsGithub, BsInstagram, BsTwitter, BsLinkedin, BsFacebook } from "react-icons/bs"


const Footer = () => {
    const today = new Date()
    const newYear = today.getFullYear()
    // console.log(newYear)

    let links = [
        {name: "About", link: "/about"},
        {name: "Services", link: "/services"},
        {name: "Blog", link: "/blog"},
        {name: "Contact", link: "/contact"}
    ]

    return ( 
        <>
            <footer >
                <div className="md:flex md:justify-between justify-center items-center  text-center mb-8 md:text-base text-sm">
                    <div>
                        <h1 className="md:text-lg font-medium text-gray-800">Vabrise Technologies</h1>
                    </div>

                    <div className="md:my-0 my-2">
                        <ul className="flex justify-center items-center md:text-lg text-blue-700 font-light">
                            {links.map((link) => (
                                <li className='md:mx-8 mx-4 md:my-0 my-2'>
                                    <Link to={link.link}>{link.name}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="flex justify-center text-lg text-gray-900">
                        <Link to='/'  className="mx-2">
                            <BsGithub />
                        </Link>
                        <Link to='/'  className="mx-2">
                            <BsFacebook />
                        </Link>
                        <Link to='/'  className="mx-2">
                            <BsInstagram />
                        </Link>
                        <Link to='/'  className="mx-2">
                            <BsTwitter />
                        </Link>
                        <Link to='/'  className="mx-2">
                            <BsLinkedin />
                        </Link>
                    </div>
                    
                </div>
                <div className="flex justify-center items-center text-sm">
                    <p>Copyright &copy; <span className="text-blue-700">{newYear}</span> |  
                            <Link to='/'> 
                               | Vabrise Technologies
                            </Link>
                    </p>
                </div>
            </footer>
        </>
    );
}
 
export default Footer;