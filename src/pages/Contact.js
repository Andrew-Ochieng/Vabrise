import ContactForm from "../components/ContactForm";
import ContactDetailsCard from "../components/ContactDetailsCard";
import { motion } from "framer-motion";
const Contact = () => {
    return ( 
        <>
            <div className="flex flex-col items-center justify-center pt-8 pb-4 md:text-3xl text-xl text-gray-800 font-semibold">
                <h1 >Reach Out</h1>
                <hr className="border-2 border-green-400 mt-2 md:w-32 w-24"/>
            </div>
            <div className="md:flex justify-around md:my-16 my-8 md:pb-24 pb-0">
                <div>
                    <motion.div 
                        initial={{x: "-100vw", opacity: 0}}
                        animate={{x: 0, opacity: 1}}
                        transition={{type: "spring", delay: 0.2, stiffness: 50}}
                        class="flex flex-col my-8 md:text-2xl text-center text-2xl text-gray-700 space-y-8 ">
                        <ContactDetailsCard />
                    </motion.div>
                </div>

                <motion.div
                    initial={{x: "100vw", opacity: 0}}
                    animate={{x: 0, opacity: 1}}
                    transition={{type: "spring", delay: 0.4, stiffness: 50}}
                    className="md:mb-0 mb-16">
                    <ContactForm />
                </motion.div>
                
            </div>

            <div className=" justify-center w-full border-gray-400 border-2 md:mb-32 mb-8" >
                <iframe title="vabrise" width="100%" height="500" frameborder="0"  marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=500&amp;hl=en&amp;q=Jeptulu%primary%school,%Cheptulu%market,%Kaimosi,%Vihiga,%20Kenya+(Vabrise%20Technologies)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
                    <a href="https://www.gps.ie/car-satnav-gps/">sat navs</a>
                </iframe>
            </div>
        </>
     );
}
 
export default Contact;