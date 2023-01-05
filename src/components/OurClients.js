import client from '../assets/kccson.png'
import client2 from '../assets/elkotech.png' 
import client3 from '../assets/limotech.png'       

const OurClients = () => {
    
    return ( 
        <>
            <div className="flex flex-col items-center justify-center pt-8 pb-4 md:text-3xl text-xl text-gray-800 font-semibold">
                <h1 >Our Clients</h1>
                <hr className="border-2 border-green-400 mt-2 md:w-32 w-24"/>
            </div>
            <div className='md:mb-32 mb-16 mt-8 flex justify-center items-center'>
                <div className='md:flex md:justify-around'>
                    <img className='w-40 md:my-0 my-8 md:mx-8 mx-0' src={client} alt=""/>
                    <img className='w-40 md:my-0 my-8 md:mx-8 mx-0' src={client2} alt=""/>
                    <img className='w-40 md:my-0 my-8 md:mx-8 mx-0' src={client3} alt=""/>
                    <img className='w-40 md:my-0 my-8 md:mx-8 mx-0' src={client2} alt=""/>
                </div>
            </div>

        </>
     );
}
 
export default OurClients;