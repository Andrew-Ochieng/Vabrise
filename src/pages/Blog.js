import BlogList from "../components/BlogList";
import UseFetch from "../components/UseFetch";

const Blog = () => {
    const { data: blogs, loading, error} = UseFetch("https://vabrise-blog-production.up.railway.app/posts/")
    return ( 
        <>
            <div>
                {loading && <h3>Loading data...</h3>}
                { error && <h4 className="text-red-500">{ error }</h4>}
                
                <div className="md:mt-8 mt-4">
                    <h2 className="text-red-600 text-xl">Blog page coming soon..</h2>
                </div>

                {/* All Blogs */}
                <BlogList blogs={blogs} />

            </div>
        </>
     );
}
 
export default Blog;