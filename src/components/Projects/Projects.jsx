import { useEffect, useState } from "react";
import AllProjects from "./AllProjects";
import TopProjects from "./TopProjects";
import { Link } from "react-router-dom";

const Projects = () => {

  const [projects,setProjects]=useState("all");
  const handleProject =(type)=>{
    setProjects(type);
  };

  const showProjects =()=>{
    switch(projects){
      case "all":
        return <AllProjects/>;
      case "top5":
        return <TopProjects/>;
    }
  };


  return (
    <div>

      <h1></h1>

      <div className=" text-[18px] p-3 text-gray-400 font-semibold flex flex-row ml-[5%] w-[25%] md:w-[60%] justify-between items-center my-[3%] md:mb-[10%]">
        <h1>Projects</h1>
        <p>/</p>
        <p onClick={()=>handleProject("all")} className={` cursor-pointer ${projects === "all" ? " text-white" : ""}`}>All</p>
        <p>/</p>
        <p onClick={()=>handleProject("top5")} className={` cursor-pointer ${projects === "top5" ? " text-white" : ""}`}>Top-5</p>
      </div>

      {
        showProjects()
      }

    </div>
  );
};

export default Projects;
