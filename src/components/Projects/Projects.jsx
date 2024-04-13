import {GreenHarbor,Opensource,Noter,Foodspot,Infest2k24} from "../../assets/Images/Projects/index.js";
import { SiGithub as GithubIcon } from "react-icons/si";
import { BsBrowserChrome as BrowserIcon } from "react-icons/bs";


const Projects = () => {
  return (
    <div >
        <div className="w-[80%] md:mt-[20%] mx-auto text-white">
            <h1 className=" text-[35px] md:text-[30px] py-[5%] text-white font-bold uppercase text-center">Empowering Projects</h1>

            <div className="flex flex-row md:flex-col gap-7 py-[5%] md:py-[7%]   md:my-[10%] md:rounded-[5px]  items-center" >
                <img src={GreenHarbor} alt="project_img" className="w-[40%] md:w-[90%] h-[65vh] md:h-[35vh] rounded-[10px] md:rounded-[5px]"/>

                <div className="text-center ">
                    <h1 className="text-[30px] uppercase my-[2%] font-semibold">GreenHarbor</h1>

                    <p className="text-gray-400 w-[80%] md:w-[95%] md:text-[14px] mx-auto my-[3%]">
                    GreenHarbor, born out of the 2024 Google Solution Challenge, is a beacon of hope for farmers worldwide. Its mission is clear: to transform traditional agricultural practices into modern, sustainable methods through the power of technology. By centralizing invaluable resources and connecting farmers with agricultural experts, GreenHarbor empowers individuals in the farming community to unlock their full potential.
                    </p>
                    <p className="text-gray-400 w-[80%] md:w-[95%] md:text-[14px] mx-auto my-[3%]">
                    Through an intuitive interface, GreenHarbor offers farmers access to cutting-edge seeds, expert advice, and comprehensive training materials. By bridging the gap between tradition and innovation, this platform not only elevates agricultural productivity but also fosters a global community of knowledge-sharing and collaboration. 
                    </p>

                    <div className=" flex flex-row items-center text-[20px] md:w-[40%] w-[20%] mx-auto justify-around py-[2%] md:py-[4%]">
                        <a href="https://github.com/BALASANTHOSH01/Google_Solution_Challenge_2024" target="_blank" rel="noreferrer" className="cursor-pointer text-white p-2 border border-white rounded-[50%] hover:text-black hover:bg-white duration-500">
                        <GithubIcon/>
                        </a>

                        <a href="https://greenharbor.netlify.app/" target="_blank" rel="noreferrer" className="cursor-pointer text-white p-2 border border-white rounded-[50%] hover:text-black hover:bg-white duration-500">
                        <BrowserIcon/>
                        </a>
                    </div>
                </div>
            </div>

            <div className="flex flex-row md:flex-col gap-7 py-[5%] md:py-[7%]   md:my-[10%] md:rounded-[5px]  items-center" >
                <div className="text-center ">
                    <h1 className="text-[30px] uppercase my-[2%] font-semibold">OpenHire</h1>
                    <p className="text-gray-400 w-[80%] md:w-[95%] md:text-[14px] mx-auto my-[3%]">
                        Introducing OpenHire, an innovative open-source Resource Management System (RMS) revolutionizing the recruitment landscape. OpenHire offers a comprehensive suite of features designed to streamline the hiring process, from candidate sourcing through diverse channels to managing job postings and evaluating applicants.
                    </p>
                    <p className="text-gray-400 w-[80%] md:w-[95%] md:text-[14px] mx-auto my-[3%]">
                    OpenHire embraces modern recruitment practices by facilitating virtual interviews, enabling seamless connections between hiring managers and candidates regardless of geographical barriers. Additionally, with support for multiple site job postings, organizations can expand their reach and attract a wider pool of qualified candidates.
                    </p>

                    <div className=" flex flex-row items-center text-[20px] md:w-[40%] w-[20%] mx-auto justify-around py-[2%] md:py-[4%]">
                        <a href="https://github.com/BALASANTHOSH01/Next_Gen_RMS" target="_blank" rel="noreferrer" className="cursor-pointer text-white p-2 border border-white rounded-[50%] hover:text-black hover:bg-white duration-500">
                        <GithubIcon/>
                        </a>

                        <a href="https://next-gen-rms.vercel.app/" target="_blank" rel="noreferrer" className="cursor-pointer text-white p-2 border border-white rounded-[50%] hover:text-black hover:bg-white duration-500">
                        <BrowserIcon/>
                        </a>
                    </div>
                </div>

                <img src={Opensource} alt="project_img" className="w-[40%] md:w-[90%] h-[65vh] md:h-[35vh] rounded-[10px] md:rounded-[5px]"/>
            </div>

            <div className="flex flex-row md:flex-col gap-7 py-[5%] md:py-[7%]   md:my-[10%] md:rounded-[5px]  items-center" >
                <img src={Noter} alt="project_img" className="w-[40%] md:w-[90%] h-[65vh] md:h-[35vh] rounded-[10px] md:rounded-[5px]"/>

                <div className="text-center ">
                    <h1 className="text-[30px] uppercase my-[2%] font-semibold">Noter</h1>
                    <p className="text-gray-400 w-[80%] md:w-[95%] md:text-[14px] mx-auto my-[3%]">
                        Introducing Noter, the essential note-taking companion for the Naanmudhalvan project. Crafted using Django Python, Noter offers a seamless interface and robust functionalities to streamline note creation, organization, and retrieval.
                    </p>
                    <p className="text-gray-400 w-[80%] md:w-[95%] md:text-[14px] mx-auto my-[3%]">
                    Noter&apos;s integration with Django Python ensures a secure and scalable platform, allowing for efficient data management and tailored customization to meet the unique needs of the Naanmudhalvan project. Simplify your note-taking process and enhance project productivity with Noter.
                    </p>

                    <div className=" flex flex-row items-center text-[20px] md:w-[40%] w-[20%] mx-auto justify-around py-[2%] md:py-[4%]">
                        <a href="https://github.com/BALASANTHOSH01/NaanMudhalvan_Django_Noter" target="_blank" rel="noreferrer" className="cursor-pointer text-white p-2 border border-white rounded-[50%] hover:text-black hover:bg-white duration-500">
                        <GithubIcon/>
                        </a>

                        <a href="" target="_blank" rel="noreferrer" className="cursor-pointer text-white p-2 border border-white rounded-[50%] hover:text-black hover:bg-white duration-500">
                        <BrowserIcon/>
                        </a>
                    </div>
                </div>
            </div>

            <div className="flex flex-row md:flex-col gap-7 py-[5%] md:py-[7%]   md:my-[10%] md:rounded-[5px]  items-center" >
                <div className=" text-center">
                    <h1 className="text-[30px] uppercase my-[2%] font-semibold">Infest2k24</h1>
                    <p className="text-gray-400 w-[80%] md:w-[95%] md:text-[14px] mx-auto my-[3%]">
                        INFEST2K24, crafted by myself and a trusted friend, epitomized our dedication to innovation in organizing our college&apos;s premier national-level symposium. Serving as the central hub for event activities, the website provided easy access to schedules, competitions, registrations, and speaker profiles.
                    </p>
                    <p className="text-gray-400 w-[80%] md:w-[95%] md:text-[14px] mx-auto my-[3%]">
                    As the pioneering digital platform for our symposium, INFEST2K24 not only elevated visibility but also set a new standard for future editions. Its creation represented our commitment to excellence and our desire to provide an unforgettable experience for all involved. Through INFEST2K24, we celebrated innovation and laid the foundation for continued success in hosting impactful symposiums.
                    </p>

                    <div className=" flex flex-row items-center text-[20px] md:w-[40%] w-[20%] mx-auto justify-around py-[2%] md:py-[4%]">
                        <a href="https://github.com/ManojKumar2920/infest2k24" target="_blank" rel="noreferrer" className="cursor-pointer text-white p-2 border border-white rounded-[50%] hover:text-black hover:bg-white duration-500">
                        <GithubIcon/>
                        </a>

                        <a href="https://infest2k24.vercel.app/" target="_blank" rel="noreferrer" className="cursor-pointer text-white p-2 border border-white rounded-[50%] hover:text-black hover:bg-white duration-500">
                        <BrowserIcon/>
                        </a>
                    </div>
                </div>

                <img src={Infest2k24} alt="project_img" className="w-[40%] md:w-[90%] h-[65vh] md:h-[35vh] rounded-[10px] md:rounded-[5px]"/>
            </div>

            <div className="flex flex-row md:flex-col gap-7 py-[5%] md:py-[7%]   md:my-[10%] md:rounded-[5px]  items-center" >
                <img src={Foodspot} alt="project_img" className="w-[40%] md:w-[90%] h-[65vh] md:h-[35vh] rounded-[10px] md:rounded-[5px]"/>

                <div className=" text-center">
                    <h1 className="text-[30px] uppercase my-[2%] font-semibold">Foodspot</h1>

                    <p className="text-gray-400 w-[80%] md:w-[95%] md:text-[14px] mx-auto my-[3%]">
                        Welcome to our cutting-edge food ordering application, where convenience meets culinary excellence. With a user-friendly interface and an extensive selection of delectable dishes, our app revolutionizes the way you experience dining. From savory starters to decadent desserts, our curated menu caters to every craving and occasion, ensuring a delightful culinary adventure with every order.
                    </p>
                    <p className="text-gray-400 w-[80%] md:w-[95%] md:text-[14px] mx-auto my-[3%]">
                    Designed to simplify your dining experience, our app offers seamless browsing, intuitive navigation, and personalized recommendations, making it effortless to discover new favorites and satisfy your appetite.
                    </p>

                    <div className=" flex flex-row items-center text-[20px] md:w-[40%] w-[20%] mx-auto justify-around py-[2%] md:py-[4%]">
                        <a href="https://github.com/BALASANTHOSH01/Food-Delivery-App" target="_blank" rel="noreferrer" className="cursor-pointer text-white p-2 border border-white rounded-[50%] hover:text-black hover:bg-white duration-500">
                        <GithubIcon/>
                        </a>

                        <a href="https://foodspot-fwd.netlify.app/" target="_blank" rel="noreferrer" className="cursor-pointer text-white p-2 border border-white rounded-[50%] hover:text-black hover:bg-white duration-500">
                        <BrowserIcon/>
                        </a>
                    </div>

                </div>
            </div>

        </div>
    </div>
  )
}

export default Projects;