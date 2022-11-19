import { Link } from "react-router-dom";

const BlogList = ({blogs}) => {
    
    return ( 
        <>
            <div className="grid sm:grid-cols-3 md:gap-12 sm:gap-6">
                {blogs.map((blog) => (
                    <div key={blog.id} className="bg-gray-200 md:p-6 p-3 rounded-lg my-4">
                        <img src={blog.imageUrl} alt="" />
                        <Link className="hover:text-green-700">
                            <h2>{blog.title}</h2>
                            <h3>{blog.author}</h3>
                            <p>{blog.body.split(/\s+/).slice(0, 20).join(" ")}</p>
                        </Link>

                    </div>
                ))}
            </div>
        </>
     );
}
 
export default BlogList;