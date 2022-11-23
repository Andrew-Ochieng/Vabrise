import Typical from "react-typical";
import heroImg from "../assets/hero.png"

const Hero = () => {
    return ( 
        <>
            <div className="md:flex justify-between lg:my-32 md:my-16 my-8">
                <div>
                    <h3 className="uppercase font-medium md:text-lg text-lg text-gray-600">
                        We Manage. You Grow
                    </h3>
                    <h1 className="md:my-6 my-4 md:text-4xl text-2xl font-bold text-gray-800 leading-loose tracking-wide ">
                        A Complete solution <br /> to all your tech <br /> such as <br /> 
                        <Typical
                            className="text-blue-500 font-light md:text-3xl text-2xl"
                            loop={Infinity}
                            wrapper="p"
                            steps={[
                                'Computer Repair', 2000, 
                                'Software Development', 2000,
                                    'UI/UX Design', 2000,
                                    'Graphics Design', 2000,
                                    'CCTV & Network Installation', 2000
                            ]}
                        />
                    </h1>
                    <p>
                        Manage your bussiness without having to worry about the the software solutions you are using. Less hustle more growth.
                    </p>
                </div>
                {/* <div> */}
                    <img src={heroImg} alt="Hero section" />
                {/* </div> */}
                
            </div>
        </>
     );
}
 
export default Hero;