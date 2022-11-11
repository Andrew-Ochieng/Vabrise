import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";


function App() {
  return (
    <div className="App bg-blue-100 lg:mx-64 md:mx-40 mx-8">
      <BrowserRouter>
        <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/" element={<Home />} />
            <Route path="/" element={<Home />} />
            <Route path="/" element={<Home />} />
          </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
