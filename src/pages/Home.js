import Hero from "../components/Hero";
import OurClients from "../components/OurClients";
import OurWork from "../components/OurWork";

const Home = () => {

    return ( 
        <>
        
            <div className="lg:mx-64 md:mx-40 mx-8">
                <Hero />
                <OurWork />
                <OurClients />
            </div>

        </>
     );
}
 
export default Home;