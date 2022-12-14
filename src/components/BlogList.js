import { Link } from "react-router-dom";

const BlogList = ({blogs, blogTitle}) => {
    
    return ( 
        <>
            <div className="md:mt-12 mt-6 mb-4">
                <h1 className="font-semibold md:text-3xl text-2xl">{blogTitle}</h1>
            </div>

            <div className="grid sm:grid-cols-3 md:gap-12 sm:gap-6 md:mb-24 mb-12">
                {blogs.map((blog) => (
                    <div key={blog.id} className="bg-blue-300 p-4 rounded-lg my-4 shadow-lg hover:shadow-xl hover:translate-x-1 hover:scale-105 duration-500">
                        <img className="rounded-lg w-full" src={blog.image_url} alt="" />
                        <Link to={`/${blog.id}`} className="m-2 ">
                            <p className="py-1 text-sm text-gray-600">Created at: 
                                <span className="mx-2">{blog.created_at}</span>
                            </p>
                            <h2 className="md:text-xl text-lg font-medium text-gray-800">{blog.title}</h2>
                            <h3 className="md:text-lg text-base text-green-800 py-1 font-medium">{blog.author.firstname} {blog.author.lastname}</h3>
                            <p>{blog.content.split(/\s+/).slice(0, 20).join(" ")}</p>
                        </Link>

                    </div>
                ))}
            </div>
        </>
     );
}
 
export default BlogList;