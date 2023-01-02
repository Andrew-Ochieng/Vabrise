import services from "../data.json"
import { motion } from "framer-motion";

const ServiceItem = () => {
  
    return ( 
        <>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 md:gap-16 gap-8">
                {services.map((service) => (
                    <motion.div 
                        animate={{ scale: 1, opacity: 1}}
                        initial={{scale: 0.5, opacity: 0}}
                        whileInView={{ opacity: 1 }}
                        whileHover={{ scale: 1.1 }}
                        transition={{
                            default: {
                              duration: 0.3,
                              ease: [0, 0.80, 0.2, 0.80]
                            },
                            scale: {
                              type: "spring",
                              damping: 7,
                              stiffness: 100,
                              restDelta: 0.001
                            }
                          }}
                        className="" 
                        key={service.id}>
                        <img src={service.path} alt="services" className="w-full"/>
                        <h1 className="md:text-3xl text-xl font-semibold text-gray-800 pt-6">{service.title}</h1>
                        <h3 className="md:text-xl text-lg my-1 text-green-900">{service.subtitle.slice(0, 30)}</h3>
                        <p className="md:text-lg">{service.content.split(/\s+/).slice(0, 20).join(" ")}</p>
                    </motion.div>
                ))}
            </div>
            
        </>
     );
}
 
export default ServiceItem;