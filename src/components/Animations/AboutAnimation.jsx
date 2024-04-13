import React, { useEffect, useState } from "react";
import {
  HTML,
  CSS,
  JS,
  Reactjs,
  Bootstrap,
  Tailwindcss,
  Nodejs,
  Expressjs,
  MongoDB,
  Mysql,
  Git,
  Docker,
  Python,
  Django,
  Sqlite,
  Figma,
} from "../../assets/Images/Technology/index.js";

const AboutAnimation = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [positions, setPositions] = useState({});
  const [blinkDelays, setBlinkDelays] = useState({});

  // Function to toggle visibility
  const toggleVisibility = () => {
    setIsVisible((prevState) => !prevState);
  };

  // Use useEffect to toggle visibility every 1 second
  useEffect(() => {
    const interval = setInterval(toggleVisibility, 1500);
    return () => clearInterval(interval);
  }, []);

  // Function to generate random position
  const getRandomPosition = () => {
    const maxX = window.innerWidth - 100; // Adjust 30 based on image width
    const maxY = window.innerHeight - 100; // Adjust 30 based on image height
    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);
    return { x: randomX, y: randomY };
  };

  // Function to generate random blink delay for each image
  const getRandomBlinkDelays = () => {
    const delays = {
      Reactjs: Math.random() * 100, // Max delay of 1 second
      Git: Math.random() * 200,
      Figma: Math.random() * 300,
      JS: Math.random() * 400,
      Docker: Math.random() * 500,
      Tailwindcss: Math.random() * 100,
      Nodejs: Math.random() * 200,
      Mysql: Math.random() * 300,
      HTML: Math.random() * 400,
      CSS: Math.random() * 500,
      Expressjs: Math.random() * 100,
      Python: Math.random() * 200,
      Bootstrap: Math.random() * 300,
    };
    return delays;
  };

  // Use useEffect to update position and blink delays every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setPositions(getRandomPosition());
      setBlinkDelays(getRandomBlinkDelays());
    }, 2000); // Change interval as needed
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <img
        src={Reactjs}
        alt="reactjs"
        className={`absolute w-[70px] rounded-[0%] top-[4%] left-[13%] ${
          isVisible ? "blink" : ""
        }`}
        style={{ animationDelay: `${blinkDelays.Reactjs}ms` }}
      />
      <img
        src={Git}
        alt="git"
        className={`absolute w-[30px] rounded-[0%] top-[8%] right-[25%] ${
          isVisible ? "blink" : ""
        }`}
        style={{ animationDelay: `${blinkDelays.Git}ms` }}
      />
      <img
        src={Figma}
        alt="Figma"
        className={`absolute w-[30px] rounded-[0%] top-[1%] left-[30%] ${
          isVisible ? "blink" : ""
        }`}
        style={{ animationDelay: `${blinkDelays.Figma}ms` }}
      />
      <img
        src={JS}
        alt="Javascript"
        className={`absolute w-[65px] rounded-[0%] top-[3%] right-[7%] ${
          isVisible ? "blink" : ""
        }`}
        style={{ animationDelay: `${blinkDelays.JS}ms` }}
      />
      <img
        src={Docker}
        alt="Docker"
        className={`absolute w-[35px] rounded-[0%] top-[23%] right-[5%] ${
          isVisible ? "blink" : ""
        }`}
        style={{ animationDelay: `${blinkDelays.Docker}ms` }}
      />
      <img
        src={Tailwindcss}
        alt="tailwindcss"
        className={`absolute w-[45px] rounded-[0%] top-[20%] left-[10%] ${
          isVisible ? "blink" : ""
        }`}
        style={{ animationDelay: `${blinkDelays.Tailwindcss}ms` }}
      />
      <img
        src={Nodejs}
        alt="nodejs"
        className={`absolute w-[65px] rounded-[0%] top-[20%] left-[25%] ${
          isVisible ? "blink" : ""
        }`}
        style={{ animationDelay: `${blinkDelays.Nodejs}ms` }}
      />
      <img
        src={Mysql}
        alt="Mysql"
        className={`absolute w-[40px] rounded-[0%] top-[1%] left-[5%] ${
          isVisible ? "blink" : ""
        }`}
        style={{ animationDelay: `${blinkDelays.Mysql}ms` }}
      />
      <img
        src={HTML}
        alt="html"
        className={`absolute w-[40px] rounded-[0%] top-[0%] right-[33%] ${
          isVisible ? "blink" : ""
        }`}
        style={{ animationDelay: `${blinkDelays.HTML}ms` }}
      />
      <img
        src={CSS}
        alt="css"
        className={`absolute w-[24px] rounded-[0%] top-[13%] left-[25%] ${
          isVisible ? "blink" : ""
        }`}
        style={{ animationDelay: `${blinkDelays.CSS}ms` }}
      />
      <img
        src={Expressjs}
        alt="expressjs"
        className={`absolute w-[30px] rounded-[0%] top-[12%] left-[5%] ${
          isVisible ? "blink" : ""
        }`}
        style={{ animationDelay: `${blinkDelays.Expressjs}ms` }}
      />
      <img
        src={Python}
        alt="Python"
        className={`absolute w-[80px] rounded-[0%] top-[17%] right-[25%] ${
          isVisible ? "blink" : ""
        }`}
        style={{ animationDelay: `${blinkDelays.Python}ms` }}
      />
      <img
        src={Bootstrap}
        alt="Bootstrap"
        className={`absolute w-[40px] rounded-[0%] top-[16%] right-[13%] ${
          isVisible ? "blink" : ""
        }`}
        style={{ animationDelay: `${blinkDelays.Bootstrap}ms` }}
      />
    </div>
  );
};

export default AboutAnimation;
