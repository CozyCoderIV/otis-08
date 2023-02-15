import "./App.css";
import { Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home.js";
import About from "./pages/about/About.js";
import Projects from "./pages/projects/Projects.js";
import Contact from "./pages/contacts/Contact.js";
import Art from "./pages/art/Art.js";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/projects" element={<Projects />}></Route>
        <Route path="/contacts" element={<Contact />}></Route>
        <Route path="/art" element={<Art />}></Route>
      </Routes>
    </div>
  );
}

export default App;
