import { FaAngleDown } from "react-icons/fa6";
import { BsDot } from "react-icons/bs";
import { useState } from "react";

const Experience = [
    {
        ProjectTitle:"FoodSpot",
        ProjectType:"Self Based Project",
        Content:"Lorem",
        Link:""
    },
    {
        ProjectTitle:"BMI Calculator",
        ProjectType:"JS Bootcamp",
        Content:"Lorem",
        Link:""
    },
    {
        ProjectTitle:"Porfolio",
        ProjectType:"Self Based Project",
        Content:"Lorem",
        Link:""
    },
    {
        ProjectTitle:"Instagram Clone",
        ProjectType:"Self Based Project",
        Content:"Lorem",
        Link:""
    },
]

const AboutExperience = () => {
    const [clicked, setClicked] = useState(false);
    const [selected, setSelected] = useState(null);

    const toggle = ()=>{
        setClicked(!clicked);
    }
    
    const Clicked = (Content, Link)=>{
        toggle();
        setSelected([Content,Link]);
    }
  return (
    <div className=" mx-auto text-center p-2 text-white relative mt-[6%]">
        <h2 className=" font-salsa text-[32px] tracking-wider mb-[5%]">What i have done ?</h2>
        {
            Experience.map((element)=>(
                <div key={element.ProjectTitle} className=" w-[60%] mx-auto my-[3%] mt-[5%]">
                    <div className="flex text-white items-center justify-between ">
                        <div className="flex gap-[10px]">
                            <h2 className="text-[18px] font-ubunto">{element.ProjectTitle}</h2>
                            <p className="text-[18px] flex flex-row text-gray-400 items-center font-Poppins"><BsDot/>{element.ProjectType}</p>
                        </div>
                        <FaAngleDown key={element.ProjectTitle} className=" text-gray-200 text-xl cursor-pointer" onClick={()=>Clicked(element.Content, element.Link)}/>
                    </div>
                    { clicked === true ?
                    <p className=" duration-1000 text-gray-400 text-left mt-[2%] ml-[1%]">{selected[0]} <a href={selected[1]} className=" no-underline text-sky-200">Link</a></p> : <></> }
                </div>
            ))
        }
    </div>
  )
}

export default AboutExperience;