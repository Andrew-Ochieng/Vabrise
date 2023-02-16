import Projects from "./Projects";

const OurWork = () => {

    return ( 
        <>
            <div className="flex flex-col items-center justify-center pt-8 pb-4 md:text-3xl text-xl text-gray-800 font-semibold">
                <h1 >Our Work</h1>
                <hr className="border-2 border-green-400 mt-2 md:w-32 w-24"/>
            </div>

            <div className="grid sm:grid-cols-3 grid-cols-1 items-center gap-8 md:mt-8 mt-4 md:mb-32 mb-16">
                <Projects />
            </div>
        </>
     );
}
 
export default OurWork;