import { FaPhoneAlt } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import { HiOutlineMail } from "react-icons/hi";
import { motion } from "framer-motion";

const ContactDetailsCard = () => {
    const contactInfo = [
        {icon: <FaPhoneAlt />, details: '0799874578/ 0710815080'},
        {icon: <MdLocationOn />, details: 'Nairobi, Kenya'},
        {icon: <HiOutlineMail />, details: 'info@vabrisetech.com'},
    ]
    return ( 
        <>
            {contactInfo.map((info) => (
                <motion.div 
                    initial={{x: 0}}
                    // animate={{x: 0.5}}
                    whileHover={{x: 30, scale: 1.05}}
                    transition={{type: 'spring', stiffness: 80}}
                    class="flex flex-col justify-center items-center rounded-lg bg-blue-300 hover:bg-blue-400 hover:text-gray-100    duration-300 p-8 shadow-lg hover:shadow-xl">
                    {info.icon}
                    <p class="md:ml-4 ml-2 mt-2 md:text-xl text-lg">{info.details}</p>
                </motion.div>
            ))}
        </>
     );
}
 
export default ContactDetailsCard;