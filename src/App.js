import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import services from "./data.json"
import Courses from "./pages/Courses";


function App() {
  
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
          <div>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/courses" element={<Courses />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </div>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
