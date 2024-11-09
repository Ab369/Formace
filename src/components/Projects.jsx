import { useRef } from "react";
import ProjectCard from "./ProjectCard";

function Projects(){
    const scrollContainerRef=useRef(null);

    function handleWheel(event){
      if(scrollContainerRef.current){
        scrollContainerRef.current.scrollLeft+=event.deltaY
        event.preventDefault()
      }
    }

  return(
    <div className="projects bg-grey px-4 py-14 text-center flex flex-col items-center gap-4">
    <div className="text-zinc-600 md:text-4xl text-xl font-semibold">OUR PROJECTS</div>
    <div className="w-[98vw] mx-auto overflow-x-auto whitespace-nowrap m-5 no-scrollbar" ref={scrollContainerRef}
    onWheel={handleWheel}>
        <ProjectCard></ProjectCard>
        <ProjectCard></ProjectCard>
        <ProjectCard></ProjectCard>
        <ProjectCard></ProjectCard>
        <ProjectCard></ProjectCard>
        <ProjectCard></ProjectCard>
        <ProjectCard></ProjectCard>
        <ProjectCard></ProjectCard>
        <ProjectCard></ProjectCard>
        <ProjectCard></ProjectCard>
        <ProjectCard></ProjectCard>
        <ProjectCard></ProjectCard>
        
    </div>

    <button className="allProjects border-2 p-2 hover:bg-white hover:scale-105 transform w-fit transition-all border-black border-solid lg:text-2xl md:text-xl">Show All Projects</button>
</div>
  )
}




export default Projects;