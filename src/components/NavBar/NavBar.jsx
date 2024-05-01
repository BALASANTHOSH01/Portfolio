import { Link, useLocation, useParams } from "react-router-dom";
import { FaLinkedinIn as LinkedIn } from "react-icons/fa6";
import { IoLogoGithub as Github } from "react-icons/io5";
import { MdAlternateEmail as Email } from "react-icons/md";
import { useEffect, useState } from "react";
import { RxHamburgerMenu as MenuIcon } from "react-icons/rx";
import MobileNavBar from "./MobileNavBar";
import { IoArrowBack as BackIcon } from "react-icons/io5";
import {motion} from "framer-motion";

const NavBar = () => {
  const location = useLocation();
  const {projecttitle} = useParams();

  const[pageLocation,setPageLocation]=useState("home");
  useEffect(() => {
    if (location.pathname === `/projects/${projecttitle}`) {
      setPageLocation("projects");
    } else {
      setPageLocation("home");
    }
  }, [location.pathname, projecttitle]);

  const [navItem, setNavItem] = useState("home");
  const handleNav = (page) => {
    setNavItem(page);
  };

  const[MobileNav,setMobileNav]=useState(false);
  const handleMobileNav=()=>{
    setMobileNav((prev)=>!prev);
  }
  useEffect(()=>{
    setMobileNav(false);
  },[location.pathname])

  useEffect(() => {
    switch (location.pathname) {
      case "/about":
        setNavItem("about");
        break;
      case "/contact_me":
        setNavItem("contact");
        break;
      default:
        setNavItem("home");
        break;
    }
  }, []);

  return (
    <div>
      <div className=" flex flex-row z-50 items-center md:py-[5%] justify-between w-full px-[4%] pt-5">
        <motion.div whileTap={{scale:0.8}} className=" w-[20%]">

          {
            pageLocation === "projects" ? 
            (
              <Link
                
                to={"/"}
                className="fixed md:absolute cursor-pointer bg-gray-800 p-4 md:p-3 md:text-[20px] text-[22px] text-gray-200 rounded-[50%] left-[5%] top-[23%] md:top-[4%] hover:bg-gray-700 hover:text-gray-50 duration-200"
              >
                <BackIcon />
              </Link>
            )
            : 
            (
              <p className=" text-3xl sm:text-[40px] text-transparent bg-gradient-to-b from-red-500 to-yellow-500 bg-clip-text font-Rubik">
                 BS
              </p>
            )
          }
          
        </motion.div>

        <div className="text-white text-[35px] font-bold hidden md:block ease-out duration-300">
          {
            MobileNav === false ? <MenuIcon className="cursor-pointer" onClick={()=>handleMobileNav()}/> : <MobileNavBar handleMobileNav={handleMobileNav} />
          }
        </div>

        <div className="md:hidden flex flex-row justify-between ml-[7%] text-gray-400 w-[25%]">
          <Link
            to={"/"}
            className={`${navItem === "home" && "text-white"}`}
            onClick={() => handleNav("home")}
          >
            Home
          </Link>

          <Link
            to={"/about"}
            className={`${navItem === "about" && "text-white"}`}
            onClick={() => handleNav("about")}
          >
            About
          </Link>

          <a
            href="https://drive.google.com/file/d/1XzZXETsDT63iAUCjnhnLQLihli7zMnLT/view?usp=drive_link"
              target="_blank" 
              rel="noreferrer"
          >
            Resume
          </a>

        </div>

        <div className="md:hidden flex flex-row justify-around w-[30%] items-center">
          <div className=" flex flex-row gap-5 items-center">
            
            <a href="https://www.linkedin.com/in/balasanthosh01" className="text-white bg-transparent border border-white rounded-[50%] cursor-pointer text-[20px] p-[7px] hover:bg-white hover:text-black hover:p-[10px] duration-200 w-[30px] h-[30px] flex justify-center items-center" target="_blank" rel="noreferrer" >
              <LinkedIn />
            </a>

            <a href="https://github.com/BALASANTHOSH01" className="text-white bg-transparent border border-white rounded-[50%] cursor-pointer text-[20px] p-[7px] hover:bg-white hover:text-black hover:p-[10px] duration-200 w-[30px] h-[30px] flex justify-center items-center" target="_blank" rel="noreferrer" >
              <Github />
            </a>

            <a href="mailto:santhos01ac@gmail.com" className="text-white bg-transparent border border-white rounded-[50%] cursor-pointer text-[20px] p-[7px] hover:bg-white hover:text-black hover:p-[10px] duration-200 w-[30px] h-[30px] flex justify-center items-center" target="_blank" rel="noreferrer" >
              <Email />
            </a>
          </div>

          <Link
            to={"/contact_me"}
            className=" border border-white text-white bg-transparent duration-500 hover:rounded-[25px] hover:bg-white hover:font-bold hover:text-black font-Poppins font-bold text-center py-[8px] px-[10px] text-[12px] cursor-pointer"
          >
            <p>Let&apos;s Connect</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
