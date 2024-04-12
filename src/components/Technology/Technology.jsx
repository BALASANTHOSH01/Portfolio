import {
  HTML,
  CSS,
  JS,
  Reactjs,
  Bootstrap,
  Tailwindcss,
  Nodejs,
  Expressjs,
  MongoDB,
  Mysql,
  Git,
  Docker,
  Python,
  Django,
  Sqlite,
  Figma,
} from "../../assets/Images/Technology/index.js";

const Technology = () => {
  const technology = [
    HTML,
    CSS,
    JS,
    Reactjs,
    Bootstrap,
    Tailwindcss,
    Nodejs,
    Expressjs,
    MongoDB,
    Mysql,
    Git,
    Docker,
    Python,
    Django,
    Sqlite,
    
  ];

  return (
    <div className=" grid grid-cols-6 md:grid-cols-3 gap-[8%] px-[5%] py-[5%] mx-auto">
      {technology.map((tech) => (
        <div
          key={tech}
          className="p-5 cursor-pointer hover:bg-gray-800 mx-auto"
        >
          <img src={tech} alt="tech_img" className="w-[55px] h-[55px]" />
        </div>
      ))}
    </div>
  );
};

export default Technology;
