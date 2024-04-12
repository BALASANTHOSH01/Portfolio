import BS_Img from "../../assets/Images/BS.jpg";
import Technology from "../../components/Technology/Technology";

const About = () => {
  return (
    <div>
        <div>

            <img src={BS_Img} alt="Img" className="rounded-[50%] w-[30%] mx-auto"/>
        </div>

        <div >
            <Technology/>
        </div>
    </div>
  )
}

export default About