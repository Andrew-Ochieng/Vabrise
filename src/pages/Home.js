import Hero from "../components/Hero";
import OurClients from "../components/OurClients";
import OurWork from "../components/OurWork";
import Team from "../components/Team";
import ContactForm from "../components/ContactForm";


const Home = () => {

    return ( 
        <>
        
            <div className="lg:px-48 md:px-32 px-8">
                <Hero />
                <OurWork />
                <Team />
                <OurClients />
                <div className="md:my-32 my-16 md:flex flex-col items-center justify-center">
                    <div className="title-container">
                        <h1 >Contact Us</h1>
                        <hr className="title-underline"/>
                    </div>
                    <ContactForm />
                </div>
            </div>

        </>
     );
}
 
export default Home;