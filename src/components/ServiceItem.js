import services from "../data.json"

const ServiceItem = () => {
    return ( 
        <>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 md:gap-16 gap-8">
                {services.map((service) => (
                    <div className="" key={service.id}>
                        <img src={service.path} alt="services" className="w-full"/>
                        <h1 className="md:text-3xl text-xl font-semibold text-gray-800 pt-6">{service.title}</h1>
                        <h3 className="md:text-xl text-lg my-1 text-green-900">{service.subtitle.slice(0, 30)}</h3>
                        <p className="md:text-lg">{service.content.split(/\s+/).slice(0, 20).join(" ")}</p>
                    </div>
                ))}
            </div>
            
        </>
     );
}
 
export default ServiceItem;