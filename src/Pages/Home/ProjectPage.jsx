import { Link, useParams } from "react-router-dom";
import AllProjects from "../../components/Projects/ProjectDetails";
import { IoArrowBack as BackIcon } from "react-icons/io5";
import { IoIosArrowForward as ScrumIcon } from "react-icons/io";
import { FaLink as LinkIcon } from "react-icons/fa6";
import { IoLogoGithub as GithubIcon } from "react-icons/io";
import { TbWorldWww as WebsiteIcon } from "react-icons/tb";

const ProjectPage = () => {
  const { projecttitle } = useParams();
  const project = AllProjects.find((project) => project.title === projecttitle);

  if (!project) {
    return (
      <div>
        <h1>Project Not Found</h1>
      </div>
    );
  }

  return (
    <div className=" ml-[8%] text-gray-400 pb-[5%]">
      {/**Back Button */}
      <Link
        to={"/"}
        className="fixed md:absolute cursor-pointer bg-gray-800 p-4 md:p-3 md:text-[20px] text-[22px] text-gray-300 rounded-[50%] left-[2%] top-[23%] md:top-[18%] hover:bg-gray-700 hover:text-gray-50 duration-200"
      >
        <BackIcon />
      </Link>

      {/**Project Title */}
      <div className=" mt-[5%] md:mt-[15%] flex flex-row items-center gap-2">
        <a href={project.website} target="_blank" rel="noreferrer" className=" text-[50px] text-white font-bold hover:underline">{project.title}</a>
        <LinkIcon className="text-[18px]"/>
      </div>

      {/**Scrum Master */}
      <div className="my-[1%] mt-[5%] md:my-[4%] md:mt-[7%] flex flex-row items-center text-gray-400 gap-2 font-semibold">
        <p>Home</p>
        <ScrumIcon />
        <p>Portfolio</p>
        <ScrumIcon />
        <p className="text-white">{project.title}</p>
      </div>

      <div className="flex flex-row md:flex-col gap-[10%] md:gap-[2%] items-start text-gray-400 w-[80%] md:w-[97%] my-[3%] font-semibold">
        {/**Description */}
        <div className=" md:my-[5%]">
          <p className=" text-[16px]">{project.desc1}</p>
          <p className=" text-[16px] mt-[2%]">{project.desc2}</p>
        </div>

        {/** Technology */}
        <div className=" md:mt-[6%]">
          <p className=" text-[23px] text-white">Technologies</p>
          <hr className=" my-[1%] md:w-[40%]" />

          <div className=" flex flex-col md:flex-row items-center gap-2 my-[3%] mt-[6%]">
            {project.technology.map((technology) => (
              <p key={technology}>{technology}</p>
            ))}
          </div>
        </div>
      </div>

      <div className=" flex flex-roww items-center md:mt-[6%]">
        <div className=" flex flex-row text-white items-center gap-2 text-[20px] font-semibold">
          <p>Project Links :</p>
         
        </div>

        <div className=" flex flex-row items-center gap-10 ml-[5%]">
          <a href={project.github} target="_blank" rel="noreferrer" className="flex flex-row gap-1 items-center uppercase cursor-pointer hover:text-white underline">
            <GithubIcon />
            <p>Github</p>
            <LinkIcon />
          </a>

          <a href={project.website} target="_blank" rel="noreferrer" className="flex flex-row gap-1 items-center uppercase cursor-pointer hover:text-white underline">
            <WebsiteIcon />
            <p>WWW</p>
            <LinkIcon />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;
