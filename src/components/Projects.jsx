import { useRef,useState } from "react";
import ProjectCard from "./ProjectCard";
import ProjectInfo from './ProjectInfo'
function Projects(){
    const scrollContainerRef=useRef(null);

    function handleWheel(event){
      if(scrollContainerRef.current){
        scrollContainerRef.current.scrollLeft+=event.deltaY
        event.preventDefault()
      }
    }
    const[showProject,setShowProject]=useState(false);
     
  return(
    <div id='project' className="projects bg-grey px-4 py-14 text-center flex flex-col items-center gap-4 w-full">
      <ProjectInfo showProject={showProject} setShowProject={setShowProject}></ProjectInfo>
    <div className="text-zinc-600 md:text-5xl text-xl font-semibold">OUR PROJECTS</div>
    <div className={"relative w-[98vw] mx-auto overflow-x-auto whitespace-nowrap m-5 no-scrollbar transform transition-all duration-300 "+(showProject?"opacity-0":'opacity-100')} ref={scrollContainerRef}
    onWheel={handleWheel}>
        <ProjectCard setShowProject={setShowProject}></ProjectCard>
        <ProjectCard setShowProject={setShowProject}></ProjectCard>
        <ProjectCard setShowProject={setShowProject}></ProjectCard>
        <ProjectCard setShowProject={setShowProject}></ProjectCard>
        <ProjectCard setShowProject={setShowProject}></ProjectCard>
        <ProjectCard setShowProject={setShowProject}></ProjectCard>
        <ProjectCard setShowProject={setShowProject}></ProjectCard>
        <ProjectCard setShowProject={setShowProject}></ProjectCard>
        <ProjectCard setShowProject={setShowProject}></ProjectCard>
        <ProjectCard setShowProject={setShowProject}></ProjectCard>
        <ProjectCard setShowProject={setShowProject}></ProjectCard>
   
    </div>

    <button className="allProjects border-2 p-2 hover:bg-white hover:scale-105 transform w-fit transition-all border-black border-solid lg:text-2xl md:text-xl">Show All Projects</button>
</div>
  )
}




export default Projects;