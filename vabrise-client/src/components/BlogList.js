import { Link } from "react-router-dom";

const BlogList = ({blogs, blogTitle}) => {
    
    return ( 
        <>
            <div className="md:mt-24 mt-12 mb-4">
                <h1 className="font-semibold md:text-3xl text-2xl">{blogTitle}</h1>
            </div>

            <div className="grid sm:grid-cols-3 md:gap-12 sm:gap-6 md:mb-24 mb-12">
                {blogs.map((blog) => (
                    <div key={blog.id} className="bg-blue-300 md:p-6 p-3 rounded-lg my-4 shadow-lg hover:shadow-xl hover:translate-y-1 hover:scale-105 duration-500">
                        <img className="rounded-lg" src={blog.imageUrl} alt="" />
                        <Link to={`/${blog.id}`} className="m-2 hover:text-blue-600">
                            {/* <p>{blog.date}</p> */}
                            <h2 className="md:text-xl text-lg font-medium py-2">{blog.title}</h2>
                            <h3 className="md:text-lg text-base text-green-800 pb-2">{blog.author}</h3>
                            <p>{blog.body.split(/\s+/).slice(0, 20).join(" ")}</p>
                        </Link>

                    </div>
                ))}
            </div>
        </>
     );
}
 
export default BlogList;