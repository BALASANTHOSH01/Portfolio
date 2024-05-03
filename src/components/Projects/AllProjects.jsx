import { Link } from "react-router-dom";
import AllProjectsData from "./ProjectDetails";
import { useEffect, useState } from "react";
import { IoArrowForwardOutline as ArrowIcon } from "react-icons/io5";

const AllProjects = () => {
  const [hovered, setHovered] = useState(null);
  const handleHover = (project) => {
    setHovered(project);
  };

  const [shuffledData, setShuffledData] = useState([]);

  useEffect(() => {
    const shuffleArray = (array) => {
      const shuffledArray = [...array];
      for (let i = shuffledArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
      }
      return shuffledArray;
    };

    setShuffledData(shuffleArray(AllProjectsData));
  }, []);

  return (
    <div className="w-full grid grid-cols-3 md:grid-cols-1 justify-center mx-auto my-[4%]">
      {shuffledData.map((project) => (
        <Link
          to={`/projects/${project.title}`}
          key={project.github}
          className="group rounded-[5px] overflow-hidden w-[80%] md:my-[8%] mx-auto p-7 hover:bg-gray-800 md:bg-gray-800 cursor-pointer duration-500"
          onMouseEnter={() => handleHover(project.title)}
          onMouseLeave={() => handleHover(null)}
        >
          <div>
            <img
              src={project.thumbnail}
              alt="img"
              className="group-hover:w-[97%] w-full mx-auto"
            />

            <div className=" py-[2%]">
              <h1 className=" text-white text-[25px] my-[3%] font-bold">
                {project.title}
              </h1>
              <div className=" text-gray-400 text-[16px] font-semibold ease-out duration-1000">
                {hovered === project.title ? (
                  <div className=" flex flex-row items-center gap-[5%]">
                    <p>Show Project</p>
                    <ArrowIcon className="text-[20px]" />
                  </div>
                ) : (
                  <p>{project.category}</p>
                )}
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default AllProjects;
