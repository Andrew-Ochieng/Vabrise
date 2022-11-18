import AboutImg from "../assets/hero1.png";
import CoreValues from "../components/CoreValues";

const About = () => {
    return ( 
        <>
            <div className="h-full">
                <div className="flex flex-col items-center justify-center pt-8 pb-4 md:text-3xl text-xl text-gray-800 font-semibold">
                    <h1 >About Us</h1>
                    <hr className="border-2 border-green-400 mt-2 md:w-32 w-24"/>
                </div>
                <div className="sm:flex justify-center items-center">
                    <div className="w-full">
                        <img className="w-full" src={AboutImg} alt="about" />
                    </div>
                    <div className="space-y-4">
                        <p>
                            Vabrise Technologies LTD is a software engineering firm incorporated in Kenya in 2020. 
                            Our key purpose is to equip the next generation of software engineers that will write a new story of Africa. 
                            We exist to change the software engineering landscape in Africa.
                        </p>
                        <p>
                            In the last 4 years, we have been working hard to build the required processes, and 
                            empower young engineers to build enterprise software products. We have been able to 
                            serve large enterprises including Banks, Telcos, and many VAS aggregators in Africa.
                        </p>
                        <button className="px-4 py-3 bg-green-500 text-white font-medium rounded-lg mt-4">
                            The Back Story
                        </button>
                    </div>
                </div>
                
                <CoreValues title="Core Values" />
            </div>
        </>
    );
}
 
export default About;