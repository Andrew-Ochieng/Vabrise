import { BsLinkedin } from "react-icons/bs"
import ceo from "../assets/CEO.jpg"
import cto from "../assets/CTO.jpg"

const Team = () => {
    const teams = [
        {id: 1, image: ceo, name: "Chris Khayere", position: "Founder & CEO", linkedin: "https://www.linkedin.com/in/chris-khayere", icon: <BsLinkedin />},
        {id: 2, image: cto, name: "Andrew Ochieng", position: "Co-Founder & CTO", linkedin: "https://www.linkedin.com/in/andrew-ochieng-00b076180/", icon: <BsLinkedin />}
    ]
    return ( 
        <>
            <div className="title-container">
                <h1 >Our Team</h1>
                <hr className="border-2 border-green-400 mt-2 md:w-36 w-24"/>
            </div>
            <div className="sm:flex justify-center items-center gap-8 md:mt-8 mt-4 md:mb-32 mb-16">
                {teams.map((team) => (
                    <div key={team.id} className='card md:my-0 my-6 bg-blue-100'>
                        <div className="sm:w-48 sm:h-48">
                            <img src={team.image} alt='team-image' className="w-full rounded-md"/>
                        </div>
                        <div className=" m-4 card-item">
                            <h3 className="text-blue-500 font-light">{team.name}</h3>
                            <p className="text-sm my-1 font-bold text-gray-800">{team.position}</p>
                            <a href={team.linkedin} className='text-blue-500 md:text-2xl text-lg'>
                                {team.icon}
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </>
     );
}
 
export default Team;