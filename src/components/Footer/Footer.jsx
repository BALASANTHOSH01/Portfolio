import { PiLinkSimple } from "react-icons/pi";

const Footer = () => {
  return (
    <div className="w-screen flex flex-row items-center justify-around  bg-white p-3 text-black">
      <div className=" flex flex-col">
        <h2 className="my-5">Let&apos;s Build Something ImpactFull</h2>
        <div className="flex flex-row gap-5">
          <div className="flex flex-col gap-2 mb-3">
            <a href="" className="flex flex-row items-center gap-1">
              Work
              <PiLinkSimple />
            </a>
            <a href="" className="flex flex-row items-center gap-1">
              About
              <PiLinkSimple />
            </a>
            <a
              href="https://drive.google.com/file/d/1XzZXETsDT63iAUCjnhnLQLihli7zMnLT/view?usp=drive_link"
              target="_blank"
              rel="noreferrer"
              className="flex flex-row items-center gap-1"
            >
              Resume
              <PiLinkSimple />
            </a>
          </div>
          <div className="flex flex-col gap-2">
            <a
              href="https://www.linkedin.com/in/bala-santhosh-bs05052004"
              className="flex flex-row items-center gap-1"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
              <PiLinkSimple />
            </a>
            <a
              href="https://github.com/BALASANTHOSH01"
              className="flex flex-row items-center gap-1"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
              <PiLinkSimple />
            </a>
            <a
              href="mailto:santhos01ac@gmail.com"
              className="flex flex-row items-center gap-1"
              target="_blank"
              rel="noreferrer"
            >
              Email
              <PiLinkSimple />
            </a>
          </div>
        </div>
      </div>
      <div className="">
        <p className=" font-Rubik text-3xl text-transparent bg-gradient-to-b from-red-500 to-yellow-500 bg-clip-text">
          BS
        </p>
      </div>
    </div>
  );
};

export default Footer;
