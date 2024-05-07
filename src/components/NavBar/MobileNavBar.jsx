import { Link } from "react-router-dom"
import { FaArrowRight as ArrowIcon } from "react-icons/fa";


const MobileNavBar = ({handleMobileNav}) => {
  return (
    <div className="fixed top-0 left-0 bg-white text-black w-screen h-full text-[18px] z-50 duration-300">

        <ArrowIcon className=" text-[30px] float-right mr-[9%] mt-[6%] cursor-pointer " onClick={()=>handleMobileNav()}/>

        <div className=" font-semibold text-center w-[100%] text-[20px] flex flex-col mt-[25%]">
            <Link to={"/"} className="py-[25px] px-[10px] hover:bg-gray-300 cursor-pointer">
                Home
            </Link>

            <Link to={"/about"} className="py-[25px] px-[10px] hover:bg-gray-300 cursor-pointer">
                About
            </Link>

            <a 
              href="https://drive.google.com/file/d/1_IYuoO97RotX8e_k0V2Rv9RsKjG2KTGO/view?usp=drivesdk"
              target="_blank" 
              rel="noreferrer" className="py-[25px] px-[10px] hover:bg-gray-300 cursor-pointer"
            >
                Resume
            </a>

            <Link to={"/contact_me"} className="py-[25px] px-[10px] hover:bg-gray-300 cursor-pointer">
                Contact
            </Link>
        </div>
    </div>
  )
}

export default MobileNavBar;
