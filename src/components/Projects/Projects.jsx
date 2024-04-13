import {GreenHarbor,Opensource,Noter,Foodspot,Infest2k24} from "../../assets/Images/Projects/index.js"

const Projects = () => {
  return (
    <div >
        <div className="w-[80%] mx-auto text-white">
            <h1 className=" text-[40px] py-[5%] text-white font-bold uppercase text-center">Empowering Projects</h1>

            <div className="flex flex-row gap-7 py-[4%]  items-center" >
                <img src={GreenHarbor} alt="project_img" className="w-[40%] h-[65vh] rounded-[10px]"/>

                <div className="text-center ">
                    <h1 className="text-[30px] uppercase my-[2%] font-semibold">GreenHarbor</h1>

                    <p className="text-gray-400 w-[70%] mx-auto my-[3%]">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam, aliquam, sapiente facere quidem tenetur ullam provident laboriosam dolorem amet id quam deserunt ipsam dolorum iste laborum explicabo. Dolorum, minus cupiditate.
                    </p>
                    <p className="text-gray-400 w-[70%] mx-auto my-[3%]">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo accusantium ipsa cumque, officiis eveniet ad, cum est nam assumenda vero voluptas! Esse illo neque commodi non. Vel, quibusdam. Reiciendis, obcaecati?
                    </p>
                </div>
            </div>

            <div className="flex flex-row gap-7 py-[4%]  items-center" >
                <div className="text-center ">
                    <h1 className="text-[30px] uppercase my-[2%] font-semibold">Recruit</h1>
                    <p className="text-gray-400 w-[70%] mx-auto my-[3%]">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam, aliquam, sapiente facere quidem tenetur ullam provident laboriosam dolorem amet id quam deserunt ipsam dolorum iste laborum explicabo. Dolorum, minus cupiditate.
                    </p>
                    <p className="text-gray-400 w-[70%] mx-auto my-[3%]">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo accusantium ipsa cumque, officiis eveniet ad, cum est nam assumenda vero voluptas! Esse illo neque commodi non. Vel, quibusdam. Reiciendis, obcaecati?
                    </p>
                </div>

                <img src={Opensource} alt="project_img" className="w-[40%] h-[65vh] rounded-[10px]"/>
            </div>

            <div className="flex flex-row gap-7 py-[4%]  items-center" >
                <img src={Noter} alt="project_img" className="w-[40%] h-[65vh] rounded-[10px]"/>

                <div className="text-center ">
                    <h1 className="text-[30px] uppercase my-[2%] font-semibold">Noter</h1>
                    <p className="text-gray-400 w-[70%] mx-auto my-[3%]">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam, aliquam, sapiente facere quidem tenetur ullam provident laboriosam dolorem amet id quam deserunt ipsam dolorum iste laborum explicabo. Dolorum, minus cupiditate.
                    </p>
                    <p className="text-gray-400 w-[70%] mx-auto my-[3%]">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo accusantium ipsa cumque, officiis eveniet ad, cum est nam assumenda vero voluptas! Esse illo neque commodi non. Vel, quibusdam. Reiciendis, obcaecati?
                    </p>
                </div>
            </div>

            <div className="flex flex-row gap-7 py-[4%]  items-center" >
                <div className=" text-center">
                    <h1 className="text-[30px] uppercase my-[2%] font-semibold">Infest2k24</h1>
                    <p className="text-gray-400 w-[70%] mx-auto my-[3%]">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam, aliquam, sapiente facere quidem tenetur ullam provident laboriosam dolorem amet id quam deserunt ipsam dolorum iste laborum explicabo. Dolorum, minus cupiditate.
                    </p>
                    <p className="text-gray-400 w-[70%] mx-auto my-[3%]">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo accusantium ipsa cumque, officiis eveniet ad, cum est nam assumenda vero voluptas! Esse illo neque commodi non. Vel, quibusdam. Reiciendis, obcaecati?
                    </p>
                </div>

                <img src={Infest2k24} alt="project_img" className="w-[40%] h-[65vh] rounded-[10px]"/>
            </div>

            <div className="flex flex-row gap-7 py-[4%]  items-center" >
                <img src={Foodspot} alt="project_img" className="w-[40%] h-[65vh] rounded-[10px]"/>

                <div className=" text-center">
                    <h1 className="text-[30px] uppercase my-[2%] font-semibold">Foodspot</h1>

                    <p className="text-gray-400 w-[70%] mx-auto my-[3%]">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam, aliquam, sapiente facere quidem tenetur ullam provident laboriosam dolorem amet id quam deserunt ipsam dolorum iste laborum explicabo. Dolorum, minus cupiditate.
                    </p>
                    <p className="text-gray-400 w-[70%] mx-auto my-[3%]">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo accusantium ipsa cumque, officiis eveniet ad, cum est nam assumenda vero voluptas! Esse illo neque commodi non. Vel, quibusdam. Reiciendis, obcaecati?
                    </p>

                </div>
            </div>

        </div>
    </div>
  )
}

export default Projects;