import BS from '../../assets/Images/BS.jpg';

const Hero = () => {
  return (
    <div className="text-white flex flex-col justify-around p-2 my-[5%]  max-w-screen-xl mx-auto text-left mt-[5%]">
      <div className=" ml-[17%] sm:ml-[3%]">

        <div className="hidden sm:block  w-[100%] sm:mx-auto sm:mt-[2%]">
          <div
            className={`w-[40%] sm:w-[50%] items-center bg-profileBG blur-3xl absolute h-[40vh] box-border`}
          ></div>

          <img
            src={BS}
            alt="profile"
            className="rounded-[50%] relative w-[80%] mx-auto"
          />
        </div>


        <h1 className="sm:hidden font-salsa italic text-transparent bg-gradient-to-b from-red-500 to-yellow-500 bg-clip-text text-[48px] tracking-widest">
          Bala Santhosh
        </h1>



        <div className="hidden font-salsa italic text-transparent bg-gradient-to-b from-red-500 to-yellow-500 bg-clip-text  tracking-widest mt-[4%] sm:flex flex-row gap-2 justify-center">
          <h1 className="text-[45px]">Bala</h1>
          <h1 className="text-[45px]">Santhosh</h1>
        </div> {/**Mobile */}

        <p className=" text-white w-[80%] sm:w-[90%] text-[30px] sm:text-[20px] mt-8 tracking-widest font-Poppins font-thin text-center">
          is a full-stack developer who creates the web application with user-preferred customization.
        </p>

        <div className="flex flex-row sm:flex-col  gap-[12%] mt-[5%] sm:mt-[7%] sm:ml-[10%]">
          <div>
            <h3 className=" tracking-widest font-salsa text-[20px] sm:text-[20px]">currently</h3>
            <p className=" text-gray-500 text-[16px] sm:text-[16px] mt-2">
              Pre-final year student @ IIE Coimbatore
            </p>
          </div>

          <div>
            <h3 className=" tracking-widest font-salsa text-[20px] sm:text-[20px] sm:mt-[5%]">driven by</h3>
            <p className=" text-gray-500 w-[70%] sm:w-[85%] text-[16px] sm:text-[16px] mt-2">
              I&apos;m attracted to programming, love to find solutions to
              problems,and have a burning interestin expanding my knowledge.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
