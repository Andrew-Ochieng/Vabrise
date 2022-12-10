// import { useEffect, useState } from "react";
import Hero from "../components/Hero";

const Home = () => {
    // test data fetching
    // const [blogs, setBlogs] = useState([]) 

    // useEffect(() => {
    //     fetch("https://inshorts.deta.dev/news?category=technology")
    //         .then((response) => response.json())
    //         .then((blogs) => {
    //             console.log(blogs.data)
    //             // const {blogs: data} = 
    //             const name = blogs.data.filter((dat) => (
    //                 dat.author === "Hiral Goyal"
    //             ))
    //             console.log(name)
    //             // setBlogs(blogs)

    //         })
    // })

    return ( 
        <>
            <div className="">
                <Hero />
            </div>


        </>
     );
}
 
export default Home;