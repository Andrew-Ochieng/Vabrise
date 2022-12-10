import { Typewriter } from "react-simple-typewriter";
import heroImg from "../assets/hero.png"

const Hero = () => {
    return ( 
        <>
            <div className="md:flex justify-between lg:my-32 md:my-16 my-8">
                <div>
                    <h3 className="uppercase font-medium md:text-lg text-lg text-gray-600">
                        We Manage. You Grow
                    </h3>
                    <h1 className="md:my-6 my-4 md:text-5xl text-2xl font-bold text-gray-800 md:leading-tight tracking-wide ">
                        A Complete solution <br /> to all your tech <br />needs such as <br /> 
                        <span className="text-blue-500 font-semibold ">
                            <Typewriter
                                words={[
                                    'Software Development', 
                                    'Graphics Design', 
                                    'CCTV Installation',
                                    'Networks Installation',
                                    'Cyber Security Training'
                                ]}
                                loop={Infinity}
                                cursor
                                cursorStyle='_'
                                typeSpeed={100}
                                deleteSpeed={50}
                                delaySpeed={2000}
                                // onLoopDone={handleDone}
                                // onType={handleType}
                            />
                        </span>             
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