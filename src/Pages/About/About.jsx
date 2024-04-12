import BS_Img from "../../assets/Images/BS.jpg";
import Technology from "../../components/Technology/Technology";
import santhoshImg from "../../assets/Images/Santhosh-img.png";

const About = () => {
  return (
    <div>

      <h1 className="hidden md:block text-white font-semibold text-[30px] text-center mb-[10%]">About Me</h1>
      <img
        src={BS_Img}
        alt="Img"
        className="rounded-[50%] md:w-[80%]  w-[30%] mx-auto"
      />

      <div className="my-[2%] flex flex-row md:flex-col px-[8%] mx-auto">

        <div className=" flex flex-col md:flex-row md:gap-[4%] md:justify-center text-white font-extrabold text-[60px] md:text-[40px] w-[30%] md:w-full">
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
            Tatev Aslanyan is a seasoned Data Science and AI professional with
            over half a decade of international experience in Europe and North
            America. She holds a Bachelor’s and Master’s degree in #1 ranked
            technical program, Econometrics and Operations Research from
            reputable universities in Netherlands.
          </p>

          <p className="mt-[3%]">
            Tatev is the Co-founder of LunarTech where she aims to make Data
            Science and AI accessible to everyone – individuals, businesses and
            institutions.
          </p>

          <p className="mt-[3%]">
            With expertise spanning Machine Learning, Deep Learning, NLP,
            Statistical Modelling, and Advanced Analytics, Tatev has led
            numerous successful Data Science and AI projects at leading tech
            companies across the world showcasing a deep understanding of all
            data science domains.
          </p>

          <p className="mt-[3%]">
            Tatev has contributed to the research community with first-authored
            papers in Recommender Systems at globally recognized ML and NLP
            scientific journals, fostering an open-source environment. Her
            commitment to education is evident in years of teaching and creating
            the acclaimed “The Ultimate Data Science Bootcamp” at LunarTech.
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
