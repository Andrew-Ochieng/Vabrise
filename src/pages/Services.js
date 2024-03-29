import ServiceList from "../components/ServiceList";

const Services = () => {
    return ( 
        <>
        
            <div className="lg:px-48 md:px-32 px-8">
                <div className="flex flex-col items-center justify-center pt-8 pb-4 md:text-3xl text-xl text-gray-800 font-semibold ">
                    <h1 >Our Services</h1>
                    <hr className="title-underline"/>
                </div>
                <div className="md:mt-8 mt-4 md:mb-64 mb-32">   
                    <ServiceList />
                </div>
            </div>
        </>
     );
}
 
export default Services;