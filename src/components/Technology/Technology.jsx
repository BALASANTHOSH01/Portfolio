import { useState } from "react";
import technologyList from "./TechnologyList";

const Technology = () => {
  const [hovered,setHovered]=useState(false);

  return (
    <div className="grid grid-cols-5 md:grid-cols-3 gap-[8%] px-[5%] py-[5%] mx-auto">
      {technologyList.map((technology) => (
        <div
          key={technology.name}
          className={`p-4 cursor-pointer hover:bg-gray-800 flex flex-col gap-1 mx-auto  `}
          onMouseEnter={()=>setHovered((prev)=>!prev)}
          onMouseLeave={()=>setHovered((prev)=>!prev)}
        >
          <img src={technology.img} alt="tech_img" className={`w-[55px] h-[55px]`} />

          
        </div>
      ))}
    </div>
  );
};

export default Technology;
