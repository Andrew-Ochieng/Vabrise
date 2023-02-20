import { useState } from "react";
import AboutImg from "../assets/hero1.png";
import CoreValues from "../components/CoreValues";
// import { motion } from "framer-motion";
import { Fade, Zoom } from "react-reveal";

const About = () => {


    return ( 
        <>
            <div className="h-full lg:mx-48 md:mx-32 mx-8">
                <div className="flex flex-col items-center justify-center pt-8 pb-4 md:text-3xl text-xl text-gray-800 font-semibold">
                    <h1 >About Us</h1>
                    <hr className="title-underline"/>
                </div>
                <div className="md:flex justify-center items-center">
                    {/* <div className=""> */}
                        <Fade left>
                            <img className="max-w-full" src={AboutImg} alt="about" />
                        </Fade>
                    {/* </div> */}
                    <div className="space-y-4 md:text-left text-center">
                        <Fade right>
                            <p>
                                Vabrise Technologies is a startup ICT Consultncy Firm in Nairobi - Kenya, started in 2020 by passionate 
                                tech students in Baraton University. With vast experience in what we do, we provide services in 
                                Computer Repair & Maintainance, Software Design & Development, CCTV & Networks Installation & Maintainance, 
                                Graphics Design. We also  provide ICT-Based Training in Web Development, UI/ UX Design, Graphics Design, 
                                CCTV & Network Installation, and Cyber Security.
                            </p>
                            <p>
                                Our key purpose is to equip the next generation of young engineers with skills that will write a new story of Africa. 
                                We exist to change the software engineering, design & cyber security landscape in Africa.
                            </p>
                        </Fade>
                    </div>
                </div>
                
                <CoreValues className='min-h-screen' title="Core Values" />

                <div className="md:mx-40 mx-8 md:mb-32 mb-16">
                    <div className="flex flex-col items-center justify-center mb-8 md:text-3xl text-xl text-gray-800 font-semibold">
                        <h1>Our Mission</h1>
                        <hr className="border-2 border-green-400 mt-2 md:w-32 w-24"/>
                    </div>
                    <Zoom bottom>
                        <p className="md:text-2xl text-xl font-extralight text-center md:leading-relaxed tracking-wide">
                            <span className="md:text-3xl text-2xl font-medium">" </span> 
                                Our mission is to equip the next generation of software engineers in Kenya with the right mindset, 
                                skillset, toolset and provide them with a platform that enables them to create amazing solutions to 
                                our problems in Africa and beyond. We see this as a sure way to a better tomorrow for our children 
                            <span className="md:text-3xl text-2xl font-medium"> "</span>
                        </p>
                    </Zoom>
                </div>
            </div>
        </>
    );
}
 
export default About;