// import services from "../data.json"
// import { useParams } from "react-router-dom";

const ServiceCard = ({services: service}) => {
    console.log(service.id)
    // add params to configure id
    

    return ( 
        <>
            <div>
                <img src={service.path} alt=""/>
                <h1 className="md:text-3xl text-xl font-semibold text-gray-800 pt-4">{service.title}</h1>
            </div>
        </>
     );
}
 
export default ServiceCard;