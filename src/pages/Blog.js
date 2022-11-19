import BlogList from "../components/BlogList";
import UseFetch from "../components/UseFetch";

const Blog = () => {
    const { data: blogs, loading } = UseFetch("https://personal-blogsite.herokuapp.com/blogs")
    return ( 
        <>
            <div>
                {loading && <h3>Loading data...</h3>}
                
                {/* All Blogs */}
                <BlogList blogs={blogs} />

                {/* John Doe Blogs */}
                <BlogList blogTitle="John Doe's Blogs" blogs={blogs.filter(((blog) => blog.author === "John Doe"))} />

            </div>
        </>
     );
}
 
export default Blog;