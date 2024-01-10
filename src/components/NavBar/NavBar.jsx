import { FaLinkedinIn as LinkedIn } from "react-icons/fa";
import { FaGithub as Github} from "react-icons/fa6";
import { MdAlternateEmail as Email } from "react-icons/md";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CgMenuRight } from "react-icons/cg";

const NavBar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [scroll, setScroll] =  useState(false);

  useEffect(()=>{

    const onscroll = ()=>{
      if(window.scrollY>50){
        setScroll(true);
      } else{
        setScroll(false);
      }
    }

    window.addEventListener("scroll",onscroll);
    return()=> window.removeEventListener("scroll",onscroll);
  },[]);

  const handleActive = (page) => {
    setActiveLink(page);
  };
  
  return (
    <div className={scroll ? `bg-transparent`:``} >
      <div className="flex p-3 w-[90%] mx-auto sm:justify-between items-center text-white sm:p-2">
        <div className=" w-[40%] sm:w-[50%]">
          <p className=" font-Rubik text-3xl text-transparent bg-gradient-to-b from-red-500 to-yellow-500 bg-clip-text">BS</p>
        </div>

        <div className="hidden cursor-pointer sm:flex flex-row justify-end text-white text-3xl">
            <CgMenuRight className=""/>
        </div>

        <div className="sm:hidden flex  w-[60%] justify-evenly">
          <div className="flex w-[40%] md:w-[50%] justify-around md:justify-between items-center">
            <a
              className={
                activeLink === "home"
                  ? `text-white cursor-pointer flex flex-row gap-1 items-center`
                  : `text-gray-400 cursor-pointer flex flex-row gap-1 items-center`
              }
              onClick={() => {
                handleActive("home");
              }}
              
            >
              Work 
            </a>
            <a
              className={
                activeLink === "skills"
                  ? `text-white cursor-pointer`
                  : `text-gray-400 cursor-pointer`
              }
              onClick={() => {
                handleActive("skills");
              }} 
            >
              <Link to={"/about"}>
              About
              </Link>
            </a>
            <a
              className={
                activeLink === "projects"
                  ? `text-white cursor-pointer`
                  : `text-gray-400 cursor-pointer`
              }
              onClick={() => {
                handleActive("projects");
              }}
              href="https://drive.google.com/file/d/1XzZXETsDT63iAUCjnhnLQLihli7zMnLT/view?usp=drive_link"
              target="_blank" rel="noreferrer"
            >
              
              Resume
            </a>
          </div>

          <div className="md:hidden flex w-[25%] justify-around items-center">
            <a href="https://www.linkedin.com/in/bala-santhosh-bs05052004" className="border-white border p-2 rounded-[50%] cursor-pointer hover:bg-white  hover:duration-200 no-underline group/linkedin" target="_blank" rel="noreferrer">
              <LinkedIn className="group-hover/linkedin:p-[2px] group-hover/linkedin:text-black duration-700" />
            </a>

            <a href="https://github.com/BALASANTHOSH01" className="border-white border p-2 rounded-[50%] cursor-pointer hover:bg-white   hover:duration-200 no-underline group/github" target="_blank" rel="noreferrer">
              <Github className="group-hover/github:p-[2px] group-hover/github:text-black duration-700"/>
            </a>

            <a href="https://www.instagram.com/santhooosh_1" className="border-white border p-2 rounded-[50%] cursor-pointer hover:bg-white  hover:duration-200 no-underline group/instagram" target="_blank" rel="noreferrer">
              <Email className="group-hover/instagram:p-[2px] group-hover/instagram:text-black duration-700"/>
            </a>
          </div>

          <div className="p-3 border-white border cursor-pointer w-[20%] lg:w-[30%] items-center text-center hover:bg-white hover:text-black hover:rounded-[25px] hover:duration-200 focus:outline-none focus:border-red-400 focus:ring-1">
            <p className="text-[70%] font-bold">Let&apos;s Connect</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
