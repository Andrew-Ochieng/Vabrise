import clientLogo1 from '../assets/kccson.png'
import clientLogo2 from '../assets/elkotech.png' 
import clientLogo3 from '../assets/limotech.png'
import { Slide } from 'react-reveal' 
// import { Carousel } from 'react-responsive-carousel'  
// import "react-responsive-carousel/lib/styles/carousel.min.css";    

const OurClients = () => {
    const logos = [
        {name: clientLogo1},
        {name: clientLogo2},
        {name: clientLogo3}
    ]
    
    return ( 
        <>
            <div className="title-container">
                <h1 >Our Clients</h1>
                <hr className="title-underline"/>
            </div>
            <div className='md:mb-32 mb-16 mt-8 flex justify-center items-center'>
                <Slide bottom>
                    <div className='flex items-center justify-center '>
                        {logos.map((logo) => (
                            <img 
                                className='grayscale hover:grayscale-0 md:w-32 w-20 md:my-0 my-8 md:mx-8 mx-4' 
                                src={logo.name} 
                                alt=""
                            />
                        ))}
                    </div>
                </Slide>
            </div>

        </>
     );
}
 
export default OurClients;