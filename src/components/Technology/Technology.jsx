import { useState } from "react";
import technologyList from "./TechnologyList";

const Technology = () => {
  const [hovered,setHovered]=useState(null);

  return (
    <div className="grid grid-cols-5 md:grid-cols-3 gap-[8%] px-[5%] py-[5%] mx-auto">
      {technologyList.map((technology) => (
        <div
          key={technology.name}
          className={`p-4 cursor-pointer hover:bg-gray-800 flex flex-col gap-1 mx-auto duration-700 relative`}
          onMouseEnter={()=>setHovered(technology.name)}
          onMouseLeave={()=>setHovered(null)}
        >
          <img src={technology.img} alt="tech_img" className={`w-[55px] h-[55px]  ${hovered === technology.name && " opacity-10"} `} />

          {
            hovered === technology.name && (
              <div className="absolute mx-auto flex justify-center items-center text-white font-bold text-[15px] text-center">
                <p className=" text-center">{technology.name}</p>
              </div>
            )
          }
        </div>
      ))}
    </div>
  );
};

export default Technology;
