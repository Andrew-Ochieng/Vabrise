import ContactForm from "../components/ContactForm";
import { FaPhoneAlt } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import { HiOutlineMail } from "react-icons/hi";

const Contact = () => {
    return ( 
        <>
            <div className="md:flex justify-around md:my-16 my-8 md:pb-24 pb-0">
                <div>
                    <div class="flex flex-col my-8 md:text-2xl text-center text-2xl text-gray-700 space-y-8 ">
                        <div class="flex flex-col justify-center items-center rounded-lg bg-blue-300 p-8 shadow-lg hover:shadow-xl">
                            <FaPhoneAlt />
                            <p class="md:ml-4 ml-2 md:text-xl text-lg">0799874578/ 0710815080</p>
                        </div>
                        <div class="flex flex-col justify-center items-center rounded-lg bg-blue-300 p-8 shadow-lg hover:shadow-xl">
                            <MdLocationOn />
                            <p class="md:ml-4 ml-2 md:text-xl text-lg">Nairobi, Kenya</p>
                        </div>
                        <div class="flex flex-col justify-center items-center rounded-lg bg-blue-300 p-8 shadow-lg hover:shadow-xl">
                            <HiOutlineMail />
                            <p class="md:ml-4 ml-2 md:text-xl text-lg">info@vabrise.com</p>
                        </div>
                    </div>
                </div>

                <div className="md:mb-0 mb-16">
                    <ContactForm />
                </div>
                
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