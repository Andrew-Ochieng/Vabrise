import services from "../data.json"
import { motion } from "framer-motion";

const ServiceItem = () => {
    return ( 
        <>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 md:gap-16 gap-8">
                {services.map((service) => (
                    <motion.div 
                        animate={{y: 100, scale: 1}}
                        initial={{scale: 0, opacity: 0}}
                        whileInView={{ opacity: 1 }}
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