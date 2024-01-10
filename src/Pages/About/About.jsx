import BS from "../../assets/Images/BS.jpg";
import AboutExperience from "../../components/AboutExperience/AboutExperience";

const About = () => {
    return (
        <div className="my-[5%]">
            <div className="flex flex-row justify-around mx-auto p-2">
                <div className="w-[40%]">
                    <div
                        className={`w-[40%] items-center bg-profileBG blur-3xl absolute h-[40vh] box-border`}
                    ></div>

                    <img
                        src={BS}
                        alt="profile"
                        className="rounded-[50%] relative w-[70%] mx-auto "
                    />
                </div>

                <div className="w-[50%] text-center mr-[2%] relative">
                    <h1 className=" font-salsa tracking-widest text-white italic text-[40px]">
                        How am i ?
                    </h1>

                    <div className="w-[60%] text-left mx-auto my-2 mt-3 items-center ">
                        <p className="text-[13px] text-gray-400 tracking-wider">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                            Similique nostrum pariatur cum voluptates perspiciatis enim
                            possimus. Magni sequi voluptatibus dolorem optio aspernatur aut
                            dolorum aliquid culpa error, sunt doloremque unde!
                        </p>
                        <br></br>

                        <p className=" text-[13px] text-gray-400 tracking-wider">
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
