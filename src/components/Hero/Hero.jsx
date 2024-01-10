// import BS from '../../assets/Images/BS.jpg';

const Hero = () => {
  return (
    <div className="text-white flex flex-col justify-around p-2 my-[5%]  max-w-screen-xl mx-auto text-left mt-[5%]">
      <div className=" ml-[17%]">
        <h1 className=" font-salsa italic text-transparent bg-gradient-to-b from-red-500 to-yellow-500 bg-clip-text text-[48px] tracking-widest">
          Bala Santhosh
        </h1>

        <p className=" text-white text-[30px] mt-8 tracking-widest font-Poppins font-thin">
          is a full-stack developer who creates the
          <br /> web application with user-preferred customization.
        </p>

        <div className="flex flex-row gap-[12%] mt-[5%]">
          <div>
            <h3 className=" tracking-widest font-salsa text-[20px]">currently</h3>
            <p className=" text-gray-500 text-[16px] mt-2">
              Pre-final year student @ IIE Coimbatore
            </p>
          </div>

          <div>
            <h3 className=" tracking-widest font-salsa text-[20px]">driven by</h3>
            <p className=" text-gray-500 text-[16px] mt-2">
              I&apos;m attracted to programming, love to find solutions to
              problems, <br/>and have a burning interestin expanding my knowledge.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
