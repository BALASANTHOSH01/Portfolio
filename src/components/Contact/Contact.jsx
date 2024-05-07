import { RiSendPlaneFill as SendIcon } from "react-icons/ri";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div className="block p-5 px-8 rounded-[5px] bg-white mx-auto sm:w-[98%] md:w-[90%] w-[40%] my-16 mb-24">
      <div className="flex flex-col">
        <h1 className="text-center text-2xl font-bold my-3 font-Poppins text-transparent bg-gradient-to-b from-red-500 to-yellow-500 bg-clip-text">
          Contact Me
        </h1>
        <label htmlFor="name">Name :</label>
        <input
          type="text"
          placeholder="name"
          id="name"
          className="p-2 border border-gray-400 rounded-[5px] focus:outline-none"
        />
        <br></br>

        <label htmlFor="email">Email :</label>
        <input
          type="email"
          placeholder="email"
          id="email"
          className="p-2 border border-gray-400 rounded-[5px] focus:outline-none"
        />
        <br></br>

        <label htmlFor="Subject">Subject :</label>
        <input
          type="text"
          placeholder="subject"
          id="Subject"
          className="p-2 border border-gray-400 rounded-[5px] focus:outline-none"
        />
        <br></br>

        <label htmlFor="message">Message :</label>
        <textarea
          cols={5}
          rows={5}
          className="p-2 border resize-none border-gray-400 rounded-[5px] focus:outline-none mb-2"
          placeholder="message"
        ></textarea>

        <div className=" flex flex-row gap-5 items-center">
          <hr className="h-[1px] w-[50%] border sm:hidden" />
          <motion.button
            whileTap={{ scale: 0.6 }}
            className="p-3  text-2xl hover:shadow-lg my-[5%] hover:text-white duration-200  mx-auto rounded-[25px]  bg-gradient-to-b from-red-400 to-yellow-400 font-semibold "
          >
            <SendIcon />
          </motion.button>
          <hr className="h-[1px] w-[50%] border sm:hidden" />
        </div>

      </div>
    </div>
  );
};

export default Contact;
