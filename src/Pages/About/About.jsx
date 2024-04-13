import BS_Img from "../../assets/Images/BS.jpg";
import Technology from "../../components/Technology/Technology";
import santhoshImg from "../../assets/Images/Santhosh-img.png";
import AboutAnimation from "../../components/Animations/AboutAnimation";

const About = () => {
  return (
    <div className="mt-[5%] relative">

      <AboutAnimation/>

      <h1 className="hidden md:block  text-white font-semibold text-[30px] text-center mb-[10%]">About Me</h1>
      <img
        src={BS_Img}
        alt="Img"
        className="rounded-[50%] md:w-[80%]  w-[30%] mx-auto"
      />

      <div className="my-[2%] flex flex-row md:flex-col px-[8%] mx-auto">

        <div className=" flex flex-col md:flex-row md:gap-[4%] md:justify-center text-white font-extrabold text-[60px] md:text-[40px] w-[30%] md:w-full font-Poppins">
          <h1 className="md:hidden">About</h1>
          <h1>Bala</h1>
          <h1>
            <span className=" underline decoration-yellow-500 md:decoration-transparent md:text-[44px] text-[65px]">
              S
            </span>
            anthosh
          </h1>
        </div>

        <div className=" text-[16px] text-gray-300 ml-[5%] font-thin font-Poppins">
          <p className="mt-[3%]">
          <span className="text-white text-[18px] font-bold ">Bala Santhosh </span>, a luminary in the realm of Full Stack Development, hails from the vibrant cityscape of Coimbatore, where his journey in web technologies began. Fueled by an insatiable thirst for knowledge, Bala embarked on a path of discovery, guided by his pursuit of excellence. Through his academic pursuits at Info Institute of Engineering, he forged a strong foundation in IT, laying the groundwork for his burgeoning career.
          </p>

          <p className="mt-[3%]">
          As the Web Development Lead of his college&apos;s GDSC, Bala inspires and guides fellow enthusiasts in their journey through the digital landscape. His commitment to innovation was further showcased in his participation in the Google Solution Challenge 2024, securing recognition and a certificate for his outstanding contributions. Proficient in HTML5, CSS, JavaScript, React.js, and Node.js, Bala is an architect of captivating user experiences, blending artistry with functionality seamlessly.
          </p>

          <p className="mt-[3%]">
          Moreover, Bala&apos;s leadership extends beyond coding as he serves as the Web Development Lead of his college&apos;s GDSC. His commitment to innovation was further showcased in his participation in the Google Solution Challenge 2024, where he secured recognition and a certificate for his outstanding contributions.
          </p>

          <p className="mt-[3%]">
          As his journey unfolds, Bala&apos;s horizon expands as he delves into the realm of AI technology, driven by a newfound passion to explore the frontiers of artificial intelligence. In the ever-evolving tech ecosystem, Bala Santhosh stands as a beacon of creativity and ingenuity, shaping the digital landscape one line of code at a time.
          </p>

        </div>

      </div>

      <div className="text-center my-[5%] overflow-hidden">
        <h1 className=" text-[40px] uppercase text-white font-extrabold">
          Technical Stack
        </h1>
        <h1 className="text-gray-500">
          Technical Skills with Project Experience
        </h1>
        <Technology />
      </div>


    </div>
  );
};

export default About;
