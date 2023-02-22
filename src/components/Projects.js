import kccson from "../assets/KCCSON.png"
import kambi from "../assets/kambi.png"
import ola from "../assets/OLA.png"
import ccabo from "../assets/ccabo.png"

const Projects = () => {
    const projects = [
        {id: 1, title: "Kakamega CSO Network", repo: "", image: kccson, link: "https://www.kakamegacsonetwork.org"},
        {id: 2, title: "Kambi Serene Apartments", repo: "", image: kambi, link: "https://kambiappartments.co.ke/"},
        {id: 3, title: "Open Learn Africa", repo: "", image: ola, link: "https://learn.vabrisetech.co.ke/"},
        {id: 4, title: "CCABO KENYA", repo: "", image: ccabo, link: "https://ccabokenya.or.ke/"},
    ]
    return ( 
        <>
            {projects.map((project) => (
                <div key={project.id} className='shadow-lg hover:shadow-xl hover:cursor-pointer py-3 px-2 rounded-lg flex flex-col items-center'>
                    <img 
                        src={project.image} 
                        alt="project-image"
                        className="w-full h-full rounded-lg mb-4"
                    />
                    <a className="text-sm bg-sky-400 rounded-md py-1 px-2 text-white" href={project.link}>
                        {project.title}
                    </a>
                </div>
            ))}
        </>
     );
}
 
export default Projects;