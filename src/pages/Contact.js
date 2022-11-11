import ContactForm from "../components/ContactForm";

const Contact = () => {
    return ( 
        <>
            <div className="md:flex justify-around md:my-16 my-8 md:pb-36 pb-0">
                <div className="md:mb-0 mb-16">
                    <ContactForm />
                </div>
                <div className=" justify-center md:w-1/2 w-full rounded-lg border-white border-4" >
                    <iframe width="100%" height="500" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=500&amp;hl=en&amp;q=Mpesa%20daily%20limited,%20Moiben%20Plaza,%20Baraton%20university,%20Nandi,%20Kenya+(Vabrise%20Technologies)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
                        <a href="https://www.gps.ie/car-satnav-gps/">sat navs</a>
                    </iframe>
                </div>
            </div>
        </>
     );
}
 
export default Contact;