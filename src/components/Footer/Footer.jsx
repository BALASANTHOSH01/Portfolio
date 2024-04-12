import { PiLinkSimple } from "react-icons/pi";
import { Link } from "react-router-dom";
import { RiLinkedinFill } from "react-icons/ri";
import { IoLogoGithub } from "react-icons/io";
import { MdAlternateEmail } from "react-icons/md";
import { FaTelegramPlane } from "react-icons/fa";

const Footer = () => {
  return (
    <div className=" flex flex-row items-center justify-around sm:justify-between  bg-white p-3 text-black">
      <div className=" flex flex-col sm:w-[60%]">
        <h2 className="my-5 sm:hidden">Let&apos;s Build Something ImpactFull</h2>

        <div className="flex flex-row gap-7">
          <div className="sm:hidden flex flex-col gap-3 mb-3">
            <a href="" className="flex flex-row items-center gap-1">

              <Link to={"/"}>
                Home
              </Link>
              <PiLinkSimple />
            </a>
            <a href="" className="flex flex-row items-center gap-1">
              <Link to={"/about"}>
                About
              </Link>
              <PiLinkSimple />
            </a>
            <a
              href="https://drive.google.com/file/d/1XzZXETsDT63iAUCjnhnLQLihli7zMnLT/view?usp=drive_link"
              target="_blank"
              rel="noreferrer"
              className="flex flex-row items-center gap-1"
            >
              Resume
              <PiLinkSimple />
            </a>
          </div>
          <div className="flex flex-col gap-3 sm:p-3 sm:ml-[4%] sm:mt-[2%]">
            <a
              href="https://www.linkedin.com/in/bala-santhosh-bs05052004"
              className="flex flex-row items-center gap-1"
              target="_blank"
              rel="noreferrer"
            >
              <div className="hidden sm:block p-1 rounded-[50%] border border-black cursor-pointer">
                <RiLinkedinFill className=" text-black " />
              </div>
              LinkedIn
              <PiLinkSimple className="sm:hidden" />
            </a>
            <a
              href="https://github.com/BALASANTHOSH01"
              className="flex flex-row items-center gap-1"
              target="_blank"
              rel="noreferrer"
            >
              <div className="hidden sm:block p-1 rounded-[50%] border border-black cursor-pointer">
                <IoLogoGithub className=" text-black " />
              </div>

              GitHub
              <PiLinkSimple className="sm:hidden" />
            </a>
            <a
              href="mailto:santhos01ac@gmail.com"
              className="flex flex-row items-center gap-1"
              target="_blank"
              rel="noreferrer"
            >
              <div className="hidden sm:block p-1 rounded-[50%] border border-black cursor-pointer">
                <MdAlternateEmail className=" text-black " />
              </div>

              Email
              <PiLinkSimple className="sm:hidden" />
            </a>

          </div>
        </div>
      </div>
      <div className="block sm:w-[40%]">
        <p className="sm:hidden font-Rubik text-3xl text-transparent bg-gradient-to-b from-red-500 to-yellow-500 bg-clip-text">
          BS
        </p>

        <Link to={"/contact_me"}>
          <div className="hidden sm:block mx-auto p-2 w-[45%] border border-black text-center rounded-[50px] hover:text-white bg-black hover:shadow-md">
            <FaTelegramPlane className="text-white mx-auto" />
          </div>
        </Link>

      </div>
    </div>
  );
};

export default Footer;
