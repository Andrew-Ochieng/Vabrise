import { Link } from "react-router-dom";

const Footer = () => {
    return ( 
        <>
            <footer >
                <div className="md:flex justify-between text-center md:mb-8 mb-4">
                    <div>
                        <h1>Vabrise Technologies</h1>
                    </div>

                    <div>
                        <p>Copyright &copy; 2022 |  
                            <Link to='/'> 
                               | Vabrise Technologies
                            </Link>
                        </p>
                    </div>

                    <div className="space-x-4">
                        <Link to='/'>
                            <i className="text-lg text-gray-900 fa fa-github"></i>
                        </Link>
                        <Link to='/'>
                            <i className="text-lg text-gray-900 fa fa-twitter"></i>
                        </Link>
                        <Link to='/'>
                            <i className="text-lg text-gray-900 fa fa-linkedin"></i>
                        </Link>
                        <Link to='/'>
                            <i className="text-lg text-gray-900 fa fa-telegram"></i>
                        </Link>
                        <Link to='/'>
                            <i className="text-lg text-gray-900 fa fa-dribbble"></i>
                        </Link>
                    </div>
                </div>
            </footer>
        </>
    );
}
 
export default Footer;