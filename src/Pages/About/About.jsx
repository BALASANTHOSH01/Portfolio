import BS from "../../assets/Images/BS.jpg";
import AboutExperience from "../../components/AboutExperience/AboutExperience";

const About = () => {
    return (
        <div className="my-[5%]">
            <div className="flex flex-row sm:block justify-around mx-auto p-2">
                <div className="w-[40%] sm:w-[70%] sm:block sm:mx-auto sm:mt-[2%]">
                    <div
                        className={`w-[40%] sm:w-[50%] items-center bg-profileBG blur-3xl absolute h-[40vh] box-border`}
                    ></div>

                    <img
                        src={BS}
                        alt="profile"
                        className="rounded-[50%] relative w-[70%]  mx-auto "
                    />
                </div>

                <div className="w-[50%] sm:w-[70%] sm:block sm:mx-auto sm:mt-[10%] text-center mr-[2%] relative">
                    <h1 className=" font-salsa tracking-widest text-white italic text-[40px] sm:text-[34px]">
                        Who am i ?
                    </h1>

                    <div className="w-[60%] sm:w-[85%] sm:mt-[6%] text-left mx-auto my-2 mt-3 items-center text-[13px] sm:text-[13px]">
                        <p className=" text-gray-400 tracking-wider">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                            Similique nostrum pariatur cum voluptates perspiciatis enim
                            possimus. Magni sequi voluptatibus dolorem optio aspernatur aut
                            dolorum aliquid culpa error, sunt doloremque unde!
                        </p>
                        <br></br>

                        <p className=" text-gray-400 tracking-wider">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae ex
                            rerum dolore natus provident minima ipsum mollitia sed quod, ut
                            esse delectus aliquam ratione et, nesciunt quos earum nobis!
                            Laborum.
                        </p>
                    </div>
                </div>
            </div>

            <AboutExperience/>
        </div>
    );
};

export default About;
