import About from "./components/About";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import ProjectCard from "./components/ProjectCard";
import ProjectInfo from "./components/ProjectInfo";
import Projects from "./components/Projects";

function App(){
  return(
    <div className="font-ubuntu">
    <Navbar></Navbar>
    <Home></Home>
    <About></About>
    <Projects></Projects>
    <Footer></Footer>
    </div>
  )
}

export default App;