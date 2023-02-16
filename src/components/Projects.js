import kccson from "../assets/KCCSON.png"
import kambi from "../assets/kambi.png"
import ola from "../assets/OLA.png"

const Projects = () => {
    const projects = [
        {id: 1, title: "Kakamega CSO Network", repo: "", image: kccson, link: "https://www.kakamegacsonetwork.org"},
        {id: 2, title: "Kambi Serene Apartments", repo: "", image: kambi, link: "https://kambiappartments.co.ke/"},
        {id: 3, title: "Open Learn Africa", repo: "", image: ola, link: "https://learn.vabrisetech.co.ke/"},


    ]
    return ( 
        <>
            {projects.map((project) => (
                <div key={project.id} className='hover:translate-y-1 hover:scale-105 hover:duration-300 shadow-lg hover:shadow-xl hover:cursor-pointer py-3 px-2 rounded-lg flex flex-col items-center'>
                    <img 
                        src={project.image} 
                        alt="project-image"
                        className="w-full h-full rounded-lg mb-4"
                    />
                    <a className="bg-green-400 rounded-lg py-1 px-2 text-white" href={project.link}>
                        {project.title}
                    </a>
                </div>
            ))}
        </>
     );
}
 
export default Projects;