import services from "../data.json"
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Fade } from "react-reveal";

const ServiceList = () => {
  
    return ( 
        <>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 md:gap-16 gap-8">
                <Fade bottom>
                    {services.map((service) => (
                        <motion.div
                            whileInView={{ opacity: 1 }}
                            whileHover={{  y: -20 }}
                            transition={{type: 'spring', stiffness: 120}}
                            className="hover:text-green-500" 
                            key={service.id}>
                            <img src={service.path} alt="services" className="w-full rounded-md"/>
                            <Link to={`/${service.id}`}>
                                <h1 className="md:text-3xl text-xl font-semibold text-gray-800 pt-4">{service.title}</h1>
                                <p className="md:text-lg pt-2">{service.content.split(/\s+/).slice(0, 20).join(" ")}</p>
                            </Link>
                        
                        </motion.div>
                    ))}
                </Fade>
            </div>
            
        </>
     );
}
 
export default ServiceList;