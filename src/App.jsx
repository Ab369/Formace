import About from "./components/About";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import ProjectCard from "./components/ProjectCard";
import ProjectInfo from "./components/ProjectInfo";
import Projects from "./components/Projects";

function App(){
  return(
    <div className="font-ubuntu h-[800vh]">
    <Navbar></Navbar>
    <Home></Home>
    <About></About>
    <Projects></Projects>
    <ProjectInfo></ProjectInfo>
    </div>
  )
}

export default App;