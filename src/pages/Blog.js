import BlogList from "../components/BlogList";
import UseFetch from "../components/UseFetch";

const Blog = () => {
    const { data: blogs, loading } = UseFetch("https://personal-blogsite.herokuapp.com/blogs")
    return ( 
        <>
            <div>
                {loading && <h3>Loading data...</h3>}
                
                <BlogList blogs={blogs} />
            </div>
        </>
     );
}
 
export default Blog;