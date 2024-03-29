import IntegrityImg from "../assets/collaboration.png"
import ExcellenceImg from "../assets/excellence.png"
import CollaborationImg from "../assets/handshake.png"
import { Fade } from "react-reveal"

const CoreValues = ({title}) => {
    const cardDetails = [
        {
            image: IntegrityImg,
            value_title: "Integrity",
            body: "We believe people can do the right things right"
        },
        {
            image: ExcellenceImg,
            value_title: "Excellence",
            body: "We will go to any extent to guarantee quality, reliability, and dependability. Our customers and partners can bear witness to this"
        },
        {
            image: CollaborationImg,
            value_title: "Collaboration",
            body: "We believe in teamwork and are always looking for the right partnerships for greater impact"
        }
    ]

    return ( 
        <>
            <div className="mt-8 md:mb-32 mb-16">
                <div className="title-container">
                    <h1 >{title}</h1>
                    <hr className="title-underline"/>
                </div>
                <div className="md:flex items-center justify-center md:space-x-8 md:mx-32 mx-8">
                    <Fade bottom>
                        {cardDetails.map((card) => (
                            <div key={card.value_title} className="flex flex-col justify-center items-center text-center md:px-1 px-4 my-10" >
                                <img className="md:w-32 w-28" src={card.image} alt="" />
                                <h2 className="my-3 md:text-3xl text-2xl font-medium text-sky-700">{card.value_title}</h2>
                                <p>{card.body}</p>
                            </div>
                        ))}
                    </Fade>
                </div>
            </div>
        </>
     );
}
 
export default CoreValues;