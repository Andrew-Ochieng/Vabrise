import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Team from "./pages/Team";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import BlogDetails from "./components/BlogDetails";
import UseFetch from "./components/UseFetch";



function App() {
  const { data: blogs, loading } = UseFetch("https://personal-blogsite.herokuapp.com/blogs")

  return (
    <div className="App bg-blue-100 lg:mx-64 md:mx-40 mx-8">
      <BrowserRouter>
        <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/team" element={<Team />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="blog" element={<Blog />} />
            <Route path="/:id" element={<BlogDetails blogs={blogs} loading={loading} />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
