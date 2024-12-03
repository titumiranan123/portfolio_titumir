import React from "react";
import profile from "../assets/AboutImage.png";

const About: React.FC = () => {
  return (
    <div className="lg:mt-[172px] max-w-[1240px] mx-auto">
      <div className="line lg:w-[1240px] w-[100%] h-[2px] overflow-hidden"></div>
      <div
        id="about"
        className="   flex justify-center flex-wrap lg:flex-nowrap  lg:gap-10 gap-14 md:mb-0 mb-3 items-center"
      >
        <div className="lg:w-1/2 ">
          <img className="w-[590px] h-[750px] img-fluid" alt="" src={profile} />
        </div>
        <div className="lg:w-1/2 flex flex-col gap-4">
          <button className="btn  w-[180px] text-[#6919FF]">About</button>
          <h2 className="text-[48px] text-[#F6F7FA]">Web Developer</h2>
          <div className="text-[#919BBA] text-[16px]">
            Hello, I&apos;m{" "}
            <span className="text-[#F6F7FA]">Md Titumir Anan</span>, a
            passionate{" "}
            <span className="text-[#F6F7FA]">Junior Frontend Developer</span>{" "}
            from Bangladesh with a knack for turning design concepts into{" "}
            <span className="text-[#F6F7FA]">responsive</span> and visually
            appealing websites. Adept at HTML, CSS, JavaScript, React, Next JS
            and complemented by my cyber security expertise. I thrive on
            creating seamless user experiences. Committed to staying{" "}
            <span className="text-[#F6F7FA]">
              ahead in web development trends
            </span>{" "}
            and delivering top-notch projects with satisfaction.
          </div>
        </div>
      </div>
      <div className="line lg:w-[1240px] w-full h-[2px] overflow-hidden"></div>
    </div>
  );
};

export default About;
