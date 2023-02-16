import { Typewriter } from "react-simple-typewriter";
import heroImg from "../assets/hero.png"
// import { motion } from "framer-motion";
import { Slide } from "react-reveal";

const Hero = () => {
    return ( 
        <>
            <div className="md:flex justify-between items-center lg:my-32 md:my-16 my-8">
                <div>
                    <Slide left>
                        <h3 className="uppercase font-medium md:text-lg text-base text-gray-600">
                            We Manage. You Grow
                        </h3>
                        <h1 className="md:my-6 my-4 lg:text-5xl md:text-3xl text-2xl font-bold text-gray-800 md:leading-tight tracking-wide ">
                            A <span className="underline underline-offset-4 cursor-pointer text-blue-500 md:mx-2 mx-1">Complete</span> 
                            <span className="underline underline-offset-4 cursor-pointer text-yellow-400 md:mx-2 mx-1">solution</span> 
                            <br /> to all your 
                            <span className="underline underline-offset-4 cursor-pointer text-green-400 md:mx-2 mx-1">tech</span> 
                            <br />needs like... <br /> 
                            <span className="text-blue-500 font-semibold ">
                                <Typewriter
                                    words={[
                                        'Software Development', 
                                        'Graphics Design', 
                                        'CCTV Installation',
                                        'Network Installation',
                                        'Cyber Security',
                                        'Technical Training'
                                    ]}
                                    loop={Infinity}
                                    cursor
                                    cursorStyle='_'
                                    typeSpeed={100}
                                    deleteSpeed={50}
                                    delaySpeed={2000}
                                />
                            </span>             
                        </h1>
                        <p>
                            Manage your bussiness without having to worry about the the software solutions you are using. Less hustle more growth.
                        </p>
                    </Slide>
                </div>

                <div>
                    <Slide right>
                        <img src={heroImg} alt="Hero section" />
                    </Slide>
                </div>
                
            </div>
        </>
     );
}
 
export default Hero;