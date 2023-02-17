import Hero from "../components/Hero";
import OurClients from "../components/OurClients";
import OurWork from "../components/OurWork";
import Team from "../components/Team";

const Home = () => {

    return ( 
        <>
        
            <div className="lg:px-48 md:px-32 px-8">
                <Hero />
                <OurWork />
                <Team />
                <OurClients />
            </div>

        </>
     );
}
 
export default Home;