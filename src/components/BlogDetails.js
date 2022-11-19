import UseFetch from "./UseFetch";
import { useParams } from "react-router-dom";

const BlogDetails = () => {
    const { id } = useParams()
    const {data: blog, loading} = UseFetch("https://personal-blogsite.herokuapp.com/blogs/" + id)
    
    return ( 
        <>
            <div>
                <h1 className="text-sm mt-4 mb-2">Blog {id}</h1>
                {loading && <h3>Loading data...</h3>}
                {blog && (
                    <div className="flex items-center md:mb-32 mb-16">
                        <article className="">
                            <h2 className="font-semibold md:text-3xl text-xl">{blog.title}</h2>
                            <p className="text-xl text-blue-500 font-medium">Written by {blog.author}</p>
                            <img className="my-4 w-full" src={blog.imageUrl} alt="Details images here..." />
                            <div className="text-lg text-gray-800">{blog.body}</div>
                        </article>
                    </div>
                )}

            </div>
        </>
     );
}
 
export default BlogDetails;