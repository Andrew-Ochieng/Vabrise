import services from "../data.json"
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
                            className="" 
                            key={service.id}>
                            <img className='w-full h-full' src={service.path} alt="services" />
                            <div>
                                <h1 className="md:text-2xl text-xl font-semibold text-gray-800 pt-4">{service.title}</h1>
                                <p className="md:text-base text-sm pt-2">{service.content.split(/\s+/).slice(0, 30).join(" ")}</p>
                            </div>
                        
                        </motion.div>
                    ))}
                </Fade>
            </div>
            
        </>
     );
}
 
export default ServiceList;