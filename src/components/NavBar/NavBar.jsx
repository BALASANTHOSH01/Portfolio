import { FaLinkedinIn as LinkedIn } from "react-icons/fa";
import { FaGithub as Github } from "react-icons/fa6";
import { MdAlternateEmail as Email } from "react-icons/md";
import {  useState } from "react";
import { Link } from "react-router-dom";
import { CgMenuRight } from "react-icons/cg";

const NavBar = () => {

  //Nav Item Active
  const [activeLink, setActiveLink] = useState("home");
  const handleActive = (page) => {
    setActiveLink(page);
  };

  //Menu Toggle
  const [menuclikced, setMenuClicked] = useState(false);
  const MenuToggle = () => {
    setMenuClicked(!menuclikced);
  }

  //Menu Item Clicked 
  const ItemClicked = () => {
    setTimeout(MenuToggle(), 5000);
  }

  return (
    <div >
      <div className="flex p-3 w-[90%] mx-auto sm:justify-between items-center text-white sm:p-6">
        <div className=" w-[40%] sm:w-[50%]">
          <p className=" font-Rubik text-3xl sm:text-[45px] text-transparent bg-gradient-to-b from-red-500 to-yellow-500 bg-clip-text">BS</p>
        </div>

        <div className="hidden cursor-pointer sm:flex flex-row justify-end text-white text-[45px] w-[40%] ">
          <CgMenuRight onClick={() => MenuToggle()} />

          {
            menuclikced === true ?
              <div className="flex flex-col text-[17px] absolute top-[15%] right-[10%] z-50 bg-white text-gray-600 px-5 py-5 rounded-[30px]">
                <Link to={"/"} className="hover:bg-gray-300 px-24 py-5 text-[30px] rounded-[30px] " onClick={() => ItemClicked()}>Work</Link>
                <Link to={"/about"} className="hover:bg-gray-300 px-24 py-5 text-[30px] rounded-[30px] " onClick={() => ItemClicked()}>About</Link>

                {/* <Link className="hover:bg-gray-300 px-10 py-1 rounded-[30px]" onClick={() => ItemClicked()}>
                </Link> */}

                <a href="https://drive.google.com/file/d/1XzZXETsDT63iAUCjnhnLQLihli7zMnLT/view?usp=drive_link"
                  target="_blank" rel="noreferrer" className="hover:bg-gray-300 px-24 py-5 text-[30px] rounded-[30px] " onClick={() => ItemClicked()}>Resume</a>

                <Link to={"/connect"} className="hover:bg-gray-300 px-24 py-5 text-[30px] rounded-[30px] " onClick={() => ItemClicked()}>Connect</Link>
              </div> : <></>
          }

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
              <Link to={"/"}>
                Work
              </Link>

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
              <Github className="group-hover/github:p-[2px] group-hover/github:text-black duration-700" />
            </a>

            <a href="https://www.instagram.com/santhooosh_1" className="border-white border p-2 rounded-[50%] cursor-pointer hover:bg-white  hover:duration-200 no-underline group/instagram" target="_blank" rel="noreferrer">
              <Email className="group-hover/instagram:p-[2px] group-hover/instagram:text-black duration-700" />
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
