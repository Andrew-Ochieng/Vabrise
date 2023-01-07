import clientLogo1 from '../assets/kccson.png'
import clientLogo2 from '../assets/elkotech.png' 
import clientLogo3 from '../assets/limotech.png'
import { Slide } from 'react-reveal'       

const OurClients = () => {
    const logos = [
        {name: clientLogo1},
        {name: clientLogo2},
        {name: clientLogo3}
    ]
    
    return ( 
        <>
            <div className="flex flex-col items-center justify-center pt-8 pb-4 md:text-3xl text-xl text-gray-800 font-semibold">
                <h1 >Our Clients</h1>
                <hr className="border-2 border-green-400 mt-2 md:w-32 w-24"/>
            </div>
            <div className='md:mb-32 mb-16 mt-8 flex justify-center items-center'>
                <Slide bottom>
                    <div className='flex items-center justify-center'>
                        {logos.map((logo) => (
                            <img 
                                className='md:w-32 w-16 grayscale hover:grayscale-0 md:my-0 my-8 md:mx-8 mx-4' 
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