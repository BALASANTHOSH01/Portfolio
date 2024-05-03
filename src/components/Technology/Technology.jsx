import { useState } from "react";
import technologyList from "./TechnologyList";

const Technology = () => {
  const [hovered,setHovered]=useState(false);

  return (
    <div className="grid grid-cols-5 md:grid-cols-3 gap-[8%] px-[5%] py-[5%] mx-auto h-screen md:mb-[20%] w-[95%]">
      {
        technologyList.map((technology)=>(
          <div key={technology.name} className="flex flex-col items-center bg-white rounded-[10px] justify-center hover:bg-gray-300 p-1 mx-auto w-[70px] h-[70px]">
            <img src={technology.img} alt="technology-Img" className="w-[50px] h-[50px] mx-auto"/>
          </div>
        ))
      }
    </div>
  );
};

export default Technology;
