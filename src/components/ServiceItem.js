import Services from "../data.json"

const ServiceItem = () => {
    return ( 
        <>
            <div className="md:mt-4 mt-2 md:mb-8 mb-4">
                    <h2 className="text-red-600 text-xl">Work in progress here...</h2>
            </div>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 md:gap-16 gap-8">
                {Services.map((service) => (
                    <div className="" key={service.image}>
                        {/* <img src={service.image} alt=""> */}
                        <h1 className="md:text-3xl text-xl font-semibold text-gray-800">{service.title}</h1>
                        <h3 className="md:text-xl text-lg my-1 text-green-500">{service.subtitle}</h3>
                        <p className="md:text-lg">{service.content.split(/\s+/).slice(0, 20).join(" ")}</p>
                    </div>
                ))}
            </div>
            
        </>
     );
}
 
export default ServiceItem;